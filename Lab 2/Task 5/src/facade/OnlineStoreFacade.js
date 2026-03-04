class InventoryManager {
  constructor() {
    this.stock = {
      Keyboard: 5,
      Mouse: 7,
      Monitor: 3,
    };
  }

  hasStock(product, quantity) {
    return (this.stock[product] || 0) >= quantity;
  }

  reduceStock(product, quantity) {
    this.stock[product] -= quantity;
  }
}

class PaymentManager {
  processPayment(totalAmount) {
    console.log(`Payment done: ${totalAmount}`);
    return true;
  }
}

class ShippingManager {
  ship(product, quantity, address) {
    console.log(`Shipping ${quantity} ${product} to ${address}`);
  }
}

class NotificationHelper {
  sendOrderConfirmation(customer) {
    console.log(`Order confirmation sent to ${customer}`);
  }
}

class OnlineStoreFacade {
  constructor() {
    this.inventoryManager = new InventoryManager();
    this.paymentManager = new PaymentManager();
    this.shippingManager = new ShippingManager();
    this.notificationHelper = new NotificationHelper();
  }

  placeOrder(order) {
    const { customer, product, quantity, totalAmount, address } = order;

    if (!this.inventoryManager.hasStock(product, quantity)) {
      console.log("Order failed: out of stock");
      return;
    }

    const paymentOk = this.paymentManager.processPayment(totalAmount);

    if (!paymentOk) {
      console.log("Order failed: payment issue");
      return;
    }

    this.inventoryManager.reduceStock(product, quantity);
    this.shippingManager.ship(product, quantity, address);
    this.notificationHelper.sendOrderConfirmation(customer);
    console.log("Order completed");
  }
}

export default OnlineStoreFacade;
