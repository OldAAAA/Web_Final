# account_app/models.py
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, Group
from django.db import models
from django.utils import timezone


class MyUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        """
        Creates and saves a User with the given email, username
         and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            username = username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    # email
    email = models.EmailField(unique=True)


    objects = MyUserManager()

    # creation date
    created_at = models.DateTimeField('Creation Time', auto_now_add=True)

    username = models.TextField(unique=True)
    last_check = models.DateTimeField('last check Time', default=timezone.now())

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []
    is_online = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

