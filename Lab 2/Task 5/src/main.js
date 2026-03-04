import OnlineStoreFacade from "./facade/OnlineStoreFacade.js";

const store = new OnlineStoreFacade();

store.placeOrder({
  customer: "Fares",
  product: "Keyboard",
  quantity: 2,
  totalAmount: 1500,
  address: "Cairo",
});

store.placeOrder({
  customer: "Ali",
  product: "Mouse",
  quantity: 10,
  totalAmount: 3000,
  address: "Alexandria",
});
