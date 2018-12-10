"""my_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from account_app import views
from rest_framework import routers
from account_app.views import UserViewSet

user_list = UserViewSet.as_view({'get': 'list'})
router = routers.DefaultRouter()
router.register(r'users', UserViewSet, base_name='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.default),
    path('login/',views.login),
    path('register/',views.register),
    path('main/',views.main),
    path('upemail/',views.upemail),
    path('uppassword/',views.uppassword),
    path('logout/',views.logout),
    url(r'^users', user_list),
]