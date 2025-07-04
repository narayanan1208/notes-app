from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.notes, name="notes"),
    path("notes/<slug:slug>/", views.note_detail, name="note-detail"),
    path("notes-search/", views.search_notes, name="notes-search"),
]
