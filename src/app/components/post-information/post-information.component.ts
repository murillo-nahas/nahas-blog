import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-information',
  template: `<section class="post-description">
      <p class="post-description-title">{{ postTitle }}</p>
      <p class="post-description-date">{{ postData }} - {{ readTime }}</p>
    </section>
    <div class="divisor"></div> `,
  styleUrls: ['./post-information.component.scss'],
})
export class PostInformationComponent {
  @Input() postTitle!: string;

  @Input() postData!: string;

  @Input() readTime!: string;
}
