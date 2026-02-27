from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    return render(request, "home.html")


def saved_ideas(request: HttpRequest) -> HttpResponse:
    return render(request, "saved_ideas.html")


def future_ideas(request: HttpRequest) -> HttpResponse:
    return render(request, "future_ideas.html")


def saved_contacts(request: HttpRequest) -> HttpResponse:
    return render(request, "saved_contacts.html")


def help_page(request: HttpRequest) -> HttpResponse:
    return render(request, "help.html")


def forum(request: HttpRequest) -> HttpResponse:
    return render(request, "forum.html")

