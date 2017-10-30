from django.conf.urls import url, include
from .import views


app_name = 'main'

urlpatterns = [

    url(r'^$', views.display, name='display'),
    url(r'^start/$', views.start, name='start'),
    url(r'^main/(?P<variable>[0-9]+)/(?P<house>[0-9]+)/$', views.main, name='main'),
    url(r'^(?P<variable>[0-9]+)/detail/$', views.detail, name='detail'),
    url(r'^(?P<variable>[0-9]+)/leaderboard/$', views.leaderboard, name='leaderboard'),
    url(r'^(?P<variable>[0-9]+)/answer/$', views.answer, name='answer'),

]