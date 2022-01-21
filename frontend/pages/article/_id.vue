<template>
  <div>
    <navbar contentId="#content"/>
    <article id="content">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div v-html="$md.render(article.content)"/>
        <p>{{new Date(article.published_at)}}</p>
      </div>
      <asso-footer></asso-footer>
    </article>
  </div>
</template>

<style>
.container {
  width        : 70%;
  margin-left  : 15%;
  margin-right : 15%;
  margin-top   : 50px;
}

p {
  font-size  : 12px;
  margin-top : 25px;
}
</style>

<script>
export default {
  async asyncData (ctx) {
    const id = ctx.params.id
    return {
      article: await ctx.$strapi.findOne('articles', id),
    }
  },
}
</script>
