document.querySelector('.bi-bag').addEventListener('click', () => {
    alert("Cart is currently empty!");
});

var amount = 0;
function set_amount() {
    if (amount === undefined) {
        amount = 0;
    }
    const quantity = document.getElementById("product-card-amount").value;
    amount += parseInt(quantity);
    document.getElementById("bag-amount").innerHTML = toString(amount);
}