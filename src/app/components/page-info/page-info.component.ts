import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss'],
})
export class PageInfoComponent {
  @Input() postTitle!: string;

  @Input() postDescription!: string;
}
