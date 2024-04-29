# Generated by Django 4.2.9 on 2024-01-23 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_purchase_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='status',
            field=models.CharField(choices=[('Pendiente', 'Pendiente'), ('Procesando', 'Procesando'), ('Enviado', 'Enviado')], default='Pendiente', max_length=20),
        ),
    ]