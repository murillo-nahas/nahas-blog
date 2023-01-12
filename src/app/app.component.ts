import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: ` <main class="wrapper">
    <app-header></app-header>
    <router-outlet></router-outlet>
  </main>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
