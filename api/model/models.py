from keras.models import model_from_json
from django.conf import settings
import os

def load_model():
    json_file = open( os.path.join(os.path.join(settings.BASE_DIR, 'model'), "model.json"), 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    load_model = model_from_json(loaded_model_json)

    load_model.load_weights( os.path.join(os.path.join(settings.BASE_DIR, 'model'), 'model.h5'))
    return load_model
    # print("loaded model from disk")