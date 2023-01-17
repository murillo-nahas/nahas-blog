import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <main class="wrapper">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
    <!-- <app-footer></app-footer> -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
