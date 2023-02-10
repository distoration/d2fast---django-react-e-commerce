from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.core.mail import send_mail


from .tokens import account_activation_token

from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate, get_user_model
from base.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status

from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.template import loader

from django.template.loader import render_to_string
from django.conf import settings
from django.core.mail import send_mail
from backend.settings import EMAIL_HOST_USER, SITE_URL, LOCAL_WEB_SERVER
from django.core import mail

from django.utils.html import strip_tags
from django.template import Context

from django.template.loader import get_template

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        
        return data



     
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
            
        '/api/products/upload/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]       
    return Response(routes)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

 
def activate(request, uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()

        return redirect('/your-account-is-active')




def activateEmail(request, user, email, first_name):
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token_token =  account_activation_token.make_token(user)
    protocol = 'https' if request.is_secure() else 'http'

    subject = f"Activate your user account, {user.first_name} !"
    DOMAIN = get_current_site(request).domain
    message = f"Hiregistration ty kurwo jebana!!!!!!! 111111 {user.first_name} + \n{protocol}://{LOCAL_WEB_SERVER}/activate/{uid}/{token_token}"
    #{protocol}'://'{SITE_URL}{% url 'activate' uidb64=uid token=token %}
    send_mail(
        subject,
        message,
        EMAIL_HOST_USER,
        [user.email],
        fail_silently=False,
    )



    # a working email system.
    #def activateEmail(request, user, email, first_name):

    #subject = f"Activate your user account, {user.first_name} !"
    #DOMAIN = get_current_site(request).domain
    #message = f"Hiregistration ty kurwo jebana!!!!!!! 111111 {user.first_name} + {DOMAIN}"
    
    #send_mail(
    #    subject,
    #    message,
    #    EMAIL_HOST_USER,
    #    [user.email],
    #    fail_silently=False,
    #)


   
        #email subject
        #f"Activate your user account, {user.first_name} !",
        #email content
        #f"Hi {user.first_name}!\nPlease click on the link below to confirm your registration\n{SITE_URL}\nhttps://patronite.pl/wizard/autor/profil?step=3",
        #email host user
        #EMAIL_HOST_USER,
        #email to
        #[user.email],
        #if error True is better.
        #fail_silently=False,

    
@api_view(['POST'])
def registerUser(request):
    data = request.data
    
    # send mail to anyone who registered at our website.
    # if anyone clicked a link do a command below.
    # if token is clicked TRY as a bottom show
    try:
                #user = User.objects.create(
        #user = save(commit.False)

        user = User.objects.create(
            first_name = data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),
            is_active = False
        )
        activateEmail(request, user, email=data['email'], first_name = data['name'])

        serializer = UserSerializerWithToken(user, many=False)

        return Response(serializer.data)

    
    except:
        message = {'details': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)



    



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    
    data = request.data
    
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    
    if data['password'] != '':
        user.password = make_password(data['password'])
        
    user.save()

    
    return Response(serializer.data)    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(_id=pk)
    
    data = request.data
    
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    user.is_staff = data['isAdmin']

    user.save()
    
    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)   

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(_id=pk)
    userForDeletion.delete()
    return Response('User was deleted')
    



