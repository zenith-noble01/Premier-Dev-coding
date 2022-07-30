const displayMenu = document.querySelector("#menu__toggle"),
  menu = document.querySelector("#left__routes"),
  button = document.querySelector(".Hamburgerbutton"),
  url = "https://pd-product.herokuapp.com/api/pd/products",
  imageList = document.querySelector("[data-images]"),
  bigImage = document.querySelector("[data-big-image]"),
  bottom_list = document.querySelector(".bottom__list");

displayMenu.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("active");
});

//default data
let productData = {};

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
    setCurrentProduct(data);
    const firstImage = data.products[1].image;

    bigImage.src = firstImage;
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

function getOnedata(product) {
  console.log(product);
}

function setCurrentProduct(data) {
  bottom_list.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      let id = e.target.getAttribute("alt");
      const product = data.products.find((product) => product._id == id);
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
