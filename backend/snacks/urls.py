from django.urls import path

from rest_framework import routers
# from .views import SnackViewSet
from .views import SnackView, TagView, ReviewView

router = routers.DefaultRouter()
# router.register(r'snack', SnackViewSet, basename="snack")
router.register(r'snack', SnackView, 'snack')
router.register(r'tag', TagView, 'tag')
router.register(r'review', ReviewView, 'review')

urlpatterns = router.urls