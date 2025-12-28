import { Component } from "@angular/core";

@Component({
    selector: "app-page-title",
    template: `
    <h1><ng-content /></h1>
    `,
    styles: [`
        h1 {
            padding-top: 156px;
        }
    `]
})
export class PageTitleComponent {
}