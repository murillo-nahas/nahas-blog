import { BlogPostBlockComponent } from './blog-post-block/blog-post-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './page-info/page-info.component';
import { HomePostBlockComponent } from './home-post-block/home-post-block.component';

@NgModule({
  declarations: [
    PageInfoComponent,
    HomePostBlockComponent,
    BlogPostBlockComponent,
  ],
  imports: [CommonModule],
  exports: [PageInfoComponent, HomePostBlockComponent, BlogPostBlockComponent],
})
export class SharedComponentsModule {}
