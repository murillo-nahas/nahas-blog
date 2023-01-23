import { BlogPostBlockComponent } from './blog-post-block/blog-post-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePostBlockComponent } from './home-post-block/home-post-block.component';
import { PostInformationComponent } from './post-information/post-information.component';
import { InformationBlockComponent } from './information-block/information-block.component';
import { PageDescriptionComponent } from './page-info/page-description.component';

@NgModule({
  declarations: [
    PageDescriptionComponent,
    HomePostBlockComponent,
    BlogPostBlockComponent,
    PostInformationComponent,
    InformationBlockComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageDescriptionComponent,
    HomePostBlockComponent,
    BlogPostBlockComponent,
    PostInformationComponent,
    InformationBlockComponent,
  ],
})
export class SharedComponentsModule {}
