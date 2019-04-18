from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView, DeleteView
from .models import MainContacts, MainImageTitle, MainImage, KgObjects, MainVideo, News, ObjectTags, ObjectGallery, \
    BuildStep


class MainPageView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['phones'] = MainContacts.objects.all().exclude(main=True)
        context['main_phone'] = get_object_or_404(MainContacts, main=True)
        context['image_title'] = MainImageTitle.objects.all().last()
        context['banner'] = MainImage.objects.all().last()
        context['ready_objects'] = KgObjects.objects.filter(status='ready')
        context['progress_objects'] = KgObjects.objects.filter(status='progress')
        context['videos'] = MainVideo.objects.all()
        context['news'] = News.objects.all()
        context['all_objects'] = KgObjects.objects.all()
        return context


class ObjectDetail(DeleteView):
    template_name = 'object_detail.html'
    model = KgObjects

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['phones'] = MainContacts.objects.all().exclude(main=True)
        context['main_phone'] = get_object_or_404(MainContacts, main=True)
        context['tags'] = ObjectTags.objects.filter(kg_object=self.object)
        context['gallery'] = ObjectGallery.objects.filter(kg_object=self.object)
        context['step'] = BuildStep.objects.filter(kg_object=self.object)
        return context
