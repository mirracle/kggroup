# Generated by Django 2.2 on 2019-04-17 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0010_auto_20190417_1354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kgobjects',
            name='map',
            field=models.CharField(blank=True, max_length=400, null=True, verbose_name='Ссылка на карту'),
        ),
    ]
