// DU LIEU TU SEVER TRA VE TRANG
const data = [
  {
    id: 1,
    name: "Iphone 15",
    price: "33.000.000",
    images:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
  },
  {
    id: 2,
    name: "Iphone 14",
    price: "30.000.000",
    images:
      "https://cdn.tgdd.vn/Products/Images/42/289663/iphone-14-den-glr-1.jpg",    
  },
  {
    id: 3,
    name: "Iphone 13",
    price: "25.000.000",
    images:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png",
  },
  {
    id: 4,
    name: "Iphone 12",
    price: "20.000.000",
    images:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-do-1-1-org.jpg",
  },
  {
    id: 5,
    name: "Iphone 11",
    price: "10.000.000",
    images:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-xanh-la-1-1-org.jpg",
  },
];

// B1: TRUY CAP PHAN TU
let elementJs = document.querySelectorAll(".element-js");

// B2: SHOW DU LIEU
let HTML = ``;
data.forEach((value) => {
  console.log(value, 'gia tri cua phan tu');
    HTML =
    HTML +
    `
              <div class="column column-4">

    <div class="content">
      <div class="box-image">
        <img src=${value.images} alt="anh 1">
      </div>
      <div class="box-description">
        <h3 class="name-product">${value.name}</h3>
        <p class="price">${value.price}</p>
      </div>
    </div>

  </div>`
});


// B3: HIEN THI
elementJs[0].innerHTML = HTML;

// 

