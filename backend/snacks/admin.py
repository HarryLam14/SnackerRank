from django.contrib import admin
from .models import Snack, Tag, Review

class SnackAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('owner', 'rating', 'reviewtext', 'snack_id', 'pub_date')

# Register your models here.

admin.site.register(Snack, SnackAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Review, ReviewAdmin)