import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FactsComponent} from './facts/facts.component';
import {FactListComponent} from './facts/fact-list/fact-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {FactDetailsComponent} from './facts/fact-details/fact-details.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FactsComponent,
    FactListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    FactDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeNotSelectedComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
