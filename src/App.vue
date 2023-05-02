<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(res => {
          const results = res.data.results
          this.projects = results
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
    <div class="projects">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
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

.projects {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
}
</style>

