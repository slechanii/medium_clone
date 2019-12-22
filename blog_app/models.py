from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=30)
    category = models.CharField(max_length=30, default="")
    date = models.DateField(auto_now=True)
    description = models.TextField()
    body = models.TextField()
    likes = models.IntegerField(default=0)

    def _str_(self):
        return self.title


class Comment(models.Model):
    username = models.CharField(max_length=30)
    comment = models.TextField()
    date = models.DateField(auto_now=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
