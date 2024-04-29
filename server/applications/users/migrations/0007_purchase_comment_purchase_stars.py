# Generated by Django 4.2.9 on 2024-01-24 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_purchase_date_purchased'),
    ]

    operations = [
        migrations.AddField(
            model_name='purchase',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='purchase',
            name='stars',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
