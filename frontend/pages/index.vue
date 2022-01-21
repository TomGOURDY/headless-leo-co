<template>
    <div>
      <navbar></navbar>

      <asso-footer></asso-footer>
  </div>
</template>

<style>

</style>

<script>
import Navbar from '../components/Navbar.vue'
import AssoFooter from '../components/AssoFooter.vue'
export default {
  components: { Navbar , AssoFooter },
  async asyncData (ctx) {
    return {  }
  },
}
</script>
