import type { Author } from "$lib/types/author";

export function merge_authors(
  codes: string[],
  authors: Author[],
  author_sep: string
) {
  let citation = codes
    .map((code) => {
      const idx = authors.findIndex((author) => author.code === code);
      return `${authors[idx].first} ${authors[idx].name}`;
    })
    .join(", ");
  const lastIndex = citation.lastIndexOf(",");
  if (lastIndex > 0) {
    citation =
      citation.substr(0, lastIndex) +
      ` ${author_sep}` +
      citation.substr(lastIndex + 1, citation.length - 1);
  }
  return citation;
}
