from django.urls import path
from django.conf.urls import url

from .views import FileView

urlpatterns = [
    url(r'^predict/$', FileView.as_view()),
]