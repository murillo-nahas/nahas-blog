import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <main class="container">
      <post-information
        postTitle="Hello World"
        postData="14/01/2023"
        readTime="1min"></post-information>
      <section class="post-content">
        <aside>
          <information-block></information-block>
          <p routerLink="/blog/posts">Return to posts ←</p>
        </aside>
        <div class="content">
          <img
            src="../../../assets/images/posts/hello-world.png"
            alt="Mountains Image"
            class="image"
            loading="lazy" />
          <p routerLink="/blog/posts" class="return-posts">Return to posts ←</p>
          <h3>Welcome to my blog!</h3>

          <p class="p-normal-text">
            I've been planning to create this blog for a long time and after
            several attempts, here I am! Well, here is a brief overview of how I
            did it. This blog was built using Angular in it's powerful mode and
            just it. (I'm an Angular evangelist so I thought it would be a good
            one).
          </p>
          <h3>Ok, but, who am I?</h3>
          <p class="p-normal-text">
            Howdy! I'm Murillo Nahás, a Software Engineer from Brazil. I'm a
            JavaScript enthusiast, so, the most part of my time I'm coding with
            JavaScript, TypeScript, Angular, React, Node.js and so on. In this
            blog I want to share some personal and tech content, so if you are
            interested, stay here with me!
          </p>
          <p class="p-normal-text">
            I'm always trying to improve my skills, focusing to get a deep
            knowledgement on web technologies, sometimes contributing to
            open-source software and learning in public with other people,
            sharing content through blog posts, articles, projects.
          </p>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {}
