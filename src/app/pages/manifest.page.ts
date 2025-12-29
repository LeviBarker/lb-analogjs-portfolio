import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../components/page-title.component';

@Component({
  selector: 'app-manifest',
  template: `
    <app-page-title>📜&nbsp;Manifest</app-page-title>
    <p>A manifest is a document that lists the cargo, passengers, and crew of a ship, aircraft, or vehicle, used for customs and other official purposes.  
      In the same way, this page lists the tools, frameworks and paradigms used when making this site.</p>
    <p>The driving factor for many of the choices made when building this site was to use tools with minimal 
      configuration needed to start development.  I'm a strong advocate for the phrase "the best code is no code at all".  In many cases projects become over-engineered and become unmaintainable.</p>
      <ul>
      <li>Analog Framework - <a href="https://analogjs.org" target="_blank" rel="noopener noreferrer">https://analogjs.org</a></li>
      <li>Angular - <a href="https://angular.io" target="_blank" rel="noopener noreferrer">https://angular.io</a></li>
      <li>TypeScript - <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org</a></li>
      <li>PicoCSS - <a href="https://picocss.com" target="_blank" rel="noopener noreferrer">https://picocss.com</a></li>
      <li>Vercel - <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
      <li>GitHub - <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></li>
      <li>Firebase Firestore - <a href="https://firebase.google.com/products/firestore" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/firestore</a></li>
      <li>Firebase Functions - <a href="https://firebase.google.com/products/functions" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/functions</a></li>
    </ul>
  `,
  imports: [FormsModule, PageTitleComponent],
})
export default class Manifest {

}
