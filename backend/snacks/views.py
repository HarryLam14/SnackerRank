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
from django.core.exceptions import PermissionDenied

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

    def create(self, request, *args, **kwargs):
        # Override create method to prevent duplicate object creation
        serializer = ReviewSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = self.request.user
        snack = serializer.validated_data['snack_id']
        obj, created = Review.objects.get_or_create(owner=user, snack_id=snack, defaults=serializer.validated_data)
        if created:
            serializer.save(owner=user)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_409_CONFLICT)

    # def perform_create(self, serializer):
    #     # snack_id = get_object_or_404(Snack, slug=slug)
    #     # Get the reviews posted by the user for this product
    #     user_review = Review.snack_id.filter(owner=self.request.user)
    #     if user_review:
    #         raise PermissionDenied('You have already given your review on this post.')
    #     serializer.save(owner=self.request.user)

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = UserSerializer
    queryset = User.objects.all()
