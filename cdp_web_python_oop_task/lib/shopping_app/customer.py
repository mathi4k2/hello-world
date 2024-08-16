from ownable import Ownable
from cart import Cart

class User(Ownable):
    def __init__(self, name):
        super().__init__()
        self.name = name

class Customer(User):
    def __init__(self, name):
        super().__init__(name)
        self.cart = Cart(self)  # Customer instancia un Cart con sí mismo como propietario
