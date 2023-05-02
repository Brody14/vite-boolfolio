<script>

export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    }
}

</script>

<template>
    <div class="card-project">
        <h3 class="project_title">Title: {{ project.title }}</h3>
        <p class="project_type"> {{ project.type ? project.type.name : '' }}</p>
        <ul v-if="project.technologies > 0">
            <li class="project_tec" v-for="tec in project.technologies"> {{ tec ? tec.name : '' }} </li>
        </ul>
        <p class="project_description">Description: {{ project.description ? project.description : 'Not Available' }}</p>
        <a :href="project.url" class="project_url">Visit</a>
    </div>
</template>

<style lang="scss" scoped>
.card-project {
    border: 1px solid black;
    width: 300px;
    padding: 10px;

    &>* {
        margin-bottom: 10px;
    }
}
</style>