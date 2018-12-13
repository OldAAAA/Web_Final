# coding:utf-8
from django.contrib.auth.models import Group
from django import forms
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.contrib import auth
from django.contrib.sessions.models import Session
from django.shortcuts import HttpResponse
from rest_framework import viewsets
from rest_framework import serializers
from .serializers import UserSerializer
from rest_framework.response import Response
import time
import datetime

User = get_user_model()


class MyForm(forms.Form):
    email = forms.EmailField(required=False, error_messages={'invalid': 'enter a valid email address.'},
                             widget=forms.TextInput(
                                 attrs={'id': 'email', 'class': 'inputText', 'placeholder': 'Email',
                                        'oninput': 'isEmail()'}))
    username = forms.CharField(required=False, widget=forms.TextInput(
        attrs={'id': 'username', 'class': 'inputText', 'placeholder': 'Username', 'oninput': 'isUsername()'}))
    pwd = forms.CharField(required=False, widget=forms.PasswordInput(
        attrs={'id': 'password', 'class': 'inputText', 'placeholder': 'Password', 'oninput': 'checkpassword()'}))
    pwd_confirm = forms.CharField(required=False, widget=forms.PasswordInput(
        attrs={'id': 'password_confirmation', 'class': 'inputText', 'placeholder': 'Password confirmation',
               'oninput': 'checkpasswordconfirm()'}))


class ChangeEmailForm(forms.Form):
    email = forms.EmailField(required=False, error_messages={'invalid': 'enter a valid email address.'},
                             widget=forms.TextInput(
                                 attrs={'class': "form-control", 'type': 'email', 'id': 'email'}))


class ChangePasswordForm(forms.Form):
    old_pwd = forms.CharField(required=False, widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'type': 'password', 'id': 'old_password', 'placeholder': "Old Password"}))
    new_pwd = forms.CharField(required=False, widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'type': 'password', 'id': 'password', 'placeholder': "Password"}))
    new_pwd_confirm = forms.CharField(required=False, widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'type': 'password', 'id': 'password_confirmation',
               'placeholder': "Password confirmation"}))


# <input class="" type="password" name="old_pwd" id="old_password" placeholder="Old Password" required="">

# http://localhost:8000/
# if not logging in yet -> /login
# if already logging in -> /me
def default(request):
    if request.user.is_authenticated:
        return redirect('/main')
    return render(request, '../templates/index.html')


def main(request):
    if (request.method == 'POST'):
        if 'LogOut' in request.POST:
            if request.user.is_authenticated:
                auth.logout(request)
            return render(request, '../templates/index.html')
        if 'Profile' in request.POST:
            return redirect('/profile')

    else:
        if request.user.is_authenticated:
            return render(request, '../templates/main.html',
                          {'username': request.user.username, 'email': request.user.email})
        else:
            return render(request, '../templates/index.html')


def profile(request):
    if (request.method == 'POST'):
        if 'ChangeEmail' in request.POST:
            return redirect('/upemail')
        if 'ChangePassword' in request.POST:
            return redirect('/uppassword')
        if 'Return' in request.POST:
            return redirect('/main')

    return render(request, '../templates/profile.html',
                  {'username': request.user.username, 'email': request.user.email})


def upemail(request):
    if request.user.is_authenticated:
        if (request.method == 'POST'):
            if 'Return' in request.POST:
                return redirect('/profile')
            f = ChangeEmailForm(request.POST)
            if f.is_valid():
                a = 0
                email = f.cleaned_data['email']
                # insert into database
                filterResult = User.objects.filter(email=email)
                context = {"form": f, 'error': f.errors, 'username': request.user.username}
                if len(filterResult) > 0:
                    a = 1
                    context['error1'] = 'email already taken.'
                if a != 1:
                    obj = User.objects.get(username=request.user.username)
                    obj.email = email
                    obj.save()
                    context['changeEmailSuccess'] = 'Email Changed Successfully!'
            return render(request, '../templates/upemail.html', context)
        else:
            default_data = {'email': request.user.email}
            f = ChangeEmailForm(default_data)
            return render(request, '../templates/upemail.html', {'form': f})
    else:
        return redirect('/default')


def uppassword(request):
    if request.user.is_authenticated:
        if (request.method == 'POST'):
            if 'Return' in request.POST:
                return redirect('/profile')
            f2 = ChangePasswordForm(request.POST)
            if f2.is_valid():
                email = request.user.email
                password = f2.cleaned_data['old_pwd']
                user = authenticate(email=email, password=password)
                context = {'form2': f2}
                if user is not None:
                    new_pwd = f2.cleaned_data['new_pwd']
                    new_pwd_confirm = f2.cleaned_data['new_pwd_confirm']
                    a = 0
                    if len(new_pwd) < 6:
                        a = 1
                        context['newPasswordTooShort'] = 'password too short.'
                    if new_pwd != new_pwd_confirm:
                        a = 1
                        context['passwordNotMatch'] = 'password mismatch.'
                    if a != 1:
                        user.set_password(new_pwd)
                        user.save()
                        context['passwordChangeSuccess'] = 'Password Changed Successfully.'
                else:
                    context['oldPasswordWrong'] = 'invalid password.'
            return render(request, '../templates/uppassword.html', context)
        else:
            f2 = ChangePasswordForm(request.POST)
            context = {'form2': f2, 'error': f2.errors}
            return render(request, '../templates/uppassword.html', context)
    else:
        return render(request, '../templates/index.html')


def login(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['pw']
        context = {'email': email}
        hasUser = User.objects.filter(email=email)
        if hasUser:  # User Exists
            user = authenticate(email=email, password=password)
            if user is not None:
                auth.login(request, user)
                request.session.set_expiry(1000)
                User.objects.filter(email=email).update(is_online=True)
                return redirect('/main')
            else:
                context['passwordWrongError'] = 'Wrong password!'
                return render(request, '../templates/login.html', context)
        else:
            context['emailNotExistError'] = 'The email is not registed!'
            return render(request, '../templates/login.html', context)
    return render(request, '../templates/login.html')


def register(request):
    if request.method == "POST":
        print('im in\n')
        if 'Submit' in request.POST:
            print('im in Submit\n')
            f = MyForm(request.POST)
            if f.is_valid():
                email = f.cleaned_data['email']
                username = f.cleaned_data['username']
                password = f.cleaned_data['pwd']
                password_confirm = f.cleaned_data['pwd_confirm']
                context = {'form': f, 'error': f.errors}
                a = 0
                b = 0
                if username.islower() == False:
                    a = 1
                    context['errorUsername'] = 'username has illegal characters.'
                if password != password_confirm:
                    a = 1
                    context['errorPasswordMatch'] = 'password mismatch.'
                if len(password) < 6:
                    a = 1
                    context['errorPasswordShort'] = 'password too short.'
                # insert into database
                filterResult = User.objects.filter(email=email)
                filterREsult1 = User.objects.filter(username=username)
                if len(filterResult) > 0:
                    a = 1
                    context['error1'] = 'email already taken.'
                if len(filterREsult1) > 0:
                    b = 1
                    context['errorUsername'] = 'username already taken.'
                if a == 1 or b == 1:
                    return render(request, '../templates/register.html', context)
                else:
                    User.objects.create_user(email=email, username=username, password=password)
                    return redirect('/login/')
        if 'Return' in request.POST:
            print('im in Return\n')
            return redirect('/login/')
        return render(request, '../templates/register.html', {"form": f, 'error': f.errors})
    else:
        f = MyForm()
        return render(request, '../templates/register.html', {"form": f})


# this method is to logout
# and set user status to offline
def logout(request):
    if request.method == "GET":
        User.objects.filter(email=request.user.email).update(is_online=False)
        auth.logout(request)
        return render(request, '../templates/logout.html')


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    def list(self, request):
        checkemail = request.query_params.__getitem__('checkmail')
        last_check = time.time()
        print(checkemail)
        User.objects.filter(email=checkemail).update(last_check=last_check)
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
