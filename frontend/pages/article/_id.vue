<template>
  <div>
    <navbar contentId="#content"></navbar>
    <article id="content">
      <div class="container">
          <h1>Ici c'est le titre</h1>
          <div>Ici c'est le markdown</div>
          <p>Ici c'est la date de publication</p>
      </div>
    </article>
    <asso-footer></asso-footer>
  </div>
</template>

<style>
.container {
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 50px;
}

p {
  font-size: 12px;
  margin-top: 25px;
}
</style>

<script>
export default {
  async asyncData (ctx) {
    return {  }
  },
}
</script>
