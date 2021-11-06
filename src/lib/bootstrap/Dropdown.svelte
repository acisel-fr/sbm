<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import DropdownOption from "./Dropdown-Option.svelte";

  const dispatch = createEventDispatcher();
  function choice(event) {
    dispatch("choice", {
      code: event.detail.code,
    });
  }

  export let title: string;
  export let options: { code: string; name: string }[];
  export let target: string;
  export let bg: string;
</script>

<div class="dropdown">
  <button
    class="btn {bg} dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {@html title}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {#each options as option}
      <DropdownOption {...option} {target} on:selected={choice} />
    {/each}
  </ul>
</div>
