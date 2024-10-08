import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { food } from '../../../shared/models/food';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
    food!:food;

  constructor(activatedRoute:ActivatedRoute,private api:FoodService,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      this.food = api.getFoodById(params.id);
    })
  }
  ngOnInit(): void {

  }
  //add to cart button code
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
