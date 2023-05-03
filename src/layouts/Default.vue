<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        NavBar,
        Footer
    }
}
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <slot />
    </main>

    <Footer />
</template>

<style lang="scss"></style>
