<template>
  <UiTopAppBar :content-selector="contentId">
    <template #nav-icon>
      <asso-logo/>
    </template>
    <template #toolbar>
      <UiIconButton icon="home" @click="onHomeClicked"/>
      <UiIconButton icon="face" @click="onFaceClicked"/>
      <UiIconButton icon="article" @click="onArticleClicked"/>
    </template>
  </UiTopAppBar>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
}

hr {
  border: 2px solid black;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#__nuxt #__layout .mdc-button {
  font-size: 20px;
  padding: 25px 50px;
  margin: 25px;
  width: 120px;
}

#__nuxt #__layout .mdc-button:hover {
  background-color: #EB6435;
}
</style>

<script>
import AssoLogo from './AssoLogo.vue'
export default {
  components: { AssoLogo },
  props: {
    contentId: {
      type: String
    }
  },
  methods: {
    onHomeClicked() {
      alert("HOME")
    },
    onFaceClicked() {
      alert("Face")
    },
    onArticleClicked() {
      alert("Article")
    }
  }
}
</script>
