from rest_framework import serializers
from .models import Article, Comment



class CommentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Comment
            fields = ('__all__')    

class ArticleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            # comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
            comments = CommentSerializer(many=True, source='article_set', read_only=True)
            fields = ('id', 'title', 'description', 'body', 'date', 'category', 'likes', 'comments')
