from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from core.views import GeralViewSet
router = routers.DefaultRouter()
router.register(r'gerals', GeralViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]
