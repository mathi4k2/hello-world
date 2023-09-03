from django.shortcuts import render, redirect
from .models import Cliente, Caso

def index(request):
    return render(request, 'registros/index.html')


def registrar_cliente(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        cliente = Cliente(nombre=nombre, apellido=apellido)
        cliente.save()

    # Obtener todos los clientes para mostrar en la plantilla
    clientes = Cliente.objects.all()

    return render(request, 'registros/registrar_cliente.html', {'clientes': clientes})


def registrar_caso(request):
    if request.method == 'POST':
        cliente_id = request.POST.get('cliente')
        canal = request.POST.get('canal')
        descripcion = request.POST.get('descripcion')
        
        # Obtén el cliente por su ID
        cliente = Cliente.objects.get(pk=cliente_id)
        
        # Crea y guarda el nuevo caso
        caso = Caso(cliente=cliente, canal=canal, descripcion=descripcion)
        caso.save()
        
        return redirect('casos_registrados')  # Redirige a la página de casos registrados
    
    clientes = Cliente.objects.all()
    return render(request, 'registros/registrar_caso.html', {'clientes': clientes})

def casos_registrados(request):
    casos = Caso.objects.all()
    return render(request, 'registros/casos.html', {'casos': casos})