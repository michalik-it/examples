import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<void>();

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.addIngredient.emit(new Ingredient(nameInput.value, Number(amountInput.value)));
  }

  onDelete(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.deleteIngredient.emit();
  }

  onClear() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
