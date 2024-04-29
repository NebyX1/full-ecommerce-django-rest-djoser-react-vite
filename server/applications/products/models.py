from django.db import models


class GemAndPlants(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField(max_length=2048)
    type = models.CharField(max_length=50)

    # Django necesita saber como enlistará a los usuarios en el admin panel
    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=100)
    image = models.CharField(max_length=255)  # Si vas a almacenar la ruta de la imagen como cadena
    price = models.DecimalField(max_digits=6, decimal_places=2)  # Ajusta según tus necesidades
    stars = models.IntegerField()
    stock = models.IntegerField()
    offer = models.BooleanField(default=False)
    date_added = models.DateField()
    date_updated = models.DateField()

    def __str__(self):
        return self.name
