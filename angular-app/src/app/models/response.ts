export interface SourceItem {
    id: string,
    name: string,
    url: string,
    description: string,
    language: string,
    country: string,
    category: string
}

export interface ApiResponce {
    sources: Array<SourceItem>
}

