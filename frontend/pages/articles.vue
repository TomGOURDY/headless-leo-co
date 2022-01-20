<template>
  <div>
    <navbar></navbar>
    tous les articles
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  async asyncData (ctx) {
    return {  }
  },
}
</script>
