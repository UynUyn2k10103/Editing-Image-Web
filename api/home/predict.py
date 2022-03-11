import cv2
import numpy as np
import os
from model import models
import base64

from django.conf import settings


load_model = models.load_model()

MXL = 0

def _predict_path(path_img, path_mask):
    img_in = cv2.imread(path_img)
    IMG_SHAPE = img_in.shape

    mask_in = cv2.imread(path_mask)

    img = cv2.resize(img_in, (512, 512), cv2.INTER_LINEAR)
    mask = cv2.resize(mask_in, (512, 512), cv2.INTER_LINEAR)

    img_expand = img[np.newaxis, ...]

    img_pred = load_model.predict(img_expand).reshape(512, 512, 2)
    img_pred[img_pred <= 0.5] = 0
    img_pred[img_pred > 0.5] = 1

    img_pred_img = img_pred[:, :, 0]
    img_pred_img =  cv2.cvtColor(img_pred_img, cv2.COLOR_GRAY2BGR)
    img_pred_img = cv2.resize(img_pred_img, (IMG_SHAPE[1], IMG_SHAPE[0]), cv2.INTER_LINEAR)

    img_1 = np.multiply(img_pred_img, img_in)

    img_pred_mask = img_pred[:, :, 1]
    img_pred_mask = cv2.cvtColor(img_pred_mask, cv2.COLOR_GRAY2BGR)
    img_pred_mask = cv2.resize(img_pred_mask, (IMG_SHAPE[1], IMG_SHAPE[0]), cv2.INTER_LINEAR)

    mask_in = cv2.resize(mask_in, (IMG_SHAPE[1], IMG_SHAPE[0]), cv2.INTER_LINEAR)
    img_2 =np.multiply(img_pred_mask, mask_in) 

    img_pred = img_1 + img_2

    global MXL
    MXL = abs(MXL - 1)

    img_name_pred = 'predict_' + (path_img.split('\\')[-1]).split('.')[0] + str(MXL) + '.jpg'
    cv2.imwrite(os.path.join(settings.MEDIA_ROOT, img_name_pred), img_pred)
    return img_name_pred


def image_decode(base64_img,img_name):
    base64_img_bytes = base64_img.encode('utf-8')
    with open(os.path.join(settings.MEDIA_ROOT, img_name), 'wb') as file_to_save:
        decoded_image_data = base64.decodebytes(base64_img_bytes)
        file_to_save.write(decoded_image_data)
        return img_name

def image_encode(img_name):
    with open(os.path.join(settings.MEDIA_ROOT, img_name), 'rb') as binary_file:
        binary_file_data = binary_file.read()
        base64_encoded_data = base64.b64encode(binary_file_data)
        base64_message = base64_encoded_data.decode('utf-8')
        return base64_message