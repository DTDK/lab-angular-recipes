import { Component, OnInit } from '@angular/core';
import { FoodsService } from "../../services/foods.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  food: Object;
  foodId: number;
  constructor(private foodsservice: FoodsService, private tude: ActivatedRoute) { }

  ngOnInit() {
    this.tude.params
    .subscribe((params) => {
      this.foodId = params['id'];
    });
    this.foodsservice.getFood(this.foodId)
    .then((paquita) => {
      this.food = paquita;
    })

    
  }

}
