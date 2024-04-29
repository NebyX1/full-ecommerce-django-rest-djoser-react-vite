from rest_framework import generics
from .models import GemAndPlants
from .serializers import GemAndPlantsSerializer
from .models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny


class GemAndPlantsList(generics.ListAPIView):
    queryset = GemAndPlants.objects.all()
    serializer_class = GemAndPlantsSerializer
    permission_classes = [AllowAny]


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
