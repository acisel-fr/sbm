<script lang="ts">
  import { _ } from "svelte-i18n";
  $: title = $_("blog.acronym");
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container-fluid container-lg">
  <slot />
</div>
