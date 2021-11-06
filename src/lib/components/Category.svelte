<script lang="ts">
  import { page } from "$app/stores";
  import { spread } from "$lib/collections/spread";
  import { _ } from "svelte-i18n";

  export let category;

  $: queried_category = $page.query.get("category");
  $: queried_authors = $page.query.getAll("author");
  $: queried_project = $page.query.get("project");

  $: active = category.code === queried_category ? "active" : "";
  $: disabled = category.articles.created === 0 ? "disabled" : "";

  $: back = spread(
    "/articles",
    "category",
    category.code,
    queried_authors,
    queried_project
  );
  $: forward = spread(
    "/articles?",
    "all",
    category.code,
    queried_authors,
    queried_project
  );
  $: category_name = `categories.${category.code}`;
  $: href = category.code === queried_category ? back : forward;
</script>

<a class="nav-link {active} {disabled}" {href}>
  <div class="d-inline-flex align-items-center">
    {$_(category_name)}
    <div class="ms-1">
      {#if category.articles.created > 0 && active === ""}
        {#if !queried_category}
          <span class="badge bg-light text-black"
            >{category.articles.created}</span
          >
        {/if}
      {/if}
      {#if category.articles.created > 0 && active !== ""}
        <i class="bi bi-x-circle" />
      {/if}
    </div>
  </div>
</a>
