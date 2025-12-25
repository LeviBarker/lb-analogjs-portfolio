import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";

interface StringValue {
    stringValue: string;
}

export interface Glossary {
    name: string;
    fields: {
        id: StringValue;
        term: StringValue;
        description: StringValue;
        externalLink?: StringValue;
    }
}

export interface GlossaryResponse {
        documents: Glossary[];
        createTime: string;
        updateTime: string;
}

@Injectable({ providedIn: 'root' })
export class GlossaryService {
    private readonly url = 'https://firestore.googleapis.com/v1/projects/levi-barker-product/databases/(default)/documents/glossary';
    private readonly http = inject(HttpClient);

    getAll() {
        return firstValueFrom(this.http.get<GlossaryResponse>(this.url));
    }
}