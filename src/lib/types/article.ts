export interface Article {
  createdAt: string;
  code: string;
  category: string;
  authors: string[];
  doi?: string;
  project?: string;
  markdown?: string;
}
