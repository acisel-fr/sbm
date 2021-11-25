<script context="module" lang="ts">
  import { meta } from "$lib/stores";
  import "$lib/routes/_data/c11n/fonts.css";
  import { i18n } from "$lib/routes/_data/c11n/i18n";
  import metadata from "$lib/routes/_data/c11n/metadata.yaml";
  meta.set(metadata);
  i18n();
</script>

<script lang="ts">
  import CenterPage from "$lib/bootstrap/CenterPage.svelte";
  import Spinner from "$lib/bootstrap/Spinner.svelte";
  import { isLoading } from "svelte-i18n";
  const color = "text-warning";
</script>

{#if $isLoading}
  <CenterPage>
    <Spinner {color} />
  </CenterPage>
{:else}
  <slot />
{/if}
