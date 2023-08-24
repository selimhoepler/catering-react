from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from menu import views

router = routers.DefaultRouter()
router.register(r'menus', views.menuView, 'menu')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('menu.urls')),
    path('api/', include(router.urls)),
]
