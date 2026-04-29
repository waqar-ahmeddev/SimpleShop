let btn = document.querySelectorAll("button");
let cartItems = document.querySelector(".cart-items");
let cartCount = document.querySelector(".cart-count"); // yeh jo card k uper wala ha 
let cartTotal = document.querySelector(".cart-total");
let  checkoutBtn = document.querySelector(".checkout-btn");
let icon = document.querySelector(".icons");
let count = 0; // yeh card k uper wala count ha 
let total = 0;
let iconCount  = 0;
btn.forEach((button) => {
    button.addEventListener("click", () => {

        // remove empty message first
       let emptyState = document.querySelector(".empty-state");
         if (emptyState) {
            emptyState.style.display = "none";
         }
        let card = button.parentElement;
        let name = card.querySelector("h2").innerText;
        let price = card.querySelector("p").innerText;
        price = parseFloat(price.replace(/[^0-9.]/g, ""));
        let img = card.querySelector("img").src;
        count++; // yeh card k uper wala ha count 
         checkoutBtn.disabled = false;
         checkoutBtn.style.backgroundColor = "#2563eb"; // Blue color
         checkoutBtn.style.opacity = "1";
         checkoutBtn.style.cursor = "pointer";
         checkoutBtn.style.color = "white";
         cartCount.innerHTML = `Your Cart (${count})`; 
        total += price; // Naye item ki price total mein add ho gayi
        cartTotal.innerText = `$${total.toFixed(2)}`;
        cartItems.innerHTML += `  
 <div class="item flex items-center justify-between w-80 max-w-sm p-3 border rounded-xl shadow-sm mb-2 bg-white" data-price="${price}">
    <div class="controls items-center gap-3">
      <img src="${img}" class="w-14 h-14 object-contain rounded-md border">

      <div>
        <h2>${name}</h2>
        <p>$${price}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button class="decrease">-</button>
      <span class="qty">1</span>
      <button class="increase">+</button>
      <button class="removeBtn">Remove</button>
    </div>
  </div>
`;   
  iconCount++;
icon.innerText = iconCount;
  
    });
});
cartItems.addEventListener("click", (e) => {

  const item = e.target.closest(".item");
  if (!item) return;

  const qtySpan = item.querySelector(".qty");
  let qty = parseInt(qtySpan.innerText);

  if (e.target.classList.contains("removeBtn")) {
    let itemPrice = parseFloat(item.dataset.price);
  let qty = parseInt(item.querySelector(".qty").innerText);

  total -= itemPrice * qty; 
    item.remove();
    count--;
if (count < 0) count = 0;
cartCount.innerHTML = `Your Cart (${count})`;
cartTotal.innerText = `$${total.toFixed(2)}`;
if (count === 0) {
    let checkoutBtn = document.querySelector(".checkout-btn");
    checkoutBtn.disabled = true;
    checkoutBtn.style.backgroundColor = "#d1d5db"; // Grey color
    checkoutBtn.style.opacity = "0.5";
    checkoutBtn.style.cursor = "not-allowed";
}

iconCount--;

if (iconCount < 0) iconCount = 0;

icon.innerText = iconCount;
  }
  else if (e.target.classList.contains("decrease")) {

  let itemPrice = parseFloat(item.dataset.price);

  qty--;

  // ✔ always update total first
  total -= itemPrice;

  if (qty <= 0) {

    item.remove();

    count--;
    if (count < 0) count = 0;

    iconCount--;
    if (iconCount < 0) iconCount = 0;

  } else {
    qtySpan.innerText = qty;
  }

  cartCount.innerHTML = `Your Cart (${count})`;
  cartTotal.innerText = `$${total.toFixed(2)}`;
  icon.innerText = iconCount;
}

else if (e.target.classList.contains("increase")) {

  let itemPrice = parseFloat(item.dataset.price);

  qty++;
  qtySpan.innerText = qty;

  total += itemPrice;

  cartTotal.innerText = `$${total.toFixed(2)}`;
}
});

