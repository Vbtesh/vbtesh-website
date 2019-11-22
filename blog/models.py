from django.db import models
from django_mysql.models import ListTextField
from django.utils import timezone
from django.contrib.auth.models import User

class CsPost(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=timezone.now)
    language = models.CharField(max_length=100)
    description = models.TextField()
    features = ListTextField(base_field=models.CharField(max_length=300))

    def __str__(self):
        return self.title