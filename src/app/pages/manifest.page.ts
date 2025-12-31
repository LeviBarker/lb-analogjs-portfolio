import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../components/page-title.component';

@Component({
  selector: 'app-manifest',
  template: `
    <app-page-title>📜&nbsp;Manifest</app-page-title>
    <p>A manifest is a document that lists the cargo, passengers, and crew of a ship for a handful of purposes.  
      In the same way, this page lists the tools, frameworks and paradigms used when making this site.</p>
    <p>From the outset, the goal was to make a simple, performant and accessible portfolio website with minimal configuration.</p>
    <article>
      <section class="rich-card-title">
        <img src="/images/angular_gradient.png" alt="Angular logo" />
        <h2>Angular</h2>
      </section>
       <p>The core framework used to build this site is Angular, a powerful and popular front-end web development framework 
          maintained by Google.  Angular provides a robust set of tools and features for building complex web applications.</p>
          <a href="https://angular.io" target="_blank" rel="noopener noreferrer">[Learn more]</a>
    </article>
    <article>
      <section class="rich-card-title">
        <img src="/images/analog-logo.svg" alt="Angular logo" />
        <h2>Analog</h2>
      </section>
      <p>Analog is a fullstack <a href="/glossary?search=meta-framework">meta-framework</a> for building applications and websites with Angular.
Similar to other meta-frameworks such as Next.JS, Analog provides a simplified DX and makes implementing <a href="/glossary?search=ssr">SSR</a> websites easy.
      <p>
                  <a href="https://analogjs.org/" target="_blank" rel="noopener noreferrer">[Learn more]</a>
    </article>
      <!-- <ul>
      <li>Analog Framework - <a href="https://analogjs.org" target="_blank" rel="noopener noreferrer">https://analogjs.org</a></li>
      <li>Angular - <a href="https://angular.io" target="_blank" rel="noopener noreferrer">https://angular.io</a></li>
      <li>TypeScript - <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org</a></li>
      <li>PicoCSS - <a href="https://picocss.com" target="_blank" rel="noopener noreferrer">https://picocss.com</a></li>
      <li>Vercel - <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
      <li>GitHub - <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></li>
      <li>Firebase Firestore - <a href="https://firebase.google.com/products/firestore" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/firestore</a></li>
      <li>Firebase Functions - <a href="https://firebase.google.com/products/functions" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/functions</a></li>
    </ul> -->
  `,
  imports: [FormsModule, PageTitleComponent],
})
export default class Manifest {

}
