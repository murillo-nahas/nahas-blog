import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<main class="container">
    <page-description
      postTitle="Latest"
      postDescription="My recent stuff"></page-description>
    <section class="page-content">
      <home-post-block
        imagePath="../../../assets/images/posts/hello-world.png"
        postTitle="Hello World"
        postDescription="This is the first post of my blog. Here I just want to say what I want to
      share with you and what are my goals for 2023."
        routerLink="/blog/hello-world"></home-post-block>
    </section>
  </main> `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
