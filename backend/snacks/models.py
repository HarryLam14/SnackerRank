from django.db import models

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
    user = models.CharField(max_length=50)
    rating = models.IntegerField()
    reviewtext = models.CharField(max_length=1000)
    snack_id = models.ForeignKey(Snack, on_delete=models.CASCADE)
    pub_date = models.DateTimeField()

    def __str__(self):
        return self.rating  