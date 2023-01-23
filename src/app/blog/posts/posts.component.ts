import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
    <main class="container">
      <page-description
        postTitle="Posts"
        postDescription="All the posts I created"></page-description>
      <section class="page-content">
        <blog-post-block
          date="Sat, 14/01/2023"
          postTitle="Hello World"
          postDescription="This is the first post of my blog. Here I just want to say what I want to share with you and what are my goals for 2023."
          routerLink="/blog/hello-world"></blog-post-block>
      </section>
    </main>
  `,
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {}
