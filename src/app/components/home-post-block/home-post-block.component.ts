import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-post-block',
  templateUrl: './home-post-block.component.html',
  styleUrls: ['./home-post-block.component.scss'],
})
export class HomePostBlockComponent {
  @Input() imagePath!: string;

  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
