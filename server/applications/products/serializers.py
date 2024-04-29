from rest_framework import serializers
from .models import GemAndPlants
from .models import Product


class GemAndPlantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GemAndPlants
        fields = ['id', 'title', 'description', 'image', 'type']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
