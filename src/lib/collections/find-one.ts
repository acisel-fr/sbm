import { resolve, join } from "path";
import yaml from "js-yaml";
import { frontmatter } from "./frontmatter";
import { extract_content } from "./extract-content";
import { env } from "./env";
import type { Query } from "$lib/types/query";

export function findOne(query: Query) {
  const root = resolve();
  const target = join(root, env.data, query.collection, query.filter.code);
  const { type, content } = extract_content(target);
  const data = type === "yaml" ? yaml.load(content) : frontmatter(content);
  return data;
}
