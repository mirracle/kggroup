from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from .models import MainContacts, MainImageTitle, MainImage


class MainPageView(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['phones'] = MainContacts.objects.all().exclude(main=True)
        context['main_phone'] = get_object_or_404(MainContacts, main=True)
        context['image_title'] = MainImageTitle.objects.all().last()
        context['banner'] = MainImage.objects.all().last()
        return context
