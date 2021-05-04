from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Snack(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=2000)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name
    
class Review(models.Model):
    snack_id = models.ForeignKey(Snack, on_delete=models.SET_NULL, null=True)
    user = models.CharField(max_length=50)
    rating = models.FloatField(validators=[MinValueValidator(0),
                                       MaxValueValidator(5)])
    reviewtext = models.CharField(max_length=1000)
    pub_date = models.DateTimeField()