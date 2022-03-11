from django.db import models

# Create your models here.

class ImagePredict(models.Model):
    img_pred = models.ImageField()

class ImageFolder(models.Model):
    img0 = models.ImageField()
    img1 = models.ImageField()
    img2 = models.ImageField()
    img3 = models.ImageField()
    img4 = models.ImageField()
    img5 = models.ImageField()
    img6 = models.ImageField()
    img7 = models.ImageField()
    img8 = models.ImageField()
    
