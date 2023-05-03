<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
  }
}
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';
</style>

