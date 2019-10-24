import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe-list/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activatedRoute.params.subscribe(
      params => this.recipe = this.recipeService.getRecipe(+params.id)
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
