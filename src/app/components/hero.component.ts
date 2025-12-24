import { Component, input, output } from "@angular/core";

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
        border: 1px solid red;
        height: calc(100vh - 2rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `]
})
export class HeroComponent {

}