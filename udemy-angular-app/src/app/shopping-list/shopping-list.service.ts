import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  selectedIngredient: Ingredient;
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 15)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }

  removeSelected() {
    this.ingredients = this.ingredients.filter(item => item !== this.selectedIngredient);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
