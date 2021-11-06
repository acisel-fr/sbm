export interface Query {
  collection: string;
  filter: {
    code: string;
  };
  projection?: any;
}
