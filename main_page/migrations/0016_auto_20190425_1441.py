# Generated by Django 2.2 on 2019-04-25 08:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0015_charity_charityarchive'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='kgobjects',
            options={'verbose_name': 'Объект', 'verbose_name_plural': 'Объекты'},
        ),
        migrations.RemoveField(
            model_name='kgobjects',
            name='frame',
        ),
        migrations.CreateModel(
            name='ObjectFrame',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frame', models.CharField(blank=True, max_length=400, null=True, verbose_name='Ссылка на фрейм')),
                ('kg_object', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='object_frame', to='main_page.KgObjects', verbose_name='Объект')),
            ],
            options={
                'verbose_name': 'Фрейм',
                'verbose_name_plural': 'Фреймы',
            },
        ),
    ]