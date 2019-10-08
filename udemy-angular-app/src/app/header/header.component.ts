import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  feature: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.feature = feature;
    this.featureSelected.emit(this.feature);
  }
}
