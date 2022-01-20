<template>
  <div>
    <navbar></navbar>
    tous les articles
    <asso-footer></asso-footer>
  </div>
</template>

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
