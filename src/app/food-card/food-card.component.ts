import { Component, OnInit } from '@angular/core';
import {FoodMenuService} from '../Services/food-menu.service';

@Component({
  selector: 'food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  _foodMenu : any [] = [];
  constructor(private foodservice:FoodMenuService) { }

  ngOnInit() {
        this.foodservice.getFoodItems().subscribe(
          (data:any[])=>{
            this._foodMenu =data;
            console.log(data);
          }
        )
  }

}
