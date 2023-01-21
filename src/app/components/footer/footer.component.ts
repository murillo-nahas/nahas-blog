import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer>
    <p>Murillo Nahás • © {{ footerDate }}</p>
  </footer> `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerDate: number = new Date().getFullYear();
}
