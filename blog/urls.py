from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="blog-home"),
    path('compsci/', views.computerScience, name="blog-compsci"),
    path('exercises/', views.classExercises, name="blog-exercises"),
    path('polsim/', views.policySimulation, name="blog-policysimulation")
]