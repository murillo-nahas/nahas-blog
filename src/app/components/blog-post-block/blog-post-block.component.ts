import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-post-block',
  template: `<section class="home-post-block">
    <div class="date">
      <p>{{ date }}</p>
    </div>
    <div class="text">
      <h2>{{ postTitle }}</h2>
      <p>
        {{ postDescription }}
      </p>
      <span>Read more →</span>
    </div>
  </section> `,
  styleUrls: ['./blog-post-block.component.scss'],
})
export class BlogPostBlockComponent {
  @Input() date!: string;

  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
