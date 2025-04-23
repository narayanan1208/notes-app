from django.contrib import admin
from .models import Note


class NoteAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "created", "updated"]


# Register your models here.
admin.site.register(Note)
