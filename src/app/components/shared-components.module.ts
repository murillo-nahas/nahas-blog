import { BlogPostBlockComponent } from './blog-post-block/blog-post-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './page-info/page-info.component';
import { HomePostBlockComponent } from './home-post-block/home-post-block.component';
import { PostInformationComponent } from './post-information/post-information.component';
import { ReturnToBlogComponent } from './return-to-blog/return-to-blog.component';

@NgModule({
  declarations: [
    PageInfoComponent,
    HomePostBlockComponent,
    BlogPostBlockComponent,
    PostInformationComponent,
    ReturnToBlogComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageInfoComponent,
    HomePostBlockComponent,
    BlogPostBlockComponent,
    PostInformationComponent,
    ReturnToBlogComponent,
  ],
})
export class SharedComponentsModule {}
