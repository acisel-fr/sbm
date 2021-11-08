<script>
  import { locale, locales } from "svelte-i18n";
  import Dropdown from "$lib/bootstrap/Dropdown.svelte";
  import { meta } from "$lib/stores";
  
  const title = '<i class="bi bi-translate" />';
  const bg = "btn-outline-secondary";

  function choice(event) {
    locale.set(event.detail.code);
  }

  $: options = $meta.locales;
  $: target = $locale;
</script>

<Dropdown {title} {options} {target} on:choice={choice} {bg} />
