# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import*

admin.site.register(GOT_Player)
admin.site.register(HP_Player)
admin.site.register(MARVEL_Player)
admin.site.register(DC_Player)
admin.site.register(Question)