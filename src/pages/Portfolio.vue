<script>
import Projects from '../components/Projects.vue'
import DefaultLayout from '../layouts/Default.vue';

export default {
    components: {
        Projects,
        DefaultLayout
    }
}

</script>

<template>
    <DefaultLayout>
        <div class="container">
            <Projects />
        </div>
    </DefaultLayout>
</template>

<style lang="scss"></style>
