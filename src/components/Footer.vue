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

<style lang="scss" scoped>
.main-footer {
    padding: 20px;
    text-align: center;
}
</style>