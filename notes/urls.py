from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("saved-ideas/", views.saved_ideas, name="saved_ideas"),
    path("future-ideas/", views.future_ideas, name="future_ideas"),
    path("saved-contacts/", views.saved_contacts, name="saved_contacts"),
    path("help/", views.help_page, name="help"),
    path("forum/", views.forum, name="forum"),
]

