<template>
    <div class="container-fluid">
        <div class="row">
            <app-list-items></app-list-items>
        </div>
    </div>
</template>

<script>
    import items from './ListItems.vue';

    export default {
        components: {
            appListItems: items
        }
    }
</script>

<style scoped lang="scss">

</style>
