<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="$description"
        class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both"/>
      <nav-bar/>
      <div class="icon-night" @click="nightMode"></div>
    </header>
    <home-page v-if="isHome"/>
    <post-page v-else/>
    <footer-bar/>
  </div>
</template>

<script>
    import HomePage from "../components/Home";
    import PostPage from "../components/Post";
    import FooterBar from '../components/FooterBar';
    import NavBar from '../components/NavBar';

    export default {
        components: {
            HomePage,
            PostPage,
            FooterBar,
            NavBar,
        },
        mounted() {
            if(localStorage.getItem('nightMode')){
               this.nightMode();
            }
        },
        computed: {
            isHome() {
                return this.$page.path === '/';
            },
        },
        methods: {
            nightMode() {
                var styleElement = document.getElementById('styles_js');
                if (!styleElement) {
                    localStorage.setItem('nightMode','true');
                    addNewStyle('body {background-color:white;filter: brightness(90%) invert(100%) hue-rotate(180deg);-webkit-font-smoothing: antialiased;}');
                    addNewStyle('html {background-color:#191919;}');
                    addNewStyle('picture,video,img {filter: hue-rotate(180deg) invert(100%) brightness(111.111%);}');
                } else {
                    localStorage.removeItem('nightMode');
                    document.getElementsByTagName('head')[0].removeChild(styleElement);
                }

                function addNewStyle(newStyle) {
                    var styleElement = document.getElementById('styles_js');
                    if (!styleElement) {
                        styleElement = document.createElement('style');
                        styleElement.type = 'text/css';
                        styleElement.id = 'styles_js';
                        document.getElementsByTagName('head')[0].appendChild(styleElement);
                    }

                    styleElement.appendChild(document.createTextNode(newStyle));
                }
            }
        }
    };
</script>
