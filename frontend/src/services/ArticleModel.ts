class GetArticleParams {
    constructor(partial: Partial<GetArticleParams>) {
      Object.assign(this, partial);
    }
  
    public Term = "Apple";
    public FromDate = "2023-03-16";
    public CurrentPage = 1;
    public ItensPerPage = 9;
  }

interface ISource {
  id: number,
  name: string
}

interface IArticle {
  source: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

interface ArticleResponse {
  articles: IArticle[]
}  
  
export { GetArticleParams }

export type { ArticleResponse, IArticle, ISource}

