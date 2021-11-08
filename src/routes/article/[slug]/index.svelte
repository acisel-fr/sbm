<script lang="ts">
  import MarkdownIt from "markdown-it";
  import { locale, _ } from "svelte-i18n";
  import { DateTime } from "luxon";
  import Close from "$lib/components/Close.svelte";
  import { merge_authors } from "$lib/collections/merge-authors";
  import { page } from "$app/stores";
  import { meta } from "$lib/stores";

  const md = new MarkdownIt();
  
  $: slug = $page.params.slug;
  $: idx = $meta.articles.findIndex((e) => e.code === slug);
  $: article = idx >= 0 ? $meta.articles[idx] : null;

  $: title = $_(`articles.${article.code}.title`);
  $: citation = merge_authors(article.authors, $_("authors.sep"));
  $: date =
    DateTime.fromISO(article.createdAt)
      .setLocale($locale)
      .toLocaleString(DateTime.DATETIME_MED) + "\n\n";
  $: doi = article.doi
    ? `<a href="https://doi.org/${article.doi}"><img src="https://zenodo.org/badge/DOI/${article.doi}.svg" alt="DOI"></a>`
    : null;
  $: html = article.markdown ? md.render(article.markdown) : null;
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
