import { Component, OnInit } from '@angular/core';
import { FoodsService } from "../../services/foods.service";


@Component({
  selector: 'app-foods-page',
  templateUrl: './foods-page.component.html',
  styleUrls: ['./foods-page.component.css']
})
export class FoodsPageComponent implements OnInit {
  foods: Object[];
  constructor(private foodservice: FoodsService) { }

  ngOnInit() {
    this.foodservice.getFoods()
    .then((paquito) => {
      this.foods = paquito
    })
  }

}
