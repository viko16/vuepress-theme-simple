<template>
  <div class="list-view">
    <SearchBox id="searchBox" style=""/>
    <div
      v-if="filteredList.length === 0"
      class="empty-list"
    >
      <span v-if="this.$lang === 'zh-CN'">
        落了片白茫茫大地真干净。
      </span>
      <span v-else>
        Ooops! Nothing here..🙈
      </span>
    </div>
    <ol
      v-else
      class="list"
    >
      <li
        v-for="page of paginatedData"
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

    <div class="pageControl" v-show="isPaging">
      <button
        :disabled="pageNumber === 0"
        @click="prevPage">
        Prev
      </button>
      <button
        :disabled="pageNumber >= pageCount -1"
        @click="nextPage">
        Next
      </button>
    </div>


  </div>
</template>

<script>
    import TimeAgo from './TimeAgo';
    import SearchBox from '@SearchBox';

    export default {
        data() {
            return {
                pageNumber: 0,
                isPaging:false
            }
        },
        components: {
            TimeAgo,
            SearchBox
        },
        mounted() {
            this.pageNumber = location.hash ? location.hash.split('#')[1] : 0;
        },
        computed: {
            filteredList() {
                // Order by publish date, desc
                return this.$site.pages
                    .filter(item => item.path !== '/' && item.title && !item.frontmatter.hide)
                    .sort((a, b) => {
                        return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
                    })
            },
            paginatedData() {
                if(!this.$themeConfig.pageSize){
                    return this.filteredList;
                }
                this.isPaging = true;
                const start = this.pageNumber * (this.$themeConfig.pageSize || 10),
                    end = start + (this.$themeConfig.pageSize || 10);
                return this.filteredList.slice(start, end);
            },
            pageCount() {
                let l = this.filteredList.length,
                    s = (this.$themeConfig.pageSize || 10);
                return Math.ceil(l / s);
            },
        },
        methods: {
            nextPage() {
                this.pageNumber++;
                location.hash = this.pageNumber;
            },
            prevPage() {
                this.pageNumber--;
                location.hash = this.pageNumber;
            }
        }

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
