from rest_framework import serializers
from .models import Snack, Tag, Review

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag 
        fields = ('id', 'name', 'image')

class SnackSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Snack 
        fields = ('id', 'name', 'image', 'description', 'tags')

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review 
        fields = ('id', 'user', 'rating', 'reviewtext', 'snack_id', 'pub_date')