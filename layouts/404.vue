<template>
  <div class=" container theme-container vuepress-theme-simple">
    <header class="header">
      <div style="clear: both"/>
    </header>
    <div class="layout-404_">
      <div v-if="this.$lang === 'zh-CN'">
        <h1>肆零肆</h1>
        <p>儿童急走追黄蝶，飞入菜花无处寻。</p>
      </div>
      <div v-else>
        <h1>404</h1>
        <p>NOT FOUND</p>
      </div>
      <router-link to="/"
                   style="color:#a8a8a8;">
        Back to home.
      </router-link>
    </div>
    <footer-bar/>
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
<style scoped>
  .container {
    margin: 10px auto;
    max-width: 600px;
    text-align: center !important;
  }

  h1 {
    margin: 30px 0;
    font-size: 4em;
    line-height: 1;
    letter-spacing: -1px;
  }

  a {
    display: inline-block;
    padding: 1rem;
    border: 1px #c2c2c2 solid;
    text-decoration: none;
  }

  .layout-404_ {
    margin: 8em 0 8em 0
  }

  a:hover {
    background: #dfdfdf;
  }
</style>

