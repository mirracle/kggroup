from django.contrib import admin
from .models import MainContacts, MainImageTitle, MainImage, KgObjects, MainVideo, News, ObjectTags, ObjectGallery, \
    BuildStep


class ObjectTagsInline(admin.TabularInline):
    model = ObjectTags
    fields = ['tag_name']
    extra = 1


class ObjectGalleryInline(admin.TabularInline):
    model = ObjectGallery
    extra = 1
    fields = ['media']


class BuildStepInline(admin.TabularInline):
    model = BuildStep
    extra = 1
    fields = ['step_name', 'media', 'title']


class ObjectAdmin(admin.ModelAdmin):
    list_per_page = 50
    inlines = [ObjectTagsInline, ObjectGalleryInline, BuildStepInline]


admin.site.register(MainContacts)
admin.site.register(MainImageTitle)
admin.site.register(MainImage)
admin.site.register(KgObjects, ObjectAdmin)
admin.site.register(MainVideo)
admin.site.register(News)
