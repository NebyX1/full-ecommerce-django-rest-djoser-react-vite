from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from .models import User, Purchase, Review, UserProfile


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['name', 'last_name', 'gender', 'location', 'avatar']


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = ['id', 'user', 'items', 'total', 'shipment_info', 'status',
                  'date_purchased', 'reviewed']


class ReviewSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'user', 'username', 'items', 'stars', 'comment', 'date_reviewed']
