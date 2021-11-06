<script lang="ts">
  export let title: string;
  export let code: string;
  export let link: string;
  export let subtitle: string;
  export let description: string;
  export let footer: string;
  export let cardAttr: string;
  export let colAttr: string;

  const header = null;
  const image = null;
</script>

<div class="col {colAttr}">
  <div class="card {cardAttr}">
    {#if header}
      <div class="card-header">
        {header}
      </div>
    {/if}

    {#if image}
      <img src="" class="card-img-top" alt="" />
    {/if}

    <div class="card-body">
      {#if title}
        <h5 class="card-title">{title}</h5>
      {/if}

      {#if subtitle}
        <h6 class="card-subtitle mt-2 mb-2 text-muted">{subtitle}</h6>
      {/if}

      {#if description}
        <p class="card-text">{description}</p>
      {/if}

      <a href="/article/{code}" class="card-link">{link}</a>
    </div>

    {#if footer}
      <div class="card-footer">
        <small class="text-muted">{footer}</small>
      </div>
    {/if}
  </div>
</div>
