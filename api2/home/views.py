from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import ImageFolder, ImagePredict
from .serializers import PredictSerializer, ImageSerializer
from .predict import _predict_path, removeImage
from rest_framework.parsers import MultiPartParser, FormParser

def listPath():
    item = ImageFolder.objects.last()
    image_path = [item.img0.path,item.img1.path, item.img2.path, 
                    item.img3.path, item.img4.path, item.img5.path, 
                    item.img6.path, item.img7.path, item.img8.path]
    return image_path

class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        object_list = ImageFolder.objects.all()
        object_list.delete()
        file_serializer = ImageSerializer(data = request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            image_path = listPath()
            img_pred = _predict_path(image_path = image_path)
            data = ImagePredict(img_pred = img_pred)
            removeImage()
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