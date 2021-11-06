<script context="module" lang="ts">
  import type { Article } from "$lib/types/article";
  import type { Author } from "$lib/types/author";
  export async function load({ page, fetch }) {
    const code = page.params.slug;

    let [{ data: articles }, { data: authors }]: [
      { data: Article[] },
      { data: Author[] }
    ] = await Promise.all([
      fetch(`/index.json?collection=articles&code=${code}`).then((r) =>
        r.json()
      ),
      fetch("/index.json?collection=authors").then((r) => r.json()),
    ]);

    const article: Article = articles[0];
    return {
      props: {
        article,
        authors,
      },
    };
  }
</script>

<script lang="ts">
  import MarkdownIt from "markdown-it";
  import Close from "$lib/components/Close.svelte";
  import { locale, _ } from "svelte-i18n";
  import { DateTime } from "luxon";
  import { merge_authors } from "$lib/collections/merge-authors";
  const md = new MarkdownIt();

  export let article: Article;
  export let authors: Author[];

  $: title = $_(`articles.${article.code}.title`);
  $: citation = merge_authors(article.authors, authors, $_("authors.sep"));
  $: date =
    DateTime.fromISO(article.createdAt)
      .setLocale($locale)
      .toLocaleString(DateTime.DATETIME_MED) + "\n\n";
  $: doi = article.doi
    ? `<a href="https://doi.org/${article.doi}"><img src="https://zenodo.org/badge/DOI/${article.doi}.svg" alt="DOI"></a>`
    : null;
  $: html = md.render(article.markdown);
</script>

<div class="row">
  <div class="col">
    <Close />
    <h1>{title}</h1>
    <h4>{citation}</h4>
    <p>{date}</p>
    {#if doi}{@html doi} <br /><br />{/if}
    {@html html}
  </div>
</div>
