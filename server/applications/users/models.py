from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser, PermissionsMixin
from .managers import UserManager


class User(AbstractUser, PermissionsMixin):

    # Campos de la tabla User
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=254, unique=True)

    # Variable para definir si el tipo de usuario puede acceder al admin panel
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    # Django necesita saber cual es el campo que se va a utilizar para el login
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    # Django necesita saber cuales son los campos requeridos para crear un usuario y un superusuario,
    # así como los campos reservados para el superuser, eso lo tenemos definido en el manager
    objects = UserManager()

    # Django necesita saber como enlistará a los usuarios en el admin panel
    def __str__(self):
        return self.username


class UserProfile(models.Model):
    # Define the gender choices
    GENDER_CHOICES = (
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    )

    # Define the location choices
    LOCATION_CHOICES = (
        ('AR', 'Artigas'),
        ('CA', 'Canelones'),
        ('CL', 'Cerro Largo'),
        ('CO', 'Colonia'),
        ('DU', 'Durazno'),
        ('FS', 'Flores'),
        ('FD', 'Florida'),
        ('LA', 'Lavalleja'),
        ('MA', 'Maldonado'),
        ('MO', 'Montevideo'),
        ('PA', 'Paysandú'),
        ('RN', 'Río Negro'),
        ('RV', 'Rivera'),
        ('RO', 'Rocha'),
        ('SA', 'Salto'),
        ('SJ', 'San José'),
        ('SO', 'Soriano'),
        ('TA', 'Tacuarembó'),
        ('TT', 'Treinta y Tres'),
    )

    # Define the fields with the specified choices and default values
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True)
    location = models.CharField(max_length=2, choices=LOCATION_CHOICES, blank=True)
    avatar = models.URLField(default='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                             blank=True)

    def __str__(self):
        return self.user.username


class Purchase(models.Model):
    # Definimos las opciones para el campo status
    STATUS_CHOICES = [
        ('Pendiente', 'Pendiente'),
        ('Procesando', 'Procesando'),
        ('Enviado', 'Enviado'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.JSONField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    shipment_info = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pendiente')
    date_purchased = models.DateTimeField(auto_now_add=True)
    reviewed = models.BooleanField(default=False)

    def __str__(self):
        return f"Compra de {self.user.username} - Total: {self.total}"


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.JSONField()
    stars = models.IntegerField()
    comment = models.TextField()
    date_reviewed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review de {self.user.username} - {self.stars} estrellas"
