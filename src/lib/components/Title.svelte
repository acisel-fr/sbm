<script lang="ts">
  export let title = "Blog acronym";
  export let subtitle = "Long blog title";
  export let href = "/";
</script>

<header class="blog-header py-3">
  <div class="row flex-nowrap justify-content-between align-items-center">
    <a class="nav-link" {href}>
      <div class="text-center">
        <div class="blog-header-title text-dark">{title}</div>
        <div
          class="blog-header-subtitle mt-3 text-dark d-none d-lg-flex justify-content-center"
        >
          {subtitle}
        </div>
      </div>
    </a>
  </div>
</header>
