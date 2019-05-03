<template>
    <div class="itemInfo" :data-id="item.url" @click="showExactItem(item.url)">
        <!--Planets-->
        <h3 v-if="item.name">{{item.name}}</h3>
        <p v-if="item.terrain">Terrain: {{item.terrain}}</p>
        <p v-if="item.diameter">Diameter: {{item.diameter}}</p>
        <p v-if="item.climate">Climate: {{item.climate}}</p>

        <!--Films-->
        <h3 v-if="item.title">{{item.title}}</h3>
        <p v-if="item.producer">Producer: {{item.producer}}</p>
        <p v-if="item.director">Director: {{item.director}}</p>

        <!--Species-->
        <p v-if="item.language">Language: {{item.language}}</p>
        <p v-if="item.average_height">Height: {{item.average_height}} sm</p>
        <p v-if="item.average_lifespan">Lifespan: {{item.average_lifespan}} years</p>

        <!--Starships && Vehicles-->
        <p v-if="item.vehicle_class">Class: {{item.vehicle_class}}</p>
        <p v-if="item.starship_class">Class: {{item.starship_class}}</p>
        <p v-if="item.model">Model: {{item.model}}</p>
        <p v-if="item.consumables">Consumables: {{item.consumables}}</p>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default{
        props: ['item'],
        methods: {
            ...mapActions([
                'showExactItem'
            ])
        }
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;
    .itemInfo{
        border: 1px solid $yellow;
        border-radius: 5px;
        padding: 5px 10px;
        margin:10px;
        background-color:$gray;
        color:white;
    }
</style>
