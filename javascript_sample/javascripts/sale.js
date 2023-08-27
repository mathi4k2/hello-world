const productSelect = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
const productNames = {
  "500": "Mezcla original 200g",
  "900": "Mezcla original 500g",
  "700": "Mezcla especial 200g",
  "1200": "Mezcla especial 500g",
};

function add() {
  const price = productSelect.value;
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };

  let newPurchase = true;

  purchases.forEach((item) => {
    if (item.price === purchase.price) {
      newPurchase = false;
    }
  });

  if (purchases.length < 1 || newPurchase) {
    purchases.push(purchase);
  } else {
    for (let i = 0; i < purchases.length; i++) {
      if (purchases[i].price === purchase.price) {
        purchases[i].number += purchase.number;
      }
    }
  }

  window.alert(`${display()}\nsubtotal: ${subtotal()} yenes`);
  priceElement.value = "";
  numberElement.value = "";
}

function display() {
  return purchases.map(purchase => {
    return `${productNames[purchase.price]}: ${purchase.number} unidades a ${purchase.price} yenes cada uno`
  }).join("\n");
};

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number 
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`Subtotal: ${sum} yenes, los gastos de envío son: ${postage} yenes. El total es: ${sum + postage} yenes`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum <= 2000) {
    return 500;
  } else if (sum < 3000) {
    return 250;
  } else {
    return 0;
  }
}
