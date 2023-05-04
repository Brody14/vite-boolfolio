<script>
import Blank from '../layouts/Blank.vue';

export default {
    components: {
        Blank,
    }
}

</script>

<template>
    <Blank class="blank">
        <h1> 404 - Page not found</h1>
    </Blank>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.blank {
    height: 100vh;
    background-color: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
