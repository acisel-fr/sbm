<script lang="ts">
  import { fade } from "svelte/transition";

  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let button: string;
</script>

<div
  style="position: fixed; top: 50%;left: 50%; transform: translate(-50%, -50%); z-index: 2000"
  transition:fade
>
  <div class="p-5 bg-light rounded-3">
    <div class="container-fluid">
      <div class="blog-header-title">{title}</div>
      <div class="col-md-10 blog-header-subtitle mb-4">
        {subtitle}
      </div>
      <p class="col-md-12 blog-header-description mb-5">{description}</p>
      <a href="/articles" class="btn btn-primary btn-lg" type="button"
        >{button}</a
      >
    </div>
  </div>
</div>
