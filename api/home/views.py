from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import ImagePredict
from .serializers import ImageSerializer, PredictSerializer
from .predict import _predict_path, image_decode, image_encode
from django.conf import settings

import os

class FileView(APIView):
  def post(self, request, *args, **kwargs):
    file_serializer = ImageSerializer(data=request.data)
    if file_serializer.is_valid():
      img = image_decode(file_serializer.validated_data['img'], 'img.png')
      background_img = image_decode(file_serializer.validated_data['background_img'], 'background.png')
      img_pred = _predict_path(os.path.join(settings.MEDIA_ROOT, img), os.path.join(settings.MEDIA_ROOT, background_img))

      data = ImagePredict(img_pred = img_pred)
      object_list = ImagePredict.objects.all()

      object_list.delete()
      if data is not None:
        data.save()
        data = {"predict" : data.img_pred}
        serializers = PredictSerializer(data = data)
        if serializers.is_valid():
          return Response(serializers.data, status= status.HTTP_200_OK)
        else:
          return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)
      else:
        return Response(status = status.HTTP_400_BAD_REQUEST)

