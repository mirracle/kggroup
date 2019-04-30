from django.contrib import admin
from .models import MainContacts, MainImageTitle, MainImage, KgObjects, MainVideo, News, ObjectTags, ObjectGallery, \
    BuildStep, NewsArchive, Charity, CharityArchive, ObjectFrame, NewsContent


class ObjectTagsInline(admin.TabularInline):
    model = ObjectTags
    fields = ['tag_name', 'tag_name_kg']
    extra = 1


class ObjectFrameInline(admin.TabularInline):
    model = ObjectFrame
    fields = ['frame']
    extra = 1


class ObjectGalleryInline(admin.TabularInline):
    model = ObjectGallery
    extra = 1
    fields = ['media']


class BuildStepInline(admin.TabularInline):
    model = BuildStep
    extra = 1
    fields = ['step_name', 'media', 'title']


class NewsContentInline(admin.TabularInline):
    model = NewsContent
    extra = 1
    fields = ['image', 'text', 'text_kg']


class ObjectNews(admin.ModelAdmin):
    list_per_page = 50
    inlines = [NewsContentInline]


class ObjectAdmin(admin.ModelAdmin):
    list_per_page = 50
    inlines = [ObjectTagsInline, ObjectGalleryInline, BuildStepInline, ObjectFrameInline]


admin.site.register(MainContacts)
admin.site.register(MainImageTitle)
admin.site.register(MainImage)
admin.site.register(KgObjects, ObjectAdmin)
admin.site.register(MainVideo)
admin.site.register(News, ObjectNews)
admin.site.register(NewsArchive)
admin.site.register(Charity)
admin.site.register(CharityArchive)
