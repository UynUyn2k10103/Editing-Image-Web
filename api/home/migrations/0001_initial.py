# Generated by Django 3.2.8 on 2021-10-16 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImageFolder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='')),
                ('background_img', models.ImageField(upload_to='')),
                ('img_pred', models.ImageField(upload_to='')),
            ],
        ),
    ]