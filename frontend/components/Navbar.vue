<template>
  <div>
    <header>
      <AssoLogo></AssoLogo>
      <nav>
        <UiButton raised>Home</UiButton>
        <UiButton raised>Blog</UiButton>
        <UiButton raised>Contact</UiButton>
      </nav>
    </header>
    <hr>
  </div>
</template>

<style>
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



