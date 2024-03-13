from django.shortcuts import render


def pricing(request):
    return render(request, "plan/pricing.html")


def index(request):
    return render(request, "plan/index.html")