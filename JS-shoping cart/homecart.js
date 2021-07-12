localStorage.setItem("cartTotal", JSON.stringify({ count: 0, price: 0 }));
localStorage.setItem("cartItem", JSON.stringify([]));

function openForm() {
  document.getElementById("container2").style.display = "block";
  document.getElementById("container2").style.position = "absolute";
  document.getElementById("card").style.opacity = "0.4";
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  cartproduct(cartItem, cartTotal);
}

function closeForm() {
  document.getElementById("container2").style.display = "none";
  document.getElementById("card").style.opacity = "1";
}

function addToCart(i) {
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  if (cartItem.length > 0) {
    let item = cartItem.filter((data) => data.id === product[i].id);
    if (item.length > 0) {
      console.log(item);
      let count = item.length;
      product[i].count += count;
      product[i].total = product[i].price * product[i].count;
      cartItem = cartItem.filter((data) => data.id !== product[i].id);
    }
  }
  cartTotal.count += 1;
  cartTotal.price += product[i].price;

  let itemCount = document.getElementById("count");
  itemCount.value = cartTotal.count;

  cartItem.push(product[i]);

  localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
}

let product = [
  {
    id: 0,
    name: "T-shirt",
    price: 199,
    img: "./Images/t-shirt.jpg",
    total: 199,
    count: 1,
  },
  {
    id: 1,
    name: "Glasses",
    price: 699,
    img: "./Images/goggles.jpeg",
    total: 699,
    count: 1,
  },
  {
    id: 2,
    name: "Sony headphones",
    price: 2990,
    img: "./Images/sony.jpeg",
    total: 2990,
    count: 1,
  },
  {
    id: 3,
    name: "Lenovo ideaPad 330",
    price: 44258,
    img: "./Images/lenovo3.jpg",
    total: 44258,
    count: 1,
  },
  {
    id: 4,
    name: "Oppo A92s",
    price: 29999,
    img: "./Images/Oppo_A92s.jpeg",
    total: 29999,
    count: 1,
  },
  {
    id: 5,
    name: "BOAT Airdopes",
    price: 1799,
    img: "./Images/boat.jpg",
    total: 1799,
    count: 1,
  },
  {
    id: 6,
    name: "Samsung Watch",
    price: 14932,
    img: "./Images/samsung-watch.jpg",
    total: 14932,
    count: 1,
  },
  {
    id: 7,
    name: "Realme Smart Tv",
    price: 14999,
    img: "./Images/realme-tv.jpeg",
    total: 14999,
    count: 1,
  },
  {
    id: 8,
    name: "Canon 1500D Camera",
    price: 31999,
    img: "./Images/camera.jpeg",
    total: 31999,
    count: 1,
  },
  {
    id: 9,
    name: "Man canvas shoes",
    price: 499,
    img: "./Images/shoes.jpg",
    total: 499,
    count: 1,
  },
  {
    id: 10,
    name: "Sun Glasses",
    price: 459,
    img: "./Images/goggles.jpeg",
    total: 459,
    count: 1,
  },
  {
    id: 11,
    name: "headphones",
    price: 2590,
    img: "./Images/sony.jpeg",
    total: 2590,
    count: 1,
  },
];

showproduct = () => {
  for (let i = 0; i < product.length; i++) {
    let card = `
    <div class="container">
       <div class='card'>
            <img src=${product[i].img}>
            ${product[i].name}
            <br>
            ${product[i].price}
            <br>
            <button class="addtocart" onclick="addToCart(${[
              i,
            ]})">Add to cart</button>
        </div>
      </div>
      `;
    document.getElementById("card").innerHTML += card;
  }
};
window.addEventListener("load", () => {
  showproduct();
});

cartproduct = (cartItem, cartTotal) => {
  let products = "";
  let total = "";
  for (let i = 0; i < cartItem.length; i++) {
    products += `
      <div class="item" id="item${i}" style="padding: 15px;">
        <div class="cart" style="display: contents;">
          <div><img src="./Images/remove.png" width="27" onclick="deleteItemFromCart(${cartItem[i].id}, ${i})" /></div>
          <div><img id="heart" src="./Images/heart.png" width="35" onclick="wishlist('heart')" /></div>
          <div><img id="img" src=${cartItem[i].img} width="90" /></div>
          <div id="name">${cartItem[i].name}</div>
          <div id="price">${cartItem[i].price}</div>
           <div class="box">
              <input type="button" id="plus" value="+" onclick="plus('box${i}','ans${i}', ${i})" />
              <input type="text" id="box${i}" value="${cartItem[i].count}" disabled />
              <input type="button" id="minus" value="-" onclick="minus('box${i}','ans${i}', ${i})" />
            </div>
          <div>
          <input type="ans" name="vbox" value="${cartItem[i].total}" id="ans${i}" disabled />
          </div>
        </div>
      </div>
      <hr>
    `;
  }
  total += `
  <div class="total">
  <div>
    <input type="button" id="add" value="Total" />
  </div>
  <div id="display">
    <span>items:</span>
    <input type="text" id="total" value="${cartTotal.count}" name="total" disabled />
    <span>price:</span>
    <input type="text" id="price" value="${cartTotal.price}" name="price" disabled />
  </div>
</div>`;
  document.getElementById("item").innerHTML = products;
  document.getElementById("total").innerHTML = total;
};

let onclick = true;
function wishlist(id) {
  if (onclick) {
    like(id);
  } else {
    dislike(id);
  }
}
function like(id) {
  document.getElementById(id).src = "r-heart.svg";
  return (onclick = false);
}
function dislike(id) {
  document.getElementById(id).src = "heart.png";
  return (onclick = true);
}

function plus(box, ans, index) {
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  cartItem[index].count += 1;
  cartItem[index].total = cartItem[index].price * cartItem[index].count;
  cartTotal.count += 1;
  cartTotal.price += cartItem[index].price;

  localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  cartproduct(cartItem, cartTotal);
}

function minus(box, ans, index) {
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  cartItem[index].count -= 1;
  cartItem[index].total = cartItem[index].price * cartItem[index].count;
  cartTotal.count -= 1;
  cartTotal.price -= cartItem[index].price;

  localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  cartproduct(cartItem, cartTotal);
}

function deleteItemFromCart(id, index) {
  document.getElementById(`item${index}`).remove();

  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));

  let item = cartItem.filter((data) => data.id === id);
  cartTotal.count -= item[0].count;
  cartTotal.price -= item[0].total;
  cartItem = cartItem.filter((data) => data.id !== id);

  localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  let itemCount = document.getElementById("count");
  itemCount.value = cartTotal.count;

  cartproduct(cartItem, cartTotal);
}
