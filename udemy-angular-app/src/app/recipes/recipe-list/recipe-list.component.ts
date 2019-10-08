import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Some description',
      'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d'),
    new Recipe(
      'Test recipe',
      'Some description',
      'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
