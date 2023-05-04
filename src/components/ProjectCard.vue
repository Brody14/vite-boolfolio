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
        <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">
            <h3 class="project_title">Title: {{ project.title }}</h3>
            <p class="project_type"> {{ project.type ? project.type.name : '' }}</p>
            <ul class="project_tec">
                <li class="tec" v-for="tec in project.technologies"> {{ tec ? tec.name : '' }} </li>
            </ul>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

a {
    color: currentColor;
}

.card-project {
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    height: 200px;
    padding: 15px;

    .project_title {
        margin-bottom: 20px;
    }

    .project_type {
        text-decoration: underline;
        line-height: 30px;
    }

    .project_tec {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .tec {
        background-color: $badge_bg;
        padding: 2px 5px;
        line-height: 16px;
        font-size: 12px;
        border-radius: 5px;
        color: white;
    }
}
</style>