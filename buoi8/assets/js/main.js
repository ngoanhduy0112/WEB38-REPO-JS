let rowJs = document.querySelector(".row-js");
let data = [
  {
    id: 1,
    name: "ao bomber",
    price: "250,000d",
    image:
      "https://product.hstatic.net/200000053174/product/19_1c883c925449409db5fdb7ccb42946cf_master.jpg",
  },
  {
    id: 2,
    name: "ao polo",
    price: "200,000d",
    image:
      "https://product.hstatic.net/200000053174/product/19_1c883c925449409db5fdb7ccb42946cf_master.jpg",
  },
  {
    id: 3,
    name: "ao somi",
    price: "150,000d",
    image:
      "https://product.hstatic.net/200000053174/product/19_1c883c925449409db5fdb7ccb42946cf_master.jpg",
  },
  {
    id: 4,
    name: "ao docle",
    price: "100,000d",
    image:
      "https://product.hstatic.net/200000053174/product/19_1c883c925449409db5fdb7ccb42946cf_master.jpg",
  },
];
let HTML = ``;
data.forEach((value, index) => {
  HTML += `
    <div class="col-md-3 col-sm-6 col-12">
    <div class="content">
        <div class="box-image">
            <img src=${value.image} alt="anh1">
        </div>
        <div class="box-text">
            <h3 class="name-product">${value.name}</h3>
            <p class="price-product">${value.price}</p>

        </div>
    </div>
</div>`;
});
rowJs.innerHTML = HTML;
