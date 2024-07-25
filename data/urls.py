from django.urls import path
from . import views,

urlpatterns = [
    path('', views.index, name='index'), 
    path('api/add_commodity/', views.add_commodity, name='add_commodity'),
]
