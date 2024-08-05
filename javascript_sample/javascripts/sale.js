const productSelect = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = {
    1: { id: 1, name: "Mezcla original 200g", price: 500 },
    2: { id: 2, name: "Mezcla original 500g", price: 900 },
    3: { id: 3, name: "Mezcla especial 200g", price: 700 },
    4: { id: 4, name: "Mezcla especial 500g", price: 1200 },
};

function add() {
    const productId = parseInt(productSelect.value);
    const number = parseInt(numberElement.value);

    if (productId === 0) {
        window.alert("Por favor, selecciona un producto.");
        return;
    }

    if (!number || number < 1) {
        window.alert("Por favor, selecciona una cantidad válida.");
        return;
    }

    const product = products[productId];

    let purchase = {
        id: productId,
        name: product.name,
        price: product.price,
        number: number,
    };

    let existingPurchase = purchases.find(item => item.id === purchase.id);

    if (existingPurchase) {
        existingPurchase.number += purchase.number;
    } else {
        purchases.push(purchase);
    }

    window.alert(`${display()}\nSubtotal: ${subtotal()} yenes`);
    clearInputs();
}

function display() {
    return purchases.map(purchase => {
        return `${purchase.name}: ${purchase.number} unidades a ${purchase.price} yenes cada uno`;
    }).join("\n");
}

function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.price * purchase.number;
    }, 0);
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    const total = sum + postage;

    const details = purchases.map(purchase => {
        const purchaseSubtotal = purchase.price * purchase.number;
        return `${purchase.name}: ${purchase.number} unidades a ${purchase.price} yenes cada uno. Subtotal: ${purchaseSubtotal} yenes`;
    }).join("\n");

    window.alert(`Detalles de la compra:\n${details}\n\nSubtotal: ${sum} yenes\nGastos de envío: ${postage} yenes\nTotal: ${total} yenes`);
    purchases = [];
    clearInputs();
}

function calcPostageFromPurchase(sum) {
    if (sum < 2000) {
        return 500;
    } else if (sum < 3000) {
        return 250;
    } else {
        return 0;
    }
}

function clearInputs() {
    productSelect.value = "0";
    numberElement.value = "";
}
