<script>
import axios from 'axios'

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(res => {
          console.log(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.fetchProjects()
  }
}

</script>

<template>
  <div class="container">
    <h1 class="title">Projects</h1>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';

.title {
  text-align: center;
}

.container {
  padding: 20px;
}
</style>

