<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      links: [],
      currentPage: 1,
      lastPage: 0
    }
  },
  methods: {
    fetchProjects(page) {
      axios.get('http://127.0.0.1:8000/api/projects', {
        param: {
          page: page
        }
      })
        .then(res => {
          const results = res.data.results
          this.projects = results.data
          this.links = results.links
          this.currentPage = results.current_page
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProjectByUrl(url) {
      axios.get(url)
        .then(res => {
          const results = res.data.results
          this.projects = results.data
          this.links = results.links
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.fetchProjects(this.currentPage)
  }
}

</script>

<template>
  <div class="container">
    <h1 class="title">Projects</h1>
    <div class="projects">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
    <div class="pagination-wrapper">
      <ul class="pagination">
        <li :class="link.active ? 'active' : ''" v-for="link in links" :key="link.label" v-html="link.label"
          @click="fetchProjectByUrl(link.url)"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';

.container {
  padding: 20px;
}

.title {
  text-align: center;
}

.projects {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
}

.pagination {
  display: flex;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
}

.active {
  color: rgb(68, 203, 68);
}
</style>

