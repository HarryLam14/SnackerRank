# Generated by Django 3.2 on 2021-05-04 16:08

from django.db import migrations, models
import snacks.models


class Migration(migrations.Migration):

    dependencies = [
        ('snacks', '0005_auto_20210504_1509'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='review',
            options={'ordering': ('-pub_date',)},
        ),
        migrations.AddField(
            model_name='tag',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to=snacks.models.upload_to, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='snack',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to=snacks.models.upload_to, verbose_name='Image'),
        ),
    ]
