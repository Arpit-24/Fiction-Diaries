from django.db import models

# Create your models here.
#from allauth.socialaccount.models import SocialAccount
from django.contrib.auth.models import User


class GOT_Player(models.Model):
    house_CHOICES = (
        (0,'house_arryen'),
        (1,'house_baratheon') ,
        (2,'house_greyjoy '),
        (3,'house_lanister'),
        (4,'house_mormont'),
        (5,' house_stark'),
        (6,'house_targaryen '),
        (7,'house_tyrell'),
    )
    user = models.OneToOneField(User, null=True)
    player_score = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    house = models.IntegerField(choices = house_CHOICES)
    status = models.IntegerField(default=0)
    question_no = models.IntegerField(default=1, blank=True)
    answers_given = models.CharField(max_length=100, default="00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
    qdone = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user)

class DC_Player(models.Model):
    house_CHOICES = (
        (0,'superman'),
        (1,'wonder_women'),
        (2,'batman'),
        (3,'green_lantern'),
        (4,'flash'),
        (5,'aquaman')
    )
    user = models.OneToOneField(User, null=True)
    house = models.IntegerField(choices=house_CHOICES)#0-5
    player_score = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    status = models.IntegerField(default=0)
    question_no = models.IntegerField(default=1, blank=True)
    answers_given = models.CharField(max_length=100, default="00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
    qdone = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user)


class MARVEL_Player(models.Model):
    house_CHOICES =(
        (0,'magneto'),
        (1,'doom'),
        (2,'kingpin'),
        (3,'thanos'),
        (4,'red_skull'),
        (5,'venom')
    )
    user = models.OneToOneField(User, null=True)
    player_score = models.IntegerField(default=0)
    house = models.IntegerField(choices=house_CHOICES)#0-5
    status = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    question_no = models.IntegerField(default=1, blank=True)
    answers_given = models.CharField(max_length=100, default="00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
    qdone = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user)

class HP_Player(models.Model):
    house_CHOICES = (
        (0,'griffinder'),
        (1,'hufflepuff'),
        (2,'ravenclaw'),
        (3,'slytherin')
    )
    user = models.OneToOneField(User, null=True)
    player_score = models.IntegerField(default=0)
    house = models.IntegerField(choices=house_CHOICES)#0-3
    status = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    question_no = models.IntegerField(default=1, blank=True)
    answers_given = models.CharField(max_length=100, default="00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
    qdone = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user)


class Question(models.Model):
    quiz_type = models.IntegerField()
    question_no = models.IntegerField()
    question = models.CharField(max_length=10000)
    solution = models.IntegerField()
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=1000)
    option4 = models.CharField(max_length=1000)


    def __str__(self):
        return str(self.quiz_type) + " - " + str(self.question_no)





