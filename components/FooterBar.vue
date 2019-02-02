<template>
  <footer class="footer">
    Copyright © {{ thisYear }} | Powered by
    <a
      href="https://github.com/viko16/vuepress-theme-simple"
      rel="noopener"
      target="_blank"
    >
      vuepress-theme-simple
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
