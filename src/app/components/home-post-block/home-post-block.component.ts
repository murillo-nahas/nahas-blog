import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-post-block',
  template: `<section class="home-post-block">
      <div class="image">
        <img
          src="{{ imagePath }}"
          alt="Mountain Image"
          loading="lazy"
          class="image-hello-world" />
      </div>
      <div class="text">
        <h2>{{ postTitle }}</h2>
        <p>
          {{ postDescription }}
        </p>
        <span>Read more →</span>
      </div>
    </section>
    <div class="divisor"></div> `,
  styleUrls: ['./home-post-block.component.scss'],
})
export class HomePostBlockComponent {
  @Input() imagePath!: string;

  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
