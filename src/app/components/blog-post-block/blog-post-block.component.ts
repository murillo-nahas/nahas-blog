import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-post-block',
  templateUrl: './blog-post-block.component.html',
  styleUrls: ['./blog-post-block.component.scss'],
})
export class BlogPostBlockComponent {
  @Input() date!: string;

  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
