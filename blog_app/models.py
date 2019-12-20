from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=30)
    category = models.CharField(max_length=30, default="")
    date = models.DateField(auto_now=True) 
    description = models.TextField()
    body = models.TextField()

    def _str_(self):
            return self.title
