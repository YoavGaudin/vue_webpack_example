from django.shortcuts import render

# Create your views here.
# Main site view
from django.views.generic import View
from django.http import JsonResponse
from rest_framework.views import APIView


class MainSiteView(APIView):

    def get(self, request):
        message = 'Hello'
        if request.GET.get('goodbye'):
            message = 'Goodbye'
        res = JsonResponse({'app1': message})
        if 'HTTP_ORIGIN' in request.META:
            res['Access-Control-Allow-Origin'] = request.META['HTTP_ORIGIN']
        return res
