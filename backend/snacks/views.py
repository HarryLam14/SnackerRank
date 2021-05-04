from django.shortcuts import render
from .models import Tag, Snack, Review
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets, permissions, filters, status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
class SnackView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = SnackSerializer
    queryset = Snack.objects.all()

    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["tags"]
    search_fields = ["name", "description", "tags__name"]

class TagView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class ReviewView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["snack_id"]
