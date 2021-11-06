<script lang="ts">
  import { DateTime } from "luxon";
  import Card from "$lib/bootstrap/Card.svelte";
  import { locale, _ } from "svelte-i18n";
  import type { Article } from "$lib/types/article";

  const subtitle = null;
  const colAttr = "mt-1";
  const cardAttr = "h-100";

  export let article: Article;

  $: title = $_(`articles.${article.code}.title`);
  $: description = $_(`articles.${article.code}.description`);
  $: link = $_(`routes.articles.read`);
  $: createdAt = article.createdAt;
  $: code = article.code;
  $: footer = DateTime.fromISO(createdAt)
    .setLocale($locale)
    .toRelativeCalendar();
</script>

<Card
  {title}
  {subtitle}
  {description}
  {code}
  {footer}
  {colAttr}
  {cardAttr}
  {link}
/>
