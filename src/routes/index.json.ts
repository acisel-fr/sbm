import { find } from "$lib/collections/find";
import { findOne } from "$lib/collections/find-one";
import type { Article } from "$lib/types/article";
import type { Query } from "$lib/types/query";

export async function get({ query }) {
  const code: string = query.get("code");
  const collection: string = query.get("collection");

  const q: Query = {
    collection: collection,
    filter: {
      code: code,
    },
  };

  let data: Article[] = code ? [findOne(q)] : find(collection);

  return {
    body: {
      data,
    },
  };
}
