import { parse } from "path";
import { findOne } from "./find-one";
import { paths } from "./paths";

import type { Query } from "$lib/types/query";

export function find(collection: string) {
  const items = paths(collection);
  const all = items.map((path) => {
    const { name } = parse(path);
    const query: Query = {
      collection: collection,
      filter: {
        code: name,
      },
    };
    const data = findOne(query);
    return data;
  });
  return all;
}
