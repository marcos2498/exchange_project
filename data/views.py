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

        # Check if all fields are present
        if not all([name, description, price, unit]):
            return JsonResponse({'status': 'error', 'message': 'All fields are required'})

        # Check if a commodity with the same name already exists
        if Commodity.objects.filter(name=name).exists():
            return JsonResponse({'status': 'error', 'message': 'Commodity with this name already exists'})
        
        # Save the commodity to the database if it does not exist
        commodity = Commodity(name=name, description=description, price=price, unit=unit)
        commodity.save()
        
        return JsonResponse({'status': 'success', 'message': 'Commodity added'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


@csrf_exempt
def get_list(request):
    filter_type = request.GET.get('type', None)

    if filter_type == 'commodity':
        securities = Commodity.objects.filter(description='commodity')[:20]
    elif filter_type == 'fx':
        securities = Commodity.objects.filter(description='fx')[:20]
    else:
        securities = Commodity.objects.all()[:20]

    data = list(securities.values('name', 'description', 'price', 'unit'))
    return JsonResponse(data, safe=False)


@csrf_exempt
def remove_commodity(request):
    if request.method == 'POST':
        try:
            # Load JSON data from the request body
            data = json.loads(request.body)
            name = data.get('name')
            
            if not name:
                return JsonResponse({'error': 'Name is required'}, status=400)

            # Find the commodity by name
            commodity = Commodity.objects.filter(name__icontains=name).first()

            if not commodity:
                return JsonResponse({'error': 'Commodity not found'}, status=404)

            # Delete the commodity
            commodity.delete()

            return JsonResponse({'success': 'Commodity removed successfully'}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    
@csrf_exempt
def search_commodity(request):
    if request.method == 'POST':
        try:
            # Load JSON data from the request body
            data = json.loads(request.body)
            name = data.get('name')
            
            if not name:
                return JsonResponse({'error': 'Name is required'}, status=400)

            # Find the commodity by name
            commodity = Commodity.objects.filter(name=name).first()

            if not commodity:
                return JsonResponse({'error': 'Commodity not found'}, status=404)

            commodity_data = {
                'name': commodity.name,
                'description': commodity.description,
                'price': commodity.price,
                'unit': commodity.unit,
            }

            return JsonResponse({'commodity': commodity_data}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)