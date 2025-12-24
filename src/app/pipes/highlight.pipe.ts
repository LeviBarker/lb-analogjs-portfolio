import { Pipe } from "@angular/core";

@Pipe({
    name: "highlight"
})
export class HighlightPipe {
    transform(value: string, searchTerm: string): string {
        if (!searchTerm) {
            return value;
        }
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return value.replace(regex, '<u>$1</u>');
    }
}