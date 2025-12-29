import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero>
      <h1>Hi, I'm Levi, welcome to my <a href="/glossary?search=semantic">semantic</a>, <a href="/glossary?search=ssr">server-side-rendered</a>, <a href="/glossary?search=meta-framework">meta-framework</a>-powered website.</h1>
      <p>In addition to linking to various projects I've worked on, this site aims to showcase the power of modern web development frameworks and paradigms.</p>
    </app-hero>
    <h2>Projects</h2>
    <article>
      <h3>Pointing Poker</h3>
      <p>A simple, free, and open-source online planning poker tool for agile teams.  Built with Angular and Firebase.       <a href="https://pointing.levibarker.com" target="_blank" rel="noopener noreferrer">https://pointing.levibarker.com</a>
</p>
      <img src="https://firebasestorage.googleapis.com/v0/b/pointing-poker-89f59.appspot.com/o/public%2Fpointing-poker.png?alt=media&token=dd5f93fc-ead0-4b17-a4eb-1e20243df957" />
    </article>
  `,
  imports: [HeroComponent],
})
export default class Home {
  onCallToActionClicked() {
    alert('Call to action button clicked!');
  }
}
