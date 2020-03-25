<template>
  <div class="list-view">
    <SearchBox id="searchBox" style=""/>
    <div
      v-if="filteredList.length === 0"
      class="empty-list"
    >
      Ooops! Nothing here..🙈
    </div>
    <ol
      v-else
      class="list"
    >
      <li
        v-for="page of filteredList"
        :key="page.key"
        class="list-item"
      >
        <router-link
          :to="page.path"
          class="item-title"
        >
          {{ page.title }}
        </router-link>
        <br>
        <time-ago
          :last-updated="page.frontmatter.date || page.lastUpdated"
          class="item-date"
        />
      </li>
    </ol>
  </div>
</template>

<script>
    import TimeAgo from './TimeAgo';
    import SearchBox from '@SearchBox';

export default {
  components: {
    TimeAgo
  },
  computed: {
    filteredList() {
      // Order by publish date, desc
      return this.$site.pages
        .filter(item => item.path !== '/')
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
        })
    }
  },
}
</script>
<style scoped>
  .pageControl {
    border-bottom: 1px solid #ddd;
    margin: 0 0 10px 0;
    text-align: center;
  }

  button {
    border: none;
    outline: none;
    font-size: 13px;
    background: none;
    color: #888;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover:disabled {
    cursor: not-allowed;
  }

</style>
