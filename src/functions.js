function addToCart(quantity, productName = "mouse") {
  console.log(productName + " sepete eklendi! : " + " adet : " + quantity);
}
addToCart();
addToCart("laptop", 1);

let sayHello = () => {
  console.log("hello");
};
sayHello();

let sayHello2 = function () {
  console.log("hello2");
};
sayHello2();

function addToCart2(productName, quantity, unitPrice) {}
addToCart("laptop", 1, 15000);

let product1 = {
  productName: "mouse",
  unitPrice: 100,
  quantity: 2,
};
function addToCart3(product) {
  console.log(
    "product : " +
      product.productName +
      " quantity : " +
      product.quantity +
      " unitprice : " +
      product.unitPrice
  );
}

addToCart3(product1);

let product2 = {
  productName: "mouse",
  unitPrice: 100,
  quantity: 2,
};
let product3 = {
  productName: "mouse",
  unitPrice: 100,
  quantity: 2,
};
product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);

function addToCart4(products) {
  console.log(products);
}

let products = [
  {
    productName: "mouse",
    unitPrice: 100,
    quantity: 2,
  },
  {
    productName: "laptop",
    unitPrice: 100,
    quantity: 2,
  },
  {
    productName: "keyboard",
    unitPrice: 100,
    quantity: 2,
  },
];
addToCart4(products);

//rest oprerator
function add(...numbers) {
  //array a çevirir
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}
add(20, 30, 40, 50);

//spread oprerator
let numbers = [10, 20, 30, 40];
console.log(...numbers);

//destructing
let [ege, marmara, akdeniz,[egeSehirleri,marmaraSehirleri,akdenizSehirleri]] = [
  {name:"ege",pupulatin:"20M"}, 
  {name:"marmara",pupulatin:"30M"}, 
  {name:"akdeniz",pupulatin:"10M"},
  [
    ["izmir","çanakkale"],
    ["istanbul","bursa"],
    ["antalya","burdur"]
  ]
];
console.log(ege.name)
console.log(egeSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName: "mouse",unitPrice: 100,quantity: 2,})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)