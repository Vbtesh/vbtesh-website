from django.shortcuts import render
from .models import CsPost

# Content
posts = [
    {
        'author': 'VBtesh',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'October 10, 2019'
    },
    {
        'author': 'JaniceJ',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'October 11, 2019'
    }
]

scripts = {
        "exercise5": "exercice5.js"
    }


def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)


def computerScience(request):
    context = {
        'csPosts': CsPost.objects.all()
    }
    return render(request, 'blog/computerScience.html', context)

def classExercises(request):
    context = {
        "scripts": scripts
    }
    return render(request, 'blog/classExercises.html', context)


def policySimulation(request):
    context = {
        
    }
    return render(request, 'blog/policySimulation.html', context)