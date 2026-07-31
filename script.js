// Quantity controls

const minusBtn = document.querySelector(".quantity button:first-child");
const plusBtn = document.querySelector(".quantity button:last-child");
const quantity = document.querySelector(".quantity span");

const subtotal = document.querySelector(".summary-row span:last-child");
const total = document.querySelector(".total span:last-child");

let count = 1;
const price = 550;
const delivery = 100;

plusBtn.addEventListener("click", () => {
    count++;
    updateCart();
});

minusBtn.addEventListener("click", () => {
    if (count > 1) {
        count--;
        updateCart();
    }
});

function updateCart() {
    quantity.textContent = count;

    const sub = count * price;

    subtotal.textContent = `Rs ${sub}`;
    total.textContent = `Rs ${sub + delivery}`;
}

const buttons = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        products.forEach(product => {
            if (category === "All" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
