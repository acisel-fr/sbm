import type { Author } from "$lib/types/author";

export function merge_authors(authors: Author[], author_sep: string) {
  let citation = authors
    .map((author) => {
      const fullname = `${author.first} ${author.name}`;
      return fullname;
    })
    .join(", ");
  const lastIndex = citation.lastIndexOf(",");
  citation =
    lastIndex >= 0
      ? citation.substr(0, lastIndex) +
        ` ${author_sep}` +
        citation.substr(lastIndex + 1, citation.length - 1)
      : citation;
  return citation;
}
