<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 sidePanel">
                <app-left-panel></app-left-panel>
            </div>
            <div class="col-md-offset-2 col-md-10" v-if="!exactItemFlag">
                <app-info-panels v-for="item in dataArray" :item="item" class="col-sm-4" ></app-info-panels>
                <div class="pagination col-sm-10" v-if="dataArray.length>0">
                    <button class="btn btn-default" @click="checkflagAndDate(prevPage)" :disabled="!pagePrevFlag">Prev</button>
                    <button class="btn btn-default" @click="checkflagAndDate(nextPage)" :disabled="!pageNextFlag">Next</button>
                </div>
            </div>
            <div class="col-md-offset-2 col-md-10" v-else>
                <div class="col-md-2 returnButton">
                    <a class="fa fa-arrow-left" @click="returnToPages"></a>
                </div>
                <app-exact-item class="col-md-6 col-md-offset-3" :item="currentItem"></app-exact-item>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import infoPanels from './InfoPanels.vue';
    import exactItem from './ExactItem.vue';
    import leftPanel from '../addPanels/leftPanel.vue';

    export default {
        methods: {
            ...mapActions([
                'checkflagAndDate',
                'returnToPages'
            ])
        },
        computed: {
            ...mapGetters([
                'dataArray',
                'nextPage',
                'prevPage',
                'pageNextFlag',
                'pagePrevFlag',
                'exactItemFlag',
                'currentItem'
            ])
        },
        components: {
            appInfoPanels: infoPanels,
            appLeftPanel: leftPanel,
            appExactItem: exactItem
        }
    }

</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    .col-sm-4{
        margin:10px 60px;
    }
    .pagination{
        text-align:center;
        font-size:30px;
        .btn{
            margin:0 10px;
        }
    }
    .sidePanel{
        position:absolute;
    }
    .returnButton{
        position:relative;
        .fa{
            margin:50% 40%;
            position:absolute;
            font-size:50px;
            color: $yellow;
        }
    }
</style>
