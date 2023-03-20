from rest_framework import serializers
from .models import Geral

class GeralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geral

        fields = ['id','name', 'linkedin','github' ]
 
class GeralSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geral
        fields = ['id','name' ]
        
