<script lang="ts">
  import { _ } from "svelte-i18n";
  import Home from "$lib/components/Home.svelte";

  $: title = $_("blog.acronym");
  $: subtitle = $_("blog.title");
  $: description = $_("blog.description");
  $: button = $_("routes.root.enter");
</script>

<svelte:head>
  <title>{$_("blog.acronym")}</title>
</svelte:head>

<Home {title} {subtitle} {description} {button} />
