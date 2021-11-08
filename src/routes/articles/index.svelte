<script lang="ts">
  import { page } from "$app/stores";
  import Article from "$lib/components/Article.svelte";
  import { _ } from "svelte-i18n";
  import { meta } from "$lib/stores";

  $: data = $meta.articles;

  $: category = $page.query.get("category");
  $: articles = category
    ? data.filter((item) => item.category === category)
    : data;
  $: count = articles.length;
</script>

<div class="row">
  <div class="col">
    <div class="p-4 mt-3 bg-light rounded-3">
      <div class="d-inline-flex align-items-center">
        <h1>{$_("routes.articles.title")}</h1>
        <span class="badge bg-secondary ms-2">{count}</span>
      </div>

      <div
        class="row row-cols-1 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2"
      >
        {#each articles as article}
          <Article {article} />
        {/each}
      </div>
    </div>
  </div>
</div>
