import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingidientsChangedSubscription: Subscription
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    console.log('ShoppingListComponent constructor');
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingidientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        console.log(ingredients + ' added');
        this.ingredients = ingredients;
      }
    );
  }

  onSelect(ingredient: Ingredient) {
    this.shoppingListService.selectedIngredient = ingredient;
  }

  ngOnDestroy(): void {
    this.ingidientsChangedSubscription.unsubscribe();
  }
}
