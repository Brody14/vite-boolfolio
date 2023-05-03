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
        <ul class="project_tec">
            <li class="tec" v-for="tec in project.technologies"> {{ tec ? tec.name : '' }} </li>
        </ul>
        <p class="project_description">Description: {{ project.description ? project.description : 'Not Available' }}</p>
        <a :href="project.url" class="project_url">Visit</a>
    </div>
</template>

<style lang="scss" scoped>
.card-project {
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    padding: 15px;

    &>* {
        margin-bottom: 10px;
    }

    .project_type {
        text-decoration: underline;
    }

    .project_tec {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .tec {
        background-color: rgb(177, 234, 142);
        padding: 2px 5px;
        line-height: 16px;
        font-size: 12px;
        border-radius: 5px;
        color: white;
    }
}
</style>