import os
import django
import json

# Configurar el entorno de Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "leaf_way_backend.settings")
django.setup()

from applications.products.models import GemAndPlants  # noqa


def import_data_from_json():
    with open("GemsAndPlants.json", "r", encoding="utf-8") as file:
        data = json.load(file)
        for item in data:
            GemAndPlants.objects.create(
                title=item["title"],
                description=item["description"],
                image=item["image"],
                type=item["type"],
            )


if __name__ == "__main__":
    import_data_from_json()
