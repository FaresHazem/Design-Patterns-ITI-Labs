// Internal pizza model (hidden from customer code).
class Pizza {
  constructor() {
    this.size = "";
    this.dough = "";
    this.sauce = "";
    this.toppings = [];
  }

  getDescription() {
    return `Pizza -> Size: ${this.size}, Dough: ${this.dough}, Sauce: ${this.sauce}, Toppings: ${this.toppings.join(", ")}`;
  }
}

// Internal builder with step-by-step construction methods.
class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.size = size;
    return this;
  }

  setDough(dough) {
    this.pizza.dough = dough;
    return this;
  }

  setSauce(sauce) {
    this.pizza.sauce = sauce;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}

// Public API used by customers; builder details stay hidden here.
class PizzaShop {
  orderMargherita() {
    return new PizzaBuilder()
      .setSize("Medium")
      .setDough("Thin")
      .setSauce("Tomato")
      .addTopping("Mozzarella")
      .addTopping("Basil")
      .build();
  }

  orderPepperoni() {
    return new PizzaBuilder()
      .setSize("Large")
      .setDough("Pan")
      .setSauce("Tomato")
      .addTopping("Mozzarella")
      .addTopping("Pepperoni")
      .build();
  }
}

export default PizzaShop;
