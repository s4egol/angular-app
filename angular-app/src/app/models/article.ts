export interface Article {
    source: {
        id?: any,
        name: string
    },
    url: string,
    urlToImage: string,
    description: string,
    content: string
    author: string,
    isLocalArticle?: boolean,
    title: string,
    isLocal?: boolean,
    _id?: string
}

export interface ArticleResponse {
    status: string,
    totalResults: number,
    articles: Array<Article>
}