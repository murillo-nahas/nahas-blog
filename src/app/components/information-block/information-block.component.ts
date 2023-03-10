import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'information-block',
  template: `
    <section class="author-information">
      <div class="div-image">
        <img
          src="../../../assets/images/icon.jpg"
          alt="Icon of Murillo Nahás" />
      </div>
      <div class="div-text">
        <p class="name">Murillo Nahás</p>
        <a
          href="https://twitter.com/murillonahvs"
          target="blank"
          class="link-to-twitter"
          >@murillonahvs</a
        >
      </div>
    </section>
  `,
  styleUrls: ['./information-block.component.scss'],
})
export class InformationBlockComponent {}
