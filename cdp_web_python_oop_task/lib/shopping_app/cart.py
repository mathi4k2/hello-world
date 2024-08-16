# src/cart.py

from ownable import Ownable

class Cart(Ownable):
    def __init__(self, owner):
        super().__init__(owner)  # Asegúrate de pasar el propietario al constructor de Ownable
        self.items = []

    def items_list(self):
        return self.items

    def add(self, item):
        self.items.append(item)

    def total_amount(self):
        price_list = [item.price for item in self.items]
        return sum(price_list)

    def check_out(self):
        if self.owner.wallet.balance < self.total_amount():
            raise ValueError("Insufficient funds in wallet")

        total_amount = self.total_amount()
        for item in self.items:
            item.owner.wallet.deposit(item.price)  # Deposita el dinero en la billetera del propietario del ítem
            self.owner.wallet.withdraw(item.price)  # Retira el dinero de la billetera del propietario del carrito
            item.owner = self.owner  # Transfiere la propiedad del ítem al propietario del carrito

        self.items.clear()  # Vacía el carrito
