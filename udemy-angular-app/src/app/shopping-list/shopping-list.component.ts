import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 15)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteIngredient() {
    if (this.selectedIngredient) {
      console.log('remove: ' + this.selectedIngredient);
    }
  }
}
