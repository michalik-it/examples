import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular-app';
  feature = 'recipe';

  constructor() {
    this.title = 'udemy-angular-app';
  }

  onNavigate(featureSelected: string) {
    this.feature = featureSelected;
  }
}
