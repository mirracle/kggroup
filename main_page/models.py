from django.db import models


class MainContacts(models.Model):
    number = models.CharField(max_length=30, verbose_name='Номер телефона')
    main = models.BooleanField(default=False, verbose_name='Главный номер')

    class Meta:
        verbose_name = 'Контакты на главной странице'
        verbose_name_plural = 'Контакты на главной странице'

    def __str__(self):
        return self.number


class MainImageTitle(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название')

    class Meta:
        verbose_name = 'Название изображения в шапке'
        verbose_name_plural = 'Названия изображений в шапке'

    def __str__(self):
        return self.title


class MainImage(models.Model):
    image = models.ImageField(upload_to='main_image', verbose_name='Изображение')

    class Meta:
        verbose_name = 'Изображение в шапке'
        verbose_name_plural = 'Изображения в шапке'

    def __str__(self):
        return 'Фото'
