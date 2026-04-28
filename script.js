let btn = document.querySelectorAll("button");
let cartItems = document.querySelector(".cart-items");
let cartCount = document.querySelector(".cart-count");

let count = 0;

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
        let img = card.querySelector("img").src;

        count++;
       cartCount.innerHTML = `Your Cart (${count})`;

cartItems.innerHTML += `
<div class="flex items-center justify-between w-full max-w-sm p-3 border rounded-xl shadow-sm mb-2 bg-white">

    <!-- Left side -->
    <div class="flex items-center gap-3">

        <img src="${img}" class="w-14 h-14 object-contain rounded-md border">

        <div class="leading-tight">
            <h2 class="text-sm font-semibold text-gray-800">${name}</h2>
            <p class="text-sm text-gray-500">${price}</p>
        </div>

    </div>

    <!-- Right side buttons -->
    <div class="flex items-center gap-2">

        <button class="w-6 h-6 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100">
            -
        </button>

        <span class="text-sm">1</span>

        <button class="w-6 h-6 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100">
            +
        </button>

        <button class="ml-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
            Remove
        </button>

    </div>

</div>
`;
    });
});