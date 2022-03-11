from django.db import models
from django.db.models.base import Model

# Create your models h

class ImageFolder(models.Model):
    img = models.ImageField()
    background_img = models.ImageField()
    img_pred = models.ImageField()

class ImagePredict(models.Model):
    img_pred = models.ImageField()