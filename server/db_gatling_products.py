import os
import django
import json

# Configurar el entorno de Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "leaf_way_backend.settings")
django.setup()

from applications.products.models import Product  # noqa


def import_data_from_json():
    with open("products.json", "r", encoding="utf-8") as file:
        data = json.load(file)
        for item in data:
            Product.objects.create(
                name=item["name"],
                description=item["description"],
                type=item["type"],
                image=item["image"],
                price=item["price"],
                stars=item["stars"],
                stock=item["stock"],
                offer=item["offer"],
                date_added=item["date_added"],
                date_updated=item["date_updated"],
            )


if __name__ == "__main__":
    import_data_from_json()
