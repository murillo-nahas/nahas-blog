import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-description',
  template: `
    <section class="page-description">
      <p class="page-description-title">{{ postTitle }}</p>
      <p class="page-description-text">{{ postDescription }}</p>
    </section>
    <div class="divisor"></div>
  `,
  styleUrls: ['./page-description.component.scss'],
})
export class PageDescriptionComponent {
  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
