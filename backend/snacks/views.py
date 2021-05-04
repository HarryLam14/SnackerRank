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
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = SnackSerializer
    queryset = Snack.objects.all()

    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["tags"]
    search_fields = ["name", "image", "description", "tags__name"]

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

class SnackUpload(viewsets.ModelViewSet):
    #permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = SnackSerializer
    
    def post(self, request, format=None):
        print(request.data)
        serializer = SnackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class SnackView(View):
#     model = Snack
    
#     def snack(request):
#         if request.method == 'GET':
#             if len(request.GET['id']) == 1: # check if single id parameter is given in request [39]
#                 # get snack from id parameter
#                 query = request.query_params.get('id')
#                 snack = Snack.objects.get(id=query)
#                 # return snack as JSON
#                 if snack: # check if database result contains data
#                     return JsonResponse(snack.values()) # return single snack
#                 else:
#                     return Response(status=HTTP_400_BAD_REQUEST, data=error)
#             else: # if no id given then return all snacks
#                 snacks = Snack.objects.all()
#                 return JsonResponse(list(snacks.values()))
#         else:
#             return Response(status=HTTP_400_BAD_REQUEST, data=error)

#     @login_required
#     def new_snack(request): 
#         if request.method =='POST':
#             pass # Replace this line with code for adding new snack
#         else:
#             return Response(status=HTTP_400_BAD_REQUEST, data=error)    
    


# class SnackViewSet(viewsets.ModelViewSet):
#     queryset = Snack.objects.all()
#     serializer_class = SnackSerializer

#     # permissision_classes = [
#     #     permissions.IsAuthenticatedOrReadOnly
#     # ]


#     #filter_backends = [IsOwnerOrAnonFilterBackend, DjangoFilterBackend,
#     #                   filters.OrderingFilter, filters.SearchFilter]
#     #filterset_fields = ["subject__name", "answer"]

#     #ordering_fields = ["rating"] (need to aggregate rating before any sorting)
#     #search_fields = ["question", ]

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

#     @action(detail=True)
#     def answered(self, request, pk=None):
#         card = self.get_object()
#         val = card.difficulty
#         outcome = self.request.query_params.get('correct')
#         serializer = self.get_serializer(card)

#         if outcome == "true":
#             val += 1
#         elif outcome == "false":
#             val -= 2
#         else:
#             pass
#         card.difficulty = (val)
#         card.save()
#         return Response(serializer.data)
