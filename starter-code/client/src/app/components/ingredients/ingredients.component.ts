import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../services/foods.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Array<any> = [];
  

  constructor(private foodsservice: FoodsService) { }

  ngOnInit() {
  
    
    this.foodsservice.getIngredients() 
    .then((ingredients) => this.ingredients = ingredients)
  }

}
