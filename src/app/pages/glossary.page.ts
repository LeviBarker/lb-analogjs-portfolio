import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, Input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HeroComponent } from '../components/hero.component';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { injectLoad, LoadResult } from '@analogjs/router';
import { load } from './glossary.server';

@Component({
  template: `
    <h1>📚&nbsp;Glossary</h1>
    <p>Results are retrieved from a <a href="#">cloud document store</a> via an <a href="/glossary?search=http">HTTP</a> request to a <a href="#">serverless cloud function</a>.</p>
    <input type="search" 
           placeholder="Search terms..." 
           [(ngModel)]="searchTerm" />
    <ul [aria-busy]="!data().loaded">
      @for (entry of filteredEntries(); track entry.fields.id.stringValue) {
        <li>
          <strong [innerHtml]="entry.fields.term.stringValue| highlight: searchTerm()"></strong>
          <span>&nbsp;-&nbsp;{{ entry.fields.description.stringValue }}</span>
          @if(entry.fields.externalLink?.stringValue) {
            &nbsp;<a [href]="entry.fields.externalLink?.stringValue" target="_blank" rel="noopener noreferrer" data-tooltip="External Link">[Learn more]</a>
          }
        </li>
      }
    </ul>
  `,
  imports: [HeroComponent, JsonPipe, HighlightPipe, FormsModule, AsyncPipe],
})
export default class Glossary {

  @Input() load(data: LoadResult<typeof load>) {
    console.log(data); // logs { loaded: true }
  }

  protected readonly data = toSignal(injectLoad<typeof load>(), { requireSync: true });

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
    const entries = this.data().terms?.documents ?? [];
    return entries.filter(entry =>
      entry.fields.term.stringValue.toLowerCase().includes(term) ||
      entry.fields.description.stringValue.toLowerCase().includes(term)
    );
  });

  constructor() {
    effect(async () => {
      this.searchTerm.set(this.searchQueryParam() ?? '');
    });
  }

}
