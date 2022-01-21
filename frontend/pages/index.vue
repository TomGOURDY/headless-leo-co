<template>
  <div>
    <navbar></navbar>
    <section class="hero" id="intro">
      <h2 class="section-title">
        Léo&Co une <span class="text-primary">association</span> qui oeuvre pour
        les <span class="text-primary">animaux</span> et les défends
      </h2>
    </section>
    <!-- End Section -->

    <!-- Section -->
    <section class="about-us">
      <header class="about-us__intro">
        <h2 class="section-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sim
        </h2>
      </header>
      <!-- about-us__body -->
      <div class="about-us__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          varius eros, eu congue eros. Sed gravida quis nisl ac dapibus. Morbi
          convallis magna dictum mi imperdiet hendrerit. Integer hendrerit
          sapien eget leo rutrum lobortis id sit amet tellus. Etiam ac dignissim
          quam. Nullam cursus nunc et feugiat ultrices. Praesent imperdiet
          consequat viverra
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          varius eros, eu congue eros. Sed gravida quis nisl ac dapibus. Morbi
          convallis magna dictum mi imperdiet hendrerit. Integer hendrerit
          sapien eget leo rutrum lobortis id sit amet tellus. Etiam ac dignissim
          quam. Nullam cursus nunc et feugiat ultrices. Praesent imperdiet
          consequat viverra
        </p>
      </div>
      <!-- End about-us__body -->
    </section>

    <!-- Section -->
    <div class="container" id="teammate">
      <!-- <header>
          <h2 class="section-title text-primary">Our magnificient team</h2>
        </header> -->

      <!-- card -->
      <div class="card">
        <div class="bg-image">
          <img src="../static/bg-profil.jpg" alt="background image" />
        </div>
        <div class="pic">
          <img src="../static/animal1.jpeg" alt="" />
        </div>
        <div class="info">
          <h3>Un chien bizarre</h3>
          <span>Web designer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            vulputate tortLorem ipsum dolor sit amet, consectetur adipiscing
            elit. In non vulputate tort
          </p>
        </div>
      </div>
      <!-- End card -->
      <!-- card -->
      <div class="card">
        <div class="bg-image">
          <img src="../static/bg-profil.jpg" alt="background image" />
        </div>
        <div class="pic">
          <img src="../static/animal2.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Tema le ponay</h3>
          <span>Web designer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            vulputate tortLorem ipsum dolor sit amet, consectetur adipiscing
            elit. In non vulputate tort
          </p>
        </div>
      </div>
      <!-- End card -->
      <!-- card -->
      <div class="card">
        <div class="bg-image">
          <img src="../static/bg-profil.jpg" alt="background image" />
        </div>
        <div class="pic">
          <img src="../static/animal3.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Quoi de neuf docteur</h3>
          <span>Web designer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            vulputate tortLorem ipsum dolor sit amet, consectetur adipiscing
            elit. In non vulputate tort
          </p>
        </div>
      </div>
      <!-- End card -->
      <!-- card -->
      <div class="card">
        <div class="bg-image">
          <img src="../static/bg-profil.jpg" alt="background image" />
        </div>
        <div class="pic">
          <img src="../static/animal4.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Bob Sinclair</h3>
          <span>Web designer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            vulputate tortLorem ipsum dolor sit amet, consectetur adipiscing
            elit. In non vulputate tort
          </p>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- End Section -->
    <asso-footer> </asso-footer>
  </div>
</template>

<style scoped>
.hero {
  background-color: #555;
  background-image: url(../static/background-pic.jpg);
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  color: #e74c3c;
  text-align: center;
  padding-top: 18em;
}

.about-us {
  background: #eb6435;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 0;
}

.about-us__intro {
  background-image: url(../static/panda.jpg);
  background-size: cover;
  padding: 5em 2em;
  justify-content: center;
  text-align: right;
}

.about-us__body {
  padding: 3.5em 1em 3em;
  justify-content: center;
}

div {
  margin: 0;
  text-align: center;
}

section {
  padding: 10em 1em;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

h2,
h3 {
  line-height: 0.8;
}

.section-title {
  font-size: 3rem;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #dbd8d8;
  padding: 4em 1em;
}

.card {
  height: 500px;
  width: 290px;
  margin: 20px;
  box-shadow: 0 3px 5px #000;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  background-color: #6e7b80;
}

.card .bg-image img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0%, 100% 70%, 45% 100%, 0 70%);
}

.card .pic img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 10px solid #222;
  margin-top: -90px;
  position: relative;
}

.card .info h3 {
  color: #f0f0f0;
  font-size: 20px;
  padding: 10px 0;
}

.card .info span {
  font-size: 15px;
  color: #e74c3c;
}

.card .info p {
  font-size: 13px;
  padding: 10px 20px;
  color: #9999;
}

.text-primary {
  color: #e74c3c;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import AssoFooter from "../components/AssoFooter.vue";
export default {
  components: { Navbar, AssoFooter },
  async asyncData(ctx) {
    return {};
  },
};
</script>
