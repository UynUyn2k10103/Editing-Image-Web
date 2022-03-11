import os
import cv2
import numpy as np
from django.conf import settings

def removeImage():
    for filename in os.listdir(settings.MEDIA_ROOT):
        if filename == 'predict_img1.jpg' or filename == 'predict_img0.jpg':
            continue
        os.remove(os.path.join(settings.MEDIA_ROOT, filename))

def a_row(new_list):
    image = np.ones((229, 17, 3), dtype=int)*200
    result = image
    for i in range(0, 3):
        img = new_list[i]
        result = np.concatenate((result, img), axis = 1)
        result = np.concatenate((result, image), axis = 1)
    return result

def resize_img(path, input_shape = (512, 512)):
    img = cv2.imread(path)
    img = cv2.resize(img, input_shape, cv2.INTER_LINEAR)
    return np.array(img)

MXL = 0

def _predict_path(image_path):
    new_list = []
    for path_img in image_path:
        new_list.append(resize_img(path_img, (229, 229)))

    new_list = np.array(new_list)

    rowImg = a_row(new_list[:3,:,:])
    image = np.ones((17, rowImg.shape[1], 3), dtype=int)*200
    result = image
    for i in range(0, 9, 3):
        rowImg = a_row(new_list[i:(i + 3), :, :])
        result = np.concatenate((result, rowImg), axis = 0)
        result = np.concatenate((result, image), axis = 0)
    
    global MXL
    MXL = abs(1 - MXL)
    img_name_pred = 'predict_img' + str(MXL) + '.jpg'
    print(img_name_pred)
    # img_name_pred = 'predict_img.jpg'

    cv2.imwrite(os.path.join(settings.MEDIA_ROOT, img_name_pred), result)
    return img_name_pred