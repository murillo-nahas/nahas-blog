import { SharedComponentsModule } from './../components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [BlogComponent, PostsComponent, HelloWorldComponent],
  imports: [CommonModule, BlogRoutingModule, SharedComponentsModule],
})
export class BlogModule {}
