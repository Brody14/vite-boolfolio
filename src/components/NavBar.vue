<script>
</script>

<template>
    <nav class="header__nav">
        <ul class="header__menu">
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.header__nav {
    padding: 30px;

    .header__menu {
        display: flex;
        gap: 20px;
    }
}
</style>