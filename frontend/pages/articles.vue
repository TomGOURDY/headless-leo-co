<template>
  <div>
    <navbar contentId="#content"></navbar>
    <div id="content">
      <h1>Tous les articles</h1>
      <article-preview v-for="article of articles" :key="article.id" :article="article"/>
    </div>
    <asso-footer></asso-footer>
  </div>
</template>

<style>
h1 {
  padding-left : 45px;
}

.mdc-card {
  width        : 70%;
  margin-left  : 15%;
  margin-right : 15%;
  margin-top   : 50px;
}

.mdc-card__actions {
  display         : flex;
  justify-content : flex-end;
  align-items     : flex-end;
}
</style>

<script>
import Navbar     from '../components/Navbar.vue'
import AssoFooter from '../components/AssoFooter.vue'

export default {
  components: { Navbar, AssoFooter },
  async asyncData (ctx) {
    return {
      articles: await ctx.$strapi.find('articles'),
    }
  },
}
</script>
