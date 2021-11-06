import matter from "gray-matter";

export function frontmatter(md: Buffer) {
  const { content, data } = matter(md.toString());
  data.markdown = content;
  return data;
}
