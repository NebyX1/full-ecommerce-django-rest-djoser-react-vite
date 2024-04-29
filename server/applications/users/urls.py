from django.urls import path, include
from .views import PurchaseView, ReviewViewSet, UserProfileView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('user/profile/', UserProfileView.as_view(), name='user_profile'),
    path('purchased/', PurchaseView.as_view(), name='purchased'),
    path('purchased/<int:pk>/', PurchaseView.as_view(), name='purchase-detail'),
    path('reviews/', ReviewViewSet.as_view({'get': 'list', 'post': 'create'}), name='reviews'),
]
