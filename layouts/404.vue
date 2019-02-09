<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="$description"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
    </header>
    <div class="layout-404">
      <h1>404</h1>
      <p>Seems nothing here.</p>
      <router-link to="/">
        Back to home.
      </router-link>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '../components/FooterBar';

export default {
  components: {
    FooterBar,
  },
};
</script>
