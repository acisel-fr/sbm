export interface Category {
  code: string;
  rank: number;
  name: string;
  articles?: {
    created: number;
  };
}
