from django.contrib import admin
from django.urls import path
from Mysite.views import hello_world

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', hello_world),
]
