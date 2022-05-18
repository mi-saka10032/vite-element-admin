<template>
  <article-detail :is-edit="false" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail.vue'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail }
}
</script>

