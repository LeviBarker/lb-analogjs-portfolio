import { Component, inject, model, signal } from "@angular/core";
import { PageTitleComponent } from "../components/page-title.component";
import { AiService } from "../api/ai.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-ai-page',
    template: `
        <app-page-title>✨&nbsp;LevAI</app-page-title>
        <article>
            <h3>Question</h3>
            <textarea [(ngModel)]="question" [disabled]="isLoading()" placeholder="Who is Avatar Aang's best friend?"></textarea>
            <small>Questions are not remembered.  Ask a fully formed question every time.</small>
            <button [aria-busy]="isLoading()" [disabled]="isLoading()" (click)="ask()">Ask AI</button>
        </article>   

        <blockquote>
  {{response()}}
  <footer>
    <cite>— LevAI</cite>
  </footer>
</blockquote>
        
    `,
    imports: [PageTitleComponent, FormsModule]
})
export default class Ai {

    private readonly aiService = inject(AiService);
    readonly isLoading = signal(false);
    readonly question = model('');
    readonly response = signal('Ask me anything! Well... almost anything.');

    ask() {
        this.isLoading.set(true);
        this.aiService.ask(this.question()).subscribe({
            next: (value) => this.response.set(value.choices[0].message.content),
            error: console.error,
            complete: () => this.isLoading.set(false)
        })
    }

}