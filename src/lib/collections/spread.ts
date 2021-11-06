export function spread(
  base,
  target,
  queried_category,
  queried_authors,
  queried_project
) {
  if (target !== "category" && queried_category) {
    base += add_separator(base);
    base += `category=${queried_category}`;
  }
  if (target !== "project" && queried_project) {
    base += add_separator(base);
    base += `project=${queried_project}`;
  }
  if (target !== "author" && queried_authors && queried_authors.length > 0) {
    queried_authors.forEach((author) => {
      base += add_separator(base);
      base += `author=${author}`;
    });
  }
  return base;
}

function add_separator(base) {
  return base.indexOf("?") === base.length - 1 ? "" : "&";
}
