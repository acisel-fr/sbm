<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function onClick() {
    dispatch("selected", {
      code: code,
    });
  }

  export let code: string;
  export let name: string;
  export let target: string;

  $: active = code === target ? "active" : null;
</script>

<li class="dropdown-item {active}" on:click={onClick}>{name}</li>
