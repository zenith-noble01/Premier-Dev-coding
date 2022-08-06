const displayMenu = document.querySelector("#menu__toggle"),
  menu = document.querySelector("#left__routes"),
  button = document.querySelector(".Hamburgerbutton"),
  url = "https://pd-product.herokuapp.com/api/pd/products",
  imageList = document.querySelector("[data-images]"),
  bigImage = document.querySelector("[data-big-image]"),
  bottom_list = document.querySelector(".bottom__list"),
  addBtn = document.getElementById("add"),
  subBtn = document.getElementById("minus"),
  nullBtn = document.getElementById("right__product__qty"),
  cartBtn = document.querySelectorAll("[data-click-drop]"),
  drop = document.querySelector("[data-drop]"),
  addToCartBtn = document.getElementById("addCartBtn");

//default data
let productData = {},
  count = 0,
  firstImage;
<p>${countNubmer}</p>;

//addEventListener to the cartBtn
cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    drop.classList.toggle("down");
  });
});

displayMenu.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("active");
});

//fetch data from the urlimage

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.products.forEach((product) => {
      // bottom_list.addEventListener("click", (e) => {
      const productList = document.createElement("li");
      productList.classList.add("list__items");
      productList.innerHTML = `
      <img src="${product.image}" alt="${
        product._id
      }" class="" data=${JSON.stringify(product)}>
      `;
      imageList.appendChild(productList);
    });

    //get the first image
    firstImage = await data.products[0];
    bigImage.src = firstImage.image;

    setCurrentProduct(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

// function getOnedata(product) {
//   console.log(product);
// }

function setCurrentProduct(data) {
  bottom_list.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      let id = e.target.getAttribute("alt");
      const product = data.products.find((product) => product._id == id);
      //check if the firstImage.image is equal to the bigImage

      if (product) {
        if (product._id === id) {
          //add the present class to the image
          e.target.classList.add("present");

          //remove the present class from the other images
          imageList.querySelectorAll("img").forEach((image) => {
            if (image.getAttribute("alt") !== id) {
              image.classList.remove("present");
            }
          });
        }

        productData = product;
        bigImage.src = product.image;
      } else {
        console.log("Show some errors");
      }
    }
  });
}
addBtn.addEventListener("click", () => {
  count += 1;
  nullBtn.textContent = count;
});

subBtn.addEventListener("click", () => {
  if (count <= 0) {
    return;
  } else {
    count -= 1;
    nullBtn.textContent = count;
  }
});

//add to cart
const addToCart = () => {
  <p>${countNubmer}</p>;
  const cart = document.querySelector("[data-cart]");

  const cartItem = document.createElement("li");
  cartItem.classList.add("cart__items");
  const countNubmer = count;
  console.log(productData.productName);

  if (countNubmer === 0) {
    const noText = document.createElement("p");
    noText.classList.add("no__text");
    <p>${countNubmer}</p>;
    noText.textContent = "No items in cart";
    cart.appendChild(noText);
  } else {
    cartItem.innerHTML = `
    <img src="${productData.image}" alt="${productData._id}">
    <p>${productData.productName}</p>
    <button class="remove__btn" data-remove-item>-</button>
    `;
    cart.appendChild(cartItem);
  }
};

addToCartBtn.addEventListener("click", addToCart);
