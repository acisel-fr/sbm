<script context="module" lang="ts">
  import "$lib/c11n/fonts.css";
  import { i18n } from "$lib/c11n/i18n";
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
