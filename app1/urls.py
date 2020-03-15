from django.urls import path
from app1.views import *

urlpatterns = [
    path('',index,name='index'),
    path('register/',Register.as_view(),name="register"),
    path('login/',Login.as_view(),name='login'),
    path('cart/',cart,name='cart'),
    path('userinfo/',Info.as_view(),name='userinfo'),
    # path('logout/',logout,name='logout'),
]

handler404 = page_not_found
handler500 = page_error