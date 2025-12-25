import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero>
      <h1>Hi, I'm Levi, welcome to my <a href="/glossary?search=semantic">semantic</a>, <a href="/glossary?search=ssr">server-side-rendered</a>, <a href="/glossary?search=meta-framework">meta-framework</a>-powered website.</h1>
      <p>In addition to linking to various projects I've worked on, this site aims to showcase the power of modern web development frameworks and paradigms.</p>
    </app-hero>
  `,
  imports: [HeroComponent],
})
export default class Home {
  onCallToActionClicked() {
    alert('Call to action button clicked!');
  }
}
