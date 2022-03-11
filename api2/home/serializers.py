from django.db import models
from rest_framework import serializers

from .models import ImageFolder

class PredictSerializer(serializers.Serializer):
    predict = serializers.ImageField()
    
class ImageSerializer(serializers.ModelSerializer):
    class Meta():
        model = ImageFolder
        fields = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8']
    