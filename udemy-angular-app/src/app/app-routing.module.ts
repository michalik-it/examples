import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {FactsComponent} from './facts/facts.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeNotSelectedComponent} from './recipes/recipe-not-selected/recipe-not-selected.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children:
      [
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent},
        {path: '', component: RecipeNotSelectedComponent},
        {path: ':id/edit', component: RecipeEditComponent},
      ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'facts', component: FactsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
