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
    <input type="search" 
           placeholder="Search glossary..." 
           [(ngModel)]="searchTerm" />
    <ul>
      @for (entry of filteredEntries(); track entry.id) {
        <li>
          <strong [innerHtml]="entry.term | highlight: searchTerm()"></strong>
          <span>&nbsp;-&nbsp;{{ entry.definition }}</span>
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
      definition: 'A meta-framework is a higher-level framework built on top of existing frameworks to provide additional features and abstractions.',
    },
    {
      id: 'semantic-html',
      term: 'semantic HTML',
      definition: 'Semantic HTML refers to the use of HTML elements that convey meaning and structure, improving accessibility and SEO.',
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
