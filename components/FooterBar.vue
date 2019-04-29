<template>
  <footer class="footer">
    © {{ thisYear }}
    <i
      v-if="author"
      class="icon-user"
    />
    {{ author }}
    <br>
    Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
    >VuePress</a>
    | Theme
    <a
      href="https://github.com/viko16/vuepress-theme-simple"
      rel="noopener"
      target="_blank"
    >Simple</a>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    author() {
      return this.$themeConfig.author || '';
    },
  }
}
</script>
