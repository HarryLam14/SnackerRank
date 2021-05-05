from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Snack, Tag, Review

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag 
        fields = "__all__"

class SnackSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Snack 
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    reviews = serializers.HyperlinkedRelatedField(
        view_name="review-detail", many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'reviews']

class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Review 
        fields = "__all__"