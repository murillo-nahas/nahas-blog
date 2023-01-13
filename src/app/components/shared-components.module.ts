import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './page-info/page-info.component';
import { HomePostBlockComponent } from './home-post-block/home-post-block.component';

@NgModule({
  declarations: [PageInfoComponent, HomePostBlockComponent],
  imports: [CommonModule],
  exports: [PageInfoComponent, HomePostBlockComponent],
})
export class SharedComponentsModule {}
