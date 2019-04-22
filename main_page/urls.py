from django.urls import path
from .views import MainPageView, ObjectDetail, NewsDetail, NewsList, NewsArchiveView, CharityDetail, CharityList, \
    CharityArchiveView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', MainPageView.as_view(), name='home_page'),
    path('object/<int:pk>/', ObjectDetail.as_view(), name='object_detail'),
    path('news/<int:pk>/', NewsDetail.as_view(), name='news_detail'),
    path('news/', NewsList.as_view(), name='news_list'),
    path('news/archive/<int:pk>/', NewsArchiveView.as_view(), name='news_archive'),
    path('charity/<int:pk>/', CharityDetail.as_view(), name='charity_detail'),
    path('charity/', CharityList.as_view(), name='charity_list'),
    path('charity/archive/<int:pk>/', CharityArchiveView.as_view(), name='charity_archive')
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
