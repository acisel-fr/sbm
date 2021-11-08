<script lang="ts">
  import { _ } from "svelte-i18n";
  import Title from "$lib/components/Title.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import Translate from "$lib/components/Translate.svelte";
  import { meta } from "$lib/stores";
  export let categories = $meta.categories;
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
