from rest_framework import viewsets
from .models import Geral
from .serializers import GeralSerializer , GeralSimpleSerializer
from rest_framework.response import Response


class GeralViewSet(viewsets.ModelViewSet):
  
    queryset = Geral.objects.all()
    serializer_class = GeralSerializer
#  definir o metodo listen (listagem )

# padrão do django
    def list(self, request, *args, **kwargs):
    # banco de dados 
    # busca itens do banco
        queryset = Geral.objects.all()
        serializer = GeralSimpleSerializer(queryset, many=True)
        return Response(serializer.data)