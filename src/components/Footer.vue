<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}

</script>

<template>
    <footer class="main-footer">
        <p> Copyright &copy; {{ currentYear }} Brody </p>
    </footer>
</template>

<style lang="scss">
.main-footer {
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>