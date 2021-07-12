function openForm() {
  document.getElementById("container").style.display = "block";
}

function closeForm() {
  document.getElementById("container").style.display = "none";
}

let onclick = true;
function wishlist(id) {
  if (onclick) {
    h1(id);
  } else {
    h2(id);
  }
}
function h1(id) {
  document.getElementById(id).src = "./Images/r-heart.svg";
  return (onclick = true);
}
function h2(id) {
  document.getElementById(id).src = "./Images/heart.png";
  return (onclick = false);
}

function plus(box, ans, p) {
  let itemCount = document.getElementById(box);
  let itemPrice = document.getElementById(p);
  let itemTotalPrice = document.getElementById(ans);
  let totalCount = document.getElementById("total");
  let totalPrice = document.getElementById("price");

  itemCount.value = +itemCount.value + 1;
  totalCount.value = +totalCount.value + 1;
  itemTotalPrice.value = +itemTotalPrice.value + +itemPrice.value;
  totalPrice.value = +totalPrice.value + +itemPrice.value;
}

function minus(box, ans, p) {
  let value = document.getElementById(box).value;
  let itemCount = document.getElementById(box);
  let itemPrice = document.getElementById(p);
  let itemTotalPrice = document.getElementById(ans);
  let totalCount = document.getElementById("total");
  let totalPrice = document.getElementById("price");
  if (value > 1) {
    itemCount.value = +itemCount.value - 1;
    totalCount.value = +totalCount.value - 1;
    itemTotalPrice.value = +itemTotalPrice.value - +itemPrice.value;
    totalPrice.value = +totalPrice.value - +itemPrice.value;
  }
}

function item(id, box, ans) {
  let box1 = document.getElementById(id);
  let t1 = parseInt(document.getElementById("total").value);
  let t2 = parseInt(document.getElementById(box).value);
  let to1 = t1 - t2;
  document.getElementById("total").value = to1;

  let a1 = parseInt(document.getElementById("price").value);
  let a2 = parseInt(document.getElementById(ans).value);
  let an1 = a1 - a2;
  document.getElementById("price").value = an1;
  box1.remove();
  alert("remove item");
}
