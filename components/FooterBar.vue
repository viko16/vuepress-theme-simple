<template>
  <footer class="footer">
    Copyright © {{ thisYear }} <br>Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
    >
      VuePress<!--
    -->
    </a> | Theme
    <a
      href="https://github.com/viko16/vuepress-theme-simple"
      rel="noopener"
      target="_blank"
    >
      Simple
    </a>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      thisYear: new Date().getFullYear()
    }
  }
}
</script>
