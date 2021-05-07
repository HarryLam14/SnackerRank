from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from django.db.models import Avg

def upload_to(instance, filename):
    return '{filename}'.format(filename=filename)

class Tag(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(_("Image"), upload_to=upload_to, default='default.jpg')

    class Meta:
            ordering = ('name',)
    
    def __str__(self):
        return self.name

class Snack(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        "auth.User", on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(_("Image"), upload_to=upload_to, default='default.jpg')
    description = models.CharField(max_length=2000)
    tags = models.ManyToManyField(Tag)

    @property
    def avg_rating(self):
        return Review.objects.filter(snack_id__id=self.id).aggregate(Avg('rating'))

    def __str__(self):
        return self.name
    
class Review(models.Model):
    snack_id = models.ForeignKey(Snack, related_name="reviews", on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(
        "auth.User", on_delete=models.CASCADE, null=True, blank=True)
    rating = models.FloatField(validators=[MinValueValidator(0),
                                       MaxValueValidator(5)])
    reviewtext = models.CharField(max_length=1000)
    pub_date = models.DateTimeField()

    class Meta:
            ordering = ('-pub_date',)