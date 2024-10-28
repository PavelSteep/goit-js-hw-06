const customer = {
  username: "Mango",
  balanceValue: 24000,
  discountValue: 0.1,
  ordersValue: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  get balance() {
    return this.balanceValue;
  },
  get discount() {
    return this.discountValue;
  },
  set discount(value) {
    this.discountValue = value;
  },
  get orders() {
    return this.ordersValue;
  },
  addOrder(cost, order) {
    this.balanceValue -= cost - cost * this.discountValue;
    this.ordersValue.push(order);
  },
  // Change code above this line
};

customer.discount = 0.15;
console.log(customer.discount); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.balance); // 19750
console.log(customer.orders); // ["Burger", "Pizza", "Salad", "Steak"]
