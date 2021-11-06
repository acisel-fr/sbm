<script context="module" lang="ts">
  import type { Category } from "$lib/types/category";
  import type { Article } from "$lib/types/article";

  export async function load({ fetch }) {
    let [{ data: articles }, { data: categories }]: [
      { data: Article[] },
      { data: Category[] }
    ] = await Promise.all([
      fetch("/index.json?collection=articles").then((r) => r.json()),
      fetch("/index.json?collection=categories").then((r) => r.json()),
    ]);

    categories = categories
      .map((item) => {
        const created = articles.filter(
          (article) => article.category === item.code
        ).length;
        item.articles = {
          created: created,
        };
        return item;
      })
      .sort((a, b) => a.rank - b.rank);

    return {
      props: {
        categories,
      },
    };
  }
</script>

<script lang="ts">
  import { _ } from "svelte-i18n";
  import Title from "$lib/components/Title.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import Translate from "$lib/components/Translate.svelte";
  export let categories: Category[];
  $: title = $_("blog.acronym");
  $: subtitle = $_("blog.title");
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container-fluid container-lg">
  <Title {title} {subtitle} />

  <Categories {categories} />

  <slot />

  <div class="d-flex justify-content-center mt-2">
    <Translate />
  </div>
</div>
