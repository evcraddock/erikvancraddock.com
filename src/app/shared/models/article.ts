export interface IArticle {
  id: string;
  title: string;
  url: string;
  content: string;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
  dataSource: string;
  banner: string;
  author: string;
  categories: string[];
  tags: string[];

  GetContentSummary(): string;
  GetContentSummaryByLength(length: number): string;
}

export class Article implements IArticle {
  id: string;
  title: string;
  url: string;
  content: string;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
  dataSource: string;
  banner: string;
  author: string;
  categories: string[];
  tags: string[];

  constructor() {}

  public GetContentSummary() : string {
    return this.content.split('\n')[0];
  }

  public GetContentSummaryByLength(length: number): string {
    if (this.content.length < length) {
        length = this.content.length;
    }

    return this.content.slice(0, length);
  }

  public static mapFrom(articleObj: any): IArticle {
    const article = new Article();

    article.id=articleObj.id,
    article.title=articleObj.title,
    article.url=articleObj.url,
    article.content=articleObj.content,
    article.publishDate=articleObj.publishDate,
    article.createdAt=articleObj.createdAt,
    article.updatedAt=articleObj.updatedAt,
    article.dataSource=articleObj.dataSource,
    article.banner=articleObj.banner,
    article.author=articleObj.author,
    article.categories=articleObj.categories,
    article.tags=articleObj.tags

    return article;
}
}
