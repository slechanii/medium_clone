from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets
from .serializers import ArticleSerializer, CommentSerializer
from .models import Article, Comment


class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()



# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))
