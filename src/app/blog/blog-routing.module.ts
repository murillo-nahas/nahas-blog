import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
