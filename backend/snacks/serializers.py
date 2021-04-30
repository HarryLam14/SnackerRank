from rest_framework import serializers
from .models import Snack, Tag, Review

class SnackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Snack 
        fields = ('id', 'name', 'description', 'tags')

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag 
        fields = ('id', 'name')

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review 
        fields = ('id', 'user', 'rating', 'reviewtext', 'snack_id', 'pub_date')