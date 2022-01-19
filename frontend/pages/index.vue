<template>
  <div>
    Ici c'est un test
    <Tutorial/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async mounted () {
    console.log(await this.$strapi.find('users'))
  }
}
</script>
