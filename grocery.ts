class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
   
    description() {
      return "Name: " + this.name + " " + "Quantity: " + this.quantity;
    }
  }  
  
let item1 = new Grocery("Oatmeal", 1, 2.99);
let item2 = new Grocery("Bagel", 10, 5.00);
let item3 = new Grocery("Eggs", 5, 3.99);

let groceries: Grocery[] = [item1, item2, item3];

const list = document.getElementById("groceryList");

groceries.forEach((item) => {
  const li = document.createElement('li');
  li.innerText = item.name + " Qty: " + item.quantity;
  list!.appendChild(li);
});