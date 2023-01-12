import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './page-info/page-info.component';

@NgModule({
  declarations: [PageInfoComponent],
  imports: [CommonModule],
  exports: [PageInfoComponent],
})
export class SharedComponentsModule {}
