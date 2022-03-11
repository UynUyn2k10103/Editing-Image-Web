import requests

# file_dict ={}
# with open("C:/Users/hp/Downloads/download.jpg", "rb") as origin:
#     file_dict["img"] = origin
#     with open("C:/Users/hp/Downloads/download(1).jpg", "rb") as background:
#         file_dict["background_img"]= background
#         response = requests.post("http://127.0.0.1:8000/api/upload/", files=file_dict)
#         print(response.text)

# https://stackoverflow.com/questions/22567306/how-to-upload-file-with-python-requests
# https://stackoverflow.com/questions/30229231/python-save-image-from-url


pic_url = 'http://127.0.0.1:8000/api/image_predict'
with open('pic1.jpg', 'wb') as handle:
    response = requests.get(pic_url, stream=True)
    if not response.ok:
        print(response)
    else:
        for block in response.iter_content(1024):
            if not block:
                break
            handle.write(block)