import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HeroComponent } from '../components/hero.component';
import { HighlightPipe } from '../pipes/highlight.pipe';

@Component({
  selector: 'app-manifest',
  template: `
    <h1>📜&nbsp;Manifest</h1>
    <p>A manifest is a document that lists the cargo, passengers, and crew of a ship, aircraft, or vehicle, used for customs and other official purposes.  
      In the same way, this page lists the tools, frameworks and paradigms used when making this site.</p>
    <p>The driving factor for many of the choices made when building this site was to use tools with minimal 
      configuration needed to start development.  I'm a strong advocate for the phrase "the best code is no code at all".  In many cases projects become over-engineered and become unmaintainable.</p>
      <ul>
      <li>Analog Framework - <a href="https://analogjs.org" target="_blank" rel="noopener noreferrer">https://analogjs.org</a></li>
      <li>Angular - <a href="https://angular.io" target="_blank" rel="noopener noreferrer">https://angular.io</a></li>
      <li>TypeScript - <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org</a></li>
      <li>RxJS - <a href="https://rxjs.dev" target="_blank" rel="noopener noreferrer">https://rxjs.dev</a></li>
      <li>PicoCSS - <a href="https://picocss.com" target="_blank" rel="noopener noreferrer">https://picocss.com</a></li>
      <li>Vercel - <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
      <li>GitHub - <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></li>
      <li>Firebase Firestore - <a href="https://firebase.google.com/products/firestore" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/firestore</a></li>
      <li>Firebase Functions - <a href="https://firebase.google.com/products/functions" target="_blank" rel="noopener noreferrer">https://firebase.google.com/products/functions</a></li>
    </ul>
  `,
  imports: [HeroComponent, HighlightPipe, FormsModule, AsyncPipe],
})
export default class Manifest {
  private readonly route = inject(ActivatedRoute);
  private readonly searchQueryParam = toSignal(this.route.queryParamMap.pipe(map(params => params.get('search') || '')));
  protected readonly searchTerm = signal('');

  private readonly entries = [
    {
      id: 'meta-framework',
      term: 'meta-framework',
      externalLink: 'https://analogjs.org',
      definition: 'A meta-framework is a higher-level framework built on top of existing frameworks to provide additional features and abstractions.',
    },
    {
      id: 'semantic-html',
      term: 'semantic HTML',
      definition: 'Semantic HTML refers to the use of HTML elements that convey meaning and structure, improving accessibility and SEO.',
    },
    {
      id: 'http',
      term: 'HTTP',
      definition: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web, enabling the transfer of resources between clients and servers.',
    },
    {
      id: 'server-side-rendering',
      term: 'server-side rendering (SSR)',
      definition: 'Server-side rendering (SSR) is the process of generating HTML content on the server and sending it to the client, improving performance and SEO.',
    },
    {
      id: 'cloud-document-store',
      term: 'cloud document store',
      definition: 'A cloud document store is a type of NoSQL database that stores data in a flexible, document-oriented format, allowing for easy scalability and accessibility over the internet.',
    },
    {
      id: 'serverless-cloud-function',
      term: 'serverless cloud function',
      definition: 'A serverless cloud function is a lightweight, event-driven piece of code that runs in a cloud environment without the need to manage server infrastructure.',
    }
  ]

  protected readonly filteredEntries = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.entries.filter(entry =>
      entry.term.toLowerCase().includes(term) ||
      entry.definition.toLowerCase().includes(term)
    );
  });

  constructor() {
    effect(async () => {
      this.searchTerm.set(this.searchQueryParam() ?? '');
    }, {allowSignalWrites: true});
  }

}
