# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Question,HP_Player,DC_Player,MARVEL_Player,GOT_Player
from django.contrib.auth import logout
from django.contrib.auth.models import User
import json
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
import random

def display(request):
	if (request.user.is_authenticated()):
		return render(request,'index.html')
	else:
		return render(request,'front.html')


def start(request):
	user = request.user
	state = list()
	house = list()
	
	p = GOT_Player.objects.filter(user = request.user)
	if len(p):
		state.append(p[0].status)
		house.append(p[0].house)	
	else:
		state.append(0)
		house.append(-1)

	p = HP_Player.objects.filter(user = request.user)
	if len(p):
		state.append(p[0].status)
		house.append(p[0].house)	
	else:
		state.append(0)
		house.append(-1)

	p = MARVEL_Player.objects.filter(user = request.user)
	if len(p):
		state.append(p[0].status)
		house.append(p[0].house)	
	else:
		state.append(0)
		house.append(-1)

	p = DC_Player.objects.filter(user = request.user)
	if len(p):
		state.append(p[0].status)
		house.append(p[0].house)	
	else:
		state.append(0)	
		house.append(-1)
	resp = {'house':house, 'state':state, 'user':user.username}
	return HttpResponse(json.dumps(resp), content_type='application/json')


def main(request,variable,house):
	user = request.user
	if variable == '0':
		up = GOT_Player()
		up.user = request.user
		up.house = house
		up.status = 1
		up.question_no = 1
		up.save()

	if variable == '1':
		up = HP_Player()
		up.user = user
		up.house = house
		up.status = 1
		up.question_no = 2
		up.save()

	if variable == '2':
		up = MARVEL_Player()
		up.user = user
		up.house = house
		up.status = 1
		up.question = 3
		up.save()

	if variable == '3':
		up = DC_Player()
		up.user = user
		up.house = house
		up.status = 1
		up.question_no = 4
		up.save()
	resp = {'vgv':4567,'house':house,'variable':variable}
	return JsonResponse(resp)

def detail(request, variable):
    if request.user.is_authenticated():
        error = False

        if variable == '0':
            u=GOT_Player.objects.get(user=request.user)
           
        elif variable == '1':
            u=HP_Player.objects.get(user=request.user)
            
        elif variable == '2':
            u=MARVEL_Player.objects.get(user=request.user)
            
        elif variable == '3':
            u=DC_Player.objects.get(user=request.user)
            
        u.qdone += 1
        product = Question.objects.get(pk=u.question_no)
        qsleft = 30 - u.qdone
        u.save()
        
        resp = {'score': u.player_score,'NoQuesLeft': qsleft,
                'qsno': u.qdone,'question_text': product.question,'option_1':product.option1,'option_2':product.option2,'option_3':product.option3,'option_4':product.option4}

        return JsonResponse(resp)
    else:
        return HttpResponseRedirect('/')

def answer(request, variable):
	if request.user.is_authenticated():
		user = request.user
		answerof = request.GET.get('answerof')
		if variable == '0':
			u=GOT_Player.objects.get(user=request.user)
                     			
		elif variable == '1':
			u=HP_Player.objects.get(user=request.user)
            
		elif variable == '2':
			u=Marvel_Player.objects.get(user=request.user)
            
		elif variable == '3':
			u=DC_Player.objects.get(user=request.user)
                    
		product = Question.objects.get(pk=u.question_no)
		option = [product.option1,product.option2,product.option3,product.option4]
            
		if answerof == option[product.solution]:
			list1 = list(u.answers_given)
			list1[u.question_no] = '1'
			u.answers_given = ''.join(list1)
			u.score += 100
			u.save()
			error = False
		else:
			list1 = list(u.answers_given)
			list1[u.question_no] = '2'
			u.answers_given = ''.join(list1)
			u.save()
        
		position = random.randint(0,200)
		lists = list(u.answers_given)
		while lists[position] == 1 or lists[position] == 2:
			position  =  random.randint(0,200)

		pr = Question.objects.get(quiz_type = 1, question_no=1)
		u.question_no = pr.pk
		u.save()
		qsleft = 30 - u.qdone
		resp = {'score': u.player_score,'NoQuesLeft': qsleft,
		        'qsno': u.qdone,'correctanswer':product.solution,'question_text': pr.question,'option_1':pr.option1,'option_2':pr.option2,'option_3':pr.option3,'option_4':pr.option4}
		return JsonResponse(resp)
	else:
		return HttpResponseRedirect('/')

def leaderboard(request, variable):
    if variable == '0':
        w, h = 8, 2
        arr = [[0 for x in range(h)] for y in range(w)]
        GOT_player_leaderboard = GOT_Player.objects.order_by('player_score').reverse()
        username = [" " for i in range(10)]
        indivisual_score = [0 for i in range(10)]
        houses = [" " for i in range(10)]
        i=0
        for player in GOT_player_leaderboard:
            if i==10:
                break
            indivisual_score[i] = (GOT_player_leaderboard[i].player_score)
            username[i] = (GOT_player_leaderboard[i].user.username)
            houses[i] = (GOT_player_leaderboard[i].house)
            i+=1

        for i, k in GOT_Player.house_CHOICES:
            arr[i][0] = i
            q = GOT_Player.objects.filter(house=i)
            score=0
            for t in q:
                score += t.player_score
            arr[i][1] = score

        for j in range(7):
            if arr[j][1] > arr[j + 1][1]:
                temp1 = arr[j][1]
                arr[j][1] = arr[j + 1][1]
                arr[j + 1][1] = temp1
                temp2 = arr[j][0]
                arr[j][0] = arr[j + 1][0]
                arr[j + 1][0] = temp2

        p = GOT_Player.objects.get(user=request.user)
        current_user = list()
        current_user.append(request.user.username)
        current_user.append(p.rank)
        current_user.append(p.house)
        current_user.append(p.player_score)

        resp = {'username': username, 'score': indivisual_score, 'house': houses, 'house_leaderboard': arr,
                'current_user': current_user}
        return JsonResponse(resp)

    if variable == '1':
        w, h = 4,2
        arr = [[0 for x in range(h)] for y in range(w)]
        HP_player_leaderboard = HP_Player.objects.order_by('player_score').reverse()
        username = ["" for x in range(10)]
        indivisual_score = [0 for i in range(10)]
        houses = ["" for x in range(10)]
        i=0
        for player in HP_player_leaderboard:
            if i==10:
                break
            indivisual_score[i] = (HP_player_leaderboard[i].player_score)
            username[i] = (HP_player_leaderboard[i].user.username)
            houses[i] = (HP_player_leaderboard[i].house)
            i+=1
        for i, k in HP_Player.house_CHOICES:
            arr[i][0] = i
            q = HP_Player.objects.filter(house=i)
            for t in q:
                indivisual_score += t.player_score
                arr[i][1] = indivisual_score

        for j in range(3):
            if arr[j][1] > arr[j + 1][1]:
                temp1 = arr[j][1]
                arr[j][1] = arr[j + 1][1]
                arr[j + 1][1] = temp1
                temp2 = arr[j][0]
                arr[j][0] = arr[j + 1][0]
                arr[j + 1][0] = temp2

        p = HP_Player.objects.get(user=request.user)
        current_user = list()
        current_user.append(p.user.username)
        current_user.append(p.rank)
        current_user.append(p.house)
        current_user.append(p.player_score)

        resp = {'username': username, 'score': indivisual_score, 'house': houses, 'house_leaderboard': arr,
                'current_user': current_user}
        return JsonResponse(resp)

    if variable == '2':
        w, h = 6, 2
        arr = [[0 for x in range(h)] for y in range(w)]
        MARVEL_player_leaderboard = MARVEL_Player.objects.order_by('player_score').reverse()
        username = ["" for x in range(10)]
        indivisual_score = [0 for i in range(10)]
        houses = ["" for x in range(10)]
        i=0
        for player in MARVEL_player_leaderboard:
            if i==10:
                break
            username[i] = MARVEL_player_leaderboard[i].user.username
            indivisual_score[i] = MARVEL_player_leaderboard[i].player_score
            houses[i] = MARVEL_player_leaderboard[i].house
            i+=1

        for i, k in MARVEL_Player.house_CHOICES:
            arr[i][0] = i
            q = MARVEL_Player.objects.filter(house=i)
            for t in q:
                indivisual_score += t.player_score
                arr[i][1] = indivisual_score

        for j in range(5):
            if arr[j][1] > arr[j + 1][1]:
                temp1 = arr[j][1]
                arr[j][1] = arr[j + 1][1]
                arr[j + 1][1] = temp1
                temp2 = arr[j][0]
                arr[j][0] = arr[j + 1][0]
                arr[j + 1][0] = temp2

        p = MARVEL_Player.objects.get(user=request.user)
        current_user = list()
        current_user.append(p.user.username)
        current_user.append(p.rank)
        current_user.append(p.house)
        current_user.append(p.player_score)

        resp = {'username': username, 'score': indivisual_score, 'house': houses, 'house_leaderboard': arr,
                'current_user': current_user}
        return JsonResponse(resp)

    if variable == '3':
        w, h = 6, 2
        arr = [[0 for x in range(h)] for y in range(w)]
        DC_player_leaderboard = DC_Player.objects.order_by('player_score').reverse()
        username = ["" for x in range(10)]
        indivisual_score = [0 for i in range(10)]
        houses = ["" for x in range(10)]
        i=0
        for player in DC_player_leaderboard:
            if i==10:
                break
            username[i] = DC_player_leaderboard[i].user.username
            indivisual_score[i] = DC_player_leaderboard[i].player_score
            houses[i] = DC_player_leaderboard[i].house
            i+=1

        for i, k in DC_Player.house_CHOICES:
            arr[i][0] = i
            q = DC_Player.objects.filter(house=i)
            for t in q:
                indivisual_score += t.player_score
                arr[i][1] = indivisual_score

        for j in range(5):
            if arr[j][1] > arr[j + 1][1]:
                temp1 = arr[j][1]
                arr[j][1] = arr[j + 1][1]
                arr[j + 1][1] = temp1
                temp2 = arr[j][0]
                arr[j][0] = arr[j + 1][0]
                arr[j + 1][0] = temp2

        p = DC_Player.objects.get(user=request.user)
        current_user = list()
        current_user.append(p.user.username)
        current_user.append(p.rank)
        current_user.append(p.house)
        current_user.append(p.player_score)

        resp = {'username': username, 'score': indivisual_score, 'house': houses, 'house_leaderboard': arr,
                'current_user': current_user}
        return JsonResponse(resp)





def logout_view(request):
	logout(request)
	return HttpResponseRedirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://127.0.0.1:8000')
