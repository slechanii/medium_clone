# Generated by Django 3.0.1 on 2019-12-20 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0003_auto_20191220_1600'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='article',
            name='date',
            field=models.DateField(auto_now=True),
        ),
    ]
