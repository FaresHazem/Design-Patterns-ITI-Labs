import PizzaShop from "./builder/PizzaShop.js";

const shop = new PizzaShop();
const margherita = shop.orderMargherita();
const pepperoni = shop.orderPepperoni();

console.log(margherita.getDescription());
console.log(pepperoni.getDescription());
