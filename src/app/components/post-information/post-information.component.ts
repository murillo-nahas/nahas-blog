import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-information',
  templateUrl: './post-information.component.html',
  styleUrls: ['./post-information.component.scss'],
})
export class PostInformationComponent {
  @Input() postTitle!: string;

  @Input() postData!: string;

  @Input() readTime!: string;
}
