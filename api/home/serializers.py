from rest_framework import serializers

class ImageSerializer(serializers.Serializer):
    img = serializers.CharField(max_length = 10**7)
    background_img = serializers.CharField(max_length = 10**7)

class PredictSerializer(serializers.Serializer):
    predict = serializers.ImageField()