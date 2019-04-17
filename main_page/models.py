from django.db import models
from .choices import STATUS_CHOICES
from django.urls import reverse


class MainVideo(models.Model):
    video = models.FileField(upload_to='main_video', verbose_name='Видео')
    title = models.CharField(max_length=100, verbose_name='Название видео')
    image = models.ImageField(upload_to='video_image', verbose_name=' Изображение к видео')

    class Meta:
        verbose_name = 'Видео на главной'
        verbose_name_plural = 'Видео на главной'

    def __str__(self):
        return self.title


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
        return 'Фото на главной странице'


class KgObjects(models.Model):
    object_name = models.CharField(max_length=200, verbose_name='Название')
    mini_image = models.ImageField(upload_to='mini_image', verbose_name='Мини Аватарка')
    big_image = models.ImageField(upload_to='big_image', verbose_name='Фото для шапки', blank=True, null=True)
    title = models.CharField(max_length=400, verbose_name='Краткое описание')
    info = models.TextField(verbose_name='Полное описание')
    status = models.CharField(choices=STATUS_CHOICES, max_length=40, verbose_name='Статус', default='planed')
    map = models.CharField(max_length=400, verbose_name='Ссылка на карту', blank=True, null=True)

    def __str__(self):
        return self.object_name

    def get_absolute_url(self):
        return reverse('object_detail', kwargs={'pk': self.id})


class ObjectTags(models.Model):
    kg_object = models.ForeignKey(KgObjects, related_name='object_tag', verbose_name='Объект',
                                  on_delete=models.DO_NOTHING)
    tag_name = models.CharField(max_length=500, verbose_name='Название Тега')

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'

    def __str__(self):
        return self.tag_name


class ObjectGallery(models.Model):
    media = models.FileField(upload_to='object_gallery', verbose_name='Медиа файл')
    kg_object = models.ForeignKey(KgObjects, related_name='gallery_object', verbose_name='Объект',
                                  on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = 'Галерея'
        verbose_name_plural = 'Галерея'

    def __str__(self):
        return self.kg_object.object_name


class BuildStep(models.Model):
    step_name = models.CharField(max_length=400, verbose_name='Номер или название этапа')
    media = models.FileField(upload_to='build_step', verbose_name='Медиа')
    title = models.TextField(verbose_name='Описание')
    kg_object = models.ForeignKey(KgObjects, related_name='steps', verbose_name='Объект',
                                  on_delete=models.DO_NOTHING, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Номер или название этапа'
        verbose_name = 'Номер или название этапа'

    def __str__(self):
        return self.step_name


class News(models.Model):
    title = models.CharField(max_length=500, verbose_name='Заголовок')
    logo = models.ImageField(upload_to='news_logo', verbose_name='Изображение')
    text = models.TextField(verbose_name='Текст новости')
    created_date = models.DateField(auto_now=True, verbose_name='Дата')

    class Meta:
        verbose_name = 'Новости и акции'
        verbose_name_plural = 'Новости и акции'

    def __str__(self):
        return self.title

