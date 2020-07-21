<template>
    <div>
        <transition name="slide" type="animation">
            <div v-if="error" class="notification is-danger">
                {{ error.message }}
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>

</style>