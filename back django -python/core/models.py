from django.db import models

# api para gestão de membros 
class Geral(models.Model):
    name = models.CharField(max_length=100)
    linkedin=models.CharField(max_length=100)
    github = models.CharField(max_length=100)
  
  
    
   
# definir metodo para retornar a classe como vai retornar no banco 
    def __str__(self):
        return self.name + "  " + self.linkedin 


    
