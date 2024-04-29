from django.urls import path
from .views import GemAndPlantsList
from .views import ProductList, ProductDetail


urlpatterns = [
    path('gem-and-plants/', GemAndPlantsList.as_view(), name='gem-and-plants-list'),
    path('products/', ProductList.as_view(), name='product-list'),
    path('product/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
]
