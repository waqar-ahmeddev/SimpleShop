let btn = document.querySelectorAll("button");
let cartItems = document.querySelector(".cart-items");
let cartCount = document.querySelector(".cart-count");
let cartTotal = document.querySelector(".cart-total");
let finaLized = document.querySelector(".finalized");
let icon = document.querySelector(".icons");
let count = 0;
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
        count++;
       cartCount.innerHTML = `Your Cart (${count})`;
        cartItems.innerHTML += `  
 <div class="item flex items-center justify-between w-80 max-w-sm p-3 border rounded-xl shadow-sm mb-2 bg-white">
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

    item.remove();
    count--;
if (count < 0) count = 0;

cartCount.innerHTML = `Your Cart (${count})`;

iconCount--;
if (iconCount < 0) iconCount = 0;

icon.innerText = iconCount;
  }

  else if (e.target.classList.contains("decrease")) {

    qty--;

  
if (qty <= 0) {
  item.remove();

  count--;
  if (count < 0) count = 0;

  cartCount.innerHTML = `Your Cart (${count})`;

  iconCount--;
  if (iconCount < 0) iconCount = 0;

  icon.innerText = iconCount;

} else {
  qtySpan.innerText = qty;
}
  }

  else if (e.target.classList.contains("increase")) {
    qty++;
    qtySpan.innerText = qty;
  }

});
