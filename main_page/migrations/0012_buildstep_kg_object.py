# Generated by Django 2.2 on 2019-04-17 08:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0011_auto_20190417_1356'),
    ]

    operations = [
        migrations.AddField(
            model_name='buildstep',
            name='kg_object',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='steps', to='main_page.KgObjects', verbose_name='Объект'),
        ),
    ]
