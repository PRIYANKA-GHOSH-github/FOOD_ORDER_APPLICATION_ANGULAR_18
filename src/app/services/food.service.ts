import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return sample_foods
  
}
//seaech food
getAllFoodBySearchTerm(searchTerm:string){
return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()))

}
//get all tag
getAllTags():Tag[]{
return sample_tags
}
//get food by tags
getAllFoodTag(tag:string):food[]{
  return tag ==="All"? this.getAll():this.getAll().filter(food=>food.tags?.includes((tag)))
}
//get food by id or tages
getFoodById(foodid:string):food{
  return this.getAll().find(food =>food.id===foodid)?? new food();
}
}