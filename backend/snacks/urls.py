from django.urls import path

from rest_framework import routers
from .views import SnackViewSet

router = routers.DefaultRouter()
router.register(r'snack', SnackViewSet, basename="snack")

urlpatterns = router.urls