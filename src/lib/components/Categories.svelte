<script lang="ts">
  import Category from "./Category.svelte";
  import type { Category as Type } from "$lib/types/category";
  export let categories: Type[];
</script>

<ul class="nav nav-pills d-none d-xl-flex justify-content-center mt-2">
  {#each categories as category}
    <li class="nav-item">
      <Category {category} />
    </li>
  {/each}
</ul>
