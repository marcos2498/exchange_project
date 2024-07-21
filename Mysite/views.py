from django.shortcuts import render   # will allow me to render a template file


def index(request):

    return render(request, 'index.html')
