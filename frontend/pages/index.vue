<template>
  <div>
    Ici c'est un test
    <Tutorial/>
    {{ articles }}
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData (ctx) {
    const articles = (await ctx.$strapi.find('articles'))
    return { articles }
  },
}
</script>
