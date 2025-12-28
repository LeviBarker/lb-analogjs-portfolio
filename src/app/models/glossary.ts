
interface StringValue {
    stringValue: string;
}

interface Glossary {
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