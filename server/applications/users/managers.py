from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


class UserManager(BaseUserManager, models.Manager):
    def _create_user(
        self,
        username,
        email,
        password,
        is_staff,
        is_superuser,
        is_active,
        **extra_fields
    ):
        # Validar el correo electrónico.
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError("Debe ingresar un email válido.")

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            is_staff=is_staff,
            is_superuser=is_superuser,
            is_active=is_active,
            **extra_fields
        )
        # Encriptar la contraseña usando el método set_password de la clase AbstractBaseUser
        user.set_password(password)
        user.save(using=self.db)
        return user

    # Establecemos los campos requeridos para crear un superusuario
    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        return self._create_user(username, email, password, **extra_fields)

    # Establecemos los campos requeridos para crear un usuario común
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError("El email es obligatorio")
        if password is None:
            raise ValueError("La contraseña es obligatoria")
        return self._create_user(
            username, email, password, False, False, False, **extra_fields
        )
