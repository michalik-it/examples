import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import {Ingredient} from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Test recipe 1',
      'Some description 1',
      'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Spaghetti', 15)
      ]),
    new Recipe(
      2,
      'Test recipe 2',
      'Some description 2',
      'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d',
      [
        new Ingredient('Banana', 5),
        new Ingredient('Milk', 15)
      ])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
