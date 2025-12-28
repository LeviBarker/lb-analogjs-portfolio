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
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `]
})
export class HeroComponent {

}