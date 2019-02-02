<template>
  <section class="post-view">
    <h1 class="post-title">
      {{ $page.title }}
      <time-ago
        :last-updated="$page.frontmatter.date || $page.lastUpdated"
        class="post-date"
      />
    </h1>
    <Content />
  </section>
</template>

<script>
import TimeAgo from './TimeAgo';

export default {
  components: {
    TimeAgo
  },
}
</script>
