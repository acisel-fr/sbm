import type { Article } from "$lib/types/article";
import type { Author } from "$lib/types/author";
import type { Category } from "$lib/types/category";
import type { Project } from "$lib/types/project";
import type { Locales } from "./locales";

export interface Init {
  locales: Locales[];
  articles: Article[];
  authors: Author[];
  categories: Category[];
  projects: Project[];
}
