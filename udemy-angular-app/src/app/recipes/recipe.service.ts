import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import {Ingredient} from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Some description 1',
      'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Spaghetti', 15)
      ]),
    new Recipe(
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

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
