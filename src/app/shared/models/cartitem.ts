
import { food } from "./food";

export class cartitem {
  quantity: number = 1;
  price: number;

  constructor(public food: food) {
    this.price = food.price;  // Initialize price here, after food is assigned
  }
}
