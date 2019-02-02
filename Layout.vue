<template>
  <div class="theme-container">
    <header class="header">
      <router-link to="/">
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
    </header>
    <HomePage v-if="isHome" />
    <PostPage v-else />
    <footer-bar />
  </div>
</template>

<script>
import HomePage from "./components/Home";
import PostPage from "./components/Post";
import FooterBar from './components/FooterBar';

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
  },
  computed: {
    isHome() {
      return this.$page.path === "/";
    }
  }
};
</script>
