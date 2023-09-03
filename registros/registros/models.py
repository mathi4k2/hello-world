from django.db import models

class Cliente(models.Model):
    numero_cliente = models.AutoField(primary_key=True)
    numero_documento = models.CharField(max_length=20, unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    numero_sucursal = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Caso(models.Model):
    numero = models.AutoField(primary_key=True)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    canal = models.CharField(max_length=50)
    descripcion = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Caso {self.numero} - {self.cliente}"
