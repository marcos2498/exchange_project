from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('api/add_commodity/', views.add_commodity, name='add_commodity'),
    path('api/get_list/', views.get_list, name='get_list'),
    path('api/remove_commodity/', views.remove_commodity, name='remove_commodity'),
    path('api/search_commodity/', views.search_commodity, name='search_commodity')
]
