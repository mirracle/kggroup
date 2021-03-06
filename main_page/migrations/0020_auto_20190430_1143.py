# Generated by Django 2.2 on 2019-04-30 05:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0019_auto_20190429_2115'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newscontent',
            name='news',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='content', to='main_page.News', verbose_name='Контент'),
        ),
        migrations.AlterField(
            model_name='newscontent',
            name='text',
            field=models.TextField(blank=True, null=True, verbose_name='Текст параграфа'),
        ),
        migrations.AlterField(
            model_name='newscontent',
            name='text_kg',
            field=models.TextField(blank=True, null=True, verbose_name='Текст параграфа KG'),
        ),
        migrations.CreateModel(
            name='CharityContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='charity_image', verbose_name='Изображение')),
                ('text', models.TextField(blank=True, null=True, verbose_name='Текст параграфа')),
                ('text_kg', models.TextField(blank=True, null=True, verbose_name='Текст параграфа KG')),
                ('charity', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='content', to='main_page.Charity', verbose_name='Контент')),
            ],
            options={
                'verbose_name': 'Контент Благотворительности',
                'verbose_name_plural': 'Контенты Благотворительности',
            },
        ),
    ]
