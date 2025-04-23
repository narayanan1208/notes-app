from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notefields = ["id", "title", "slug", "category", "created", "updated"]
