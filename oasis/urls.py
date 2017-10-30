from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from main import views
from .import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^', include('main.urls') ),
    url(r'^logout/$', views.logout_view, name='logout'),

]


if settings.DEBUG:
 urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
 urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)