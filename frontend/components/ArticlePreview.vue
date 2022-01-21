<template>
  <ui-card>
    <h2>{{ article.title }}</h2>
    <ui-card-content>
      <ui-card-text>
        <div v-html="$md.render(article.content.split('\n')[0].substring(0,100) + '...')"/>
      </ui-card-text>
      <ui-card-actions>
        <UiButton raised
                  @click="goToArticle">Lire plus
        </UiButton>
      </ui-card-actions>
    </ui-card-content>
  </ui-card>
</template>

<script>
export default {
  props  : [
    'article',
  ],
  methods: {
    goToArticle () {
      this.$router.push({ name: 'article-id', params: { id: this.article.id } })
    },
  },
}
</script>
