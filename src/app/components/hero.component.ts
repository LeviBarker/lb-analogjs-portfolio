import { Component } from "@angular/core";

@Component({
    selector: "app-hero",
    template: `
    <section class="hero">
        <div>
            <ng-content />
        </div>  
    </section>
  `,
  styles: [`
    .hero {
        height: calc(100vh - 56px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `]
})
export class HeroComponent {

}