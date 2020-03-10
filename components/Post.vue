<template>
  <section class="post-view">
    <router-link to="/">Back</router-link>
    <div class="post-head">
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
      <time-ago
        :last-updated="$page.frontmatter.date || $page.lastUpdated"
        class="post-date"
      />
    </div>
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
