<script>
  import { locale, locales } from "svelte-i18n";
  import Dropdown from "$lib/bootstrap/Dropdown.svelte";
  import { languages } from "$lib/collections/languages";

  const title = '<i class="bi bi-translate" />';
  const bg = "btn-outline-secondary";

  function choice(event) {
    locale.set(event.detail.code);
  }

  $: options = languages($locales);
  $: target = $locale;
</script>

<Dropdown {title} {options} {target} on:choice={choice} {bg} />
