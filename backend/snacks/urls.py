from django.urls import path

from rest_framework import routers
# from .views import SnackViewSet
from .views import SnackView, TagView, ReviewView, SnackUpload

router = routers.DefaultRouter()
# router.register(r'snack', SnackViewSet, basename="snack")
router.register(r'snack', SnackView, 'snack')
router.register(r'tag', TagView, 'tag')
router.register(r'review', ReviewView, 'review')
router.register(r'upload', SnackUpload, 'upload')

urlpatterns = router.urls