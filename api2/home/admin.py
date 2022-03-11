from django.contrib import admin
from .models import ImageFolder, ImagePredict
# Register your models here.

admin.site.register(ImagePredict)
admin.site.register(ImageFolder)