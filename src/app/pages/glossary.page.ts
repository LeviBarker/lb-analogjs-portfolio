import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HeroComponent } from '../components/hero.component';
import { HighlightPipe } from '../pipes/highlight.pipe';

@Component({
  template: `
    <h1>📚&nbsp;Glossary</h1>
    <p>Results are retrieved from a <a href="#">cloud document store</a> via an <a href="/glossary?search=http">HTTP</a> request to a <a href="#">serverless cloud function</a>.</p>
    <input type="search" 
           placeholder="Search terms..." 
           [(ngModel)]="searchTerm" />
    <ul>
      @for (entry of filteredEntries(); track entry.id) {
        <li>
          <strong [innerHtml]="entry.term | highlight: searchTerm()"></strong>
          <span>&nbsp;-&nbsp;{{ entry.definition }}</span>
          @if(entry.externalLink) {
            &nbsp;<a [href]="entry.externalLink" target="_blank" rel="noopener noreferrer" data-tooltip="External Link">[Learn more]</a>
          }
        </li>
      }
    </ul>
  `,
  imports: [HeroComponent, HighlightPipe, FormsModule, AsyncPipe],
})
export default class Glossary {
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
