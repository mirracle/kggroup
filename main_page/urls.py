from django.urls import path
from .views import MainPageView, ObjectDetail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', MainPageView.as_view(), name='home_page'),
    path('object/<int:pk>/', ObjectDetail.as_view(), name='object_detail'),
]

urlpatterns += static(settings.STATIC_URL,
                      document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
