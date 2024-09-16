import { cartitem } from "./cartitem";

//for total price and total quantity
export class cart{
    items:cartitem[] =[];
    totalPrice:number =0;
    totalCount:number =0;
}