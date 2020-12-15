<template>
  <time
    :datetime="lastUpdated | formatDate"
    :title="lastUpdated | formatDate"
    pubdate="pubdate"
  >
    {{ lastUpdated | timeago($lang) }}
  </time>
</template>

<script>
import { format } from 'timeago.js';

export default {
  filters: {
    timeago: (str, lang) => {
      if (!str) return format()
      const language = navigator ? navigator.language : lang
      const locale = (language || '').replace('-', '_')
      return format(new Date(str), locale)
    },
    formatDate: date => {
      return new Date(date).toLocaleString()
    }
  },
  props: {
    lastUpdated: {
      type: [ String, Date, Number ],
      default: ''
    },
  },
}
</script>
