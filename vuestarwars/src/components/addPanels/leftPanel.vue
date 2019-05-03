<template>
    <div class="container col-md-12">
        <nav>
            <ul class="nav nav-stacked">
                <li>
                    <a href="#" @click="checkflagAndDate('planets')">Planets</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('films/')">Films</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('people')">People</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('species')">Species</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('starships')">Starships</a>
                </li>
                <li>
                    <a href="#" @click="checkflagAndDate('vehicles')">Vehicles</a>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
    import {mapActions} from 'vuex';

    export default{
        methods:{
            ...mapActions([
                'checkflagAndDate'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;
    .container{
        padding:0;
        .nav{
            margin:0 0 0 5px;
            padding:0;
            text-align:center;
            font-size:20px;
            :active, :hover{
                background-color: white;
            }
            li {
                background-color:$gray;
                border-radius:3px;
                margin:5px 0;
                color:$yellow;
                padding: 5px 0px;
                :hover, :active{
                    color: $darkBlue;
                    font-weight: bold;
                }

                a {
                    color:$yellow;
                    :hover, :active {
                        font-weight: bold;
                        color: $darkBlue;
                    }
                }
            }
        }
    }

</style>