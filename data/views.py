from django.shortcuts import render   # will allow me to render a template file
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Commodity
import json


def index(request):

    return render(request, 'index.html')

@csrf_exempt
def add_commodity(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        description = data.get('description')
        price = data.get('price')
        unit = data.get('unit')
        
        if name and description and price and unit:
            # Save the commodity to the database
            commodity = Commodity(name=name, description=description, price=price, unit=unit)
            commodity.save()
            return JsonResponse({'status': 'success', 'message': 'Commodity added'})
        else:
            return JsonResponse({'status': 'error', 'message': 'All fields are required'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})