import { Component, OnInit } from '@angular/core';
import { food } from '../../../shared/models/food'; // Import the food model
import { FoodService } from '../../../services/food.service'; // Import the service
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected property name
})
export class HomeComponent implements OnInit {

  foods: food[] = []; // Correctly type your array using the food model

  constructor(private api: FoodService, activateRouter: ActivatedRoute) {
    activateRouter.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.api.getAllFoodBySearchTerm(params.searchTerm); // Use the search term to filter foods
      } else {
        this.foods = this.api.getAll(); // Return all data if no search term is provided
      }
    });
  }

  ngOnInit() {}
}
