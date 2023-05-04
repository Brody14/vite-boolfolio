<script>
import DefaultLayout from '../layouts/Default.vue';
import axios from 'axios';

export default {
    components: {
        DefaultLayout
    },
    data() {
        return {
            project: null,
            loading: true
        }
    },
    props: ['slug'],
    methods: {
        fetchProject(slug) {
            this.loading = false
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
                .then(res => {
                    const results = res.data;
                    this.project = results.project;
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    this.loading = true
                })
        }
    },
    created() {
        this.fetchProject(this.slug)
    }
}
</script>

<template>
    <DefaultLayout>
        <template v-if="loading">
            <div class="container">
                <h1 class="project_title"> {{ project.title }}</h1>
                <p class="project_type"> {{ project.type ? project.type.name : '' }}</p>
                <ul class="project_tec">
                    <li class="tec" v-for="tec in project.technologies"> {{ tec ? tec.name : '' }} </li>
                </ul>
                <p class="project_description">
                    <strong> Description:</strong>
                    {{ project.description ? project.description : 'Not Available' }}
                </p>
                <a :href="project.url" class="project_url">Url</a>
            </div>

            <div class="container">
                <router-link :to="{ name: 'portfolio' }">
                    <button class="btn">Back</button>
                </router-link>
            </div>
        </template>
    </DefaultLayout>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.project_title {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 10px;
}

.project_type {
    text-decoration: underline;
    text-align: center;
    line-height: 30px;
}

.project_tec {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 40px;
}

.tec {
    background-color: $badge_bg;
    padding: 2px 5px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 5px;
    color: white;
}

.project_description {
    margin-bottom: 20px;
}

.project_url {
    line-height: 40px;
}
</style>