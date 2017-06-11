<template>
    <div class="main">
            <div class="daily_item" v-for="item in themeData">
                <router-link :to="{name:'DailyList',params:{id:item.id}}">
                    <div class="daily_item_con">
                        <p class="daily_item_title">{{item.name}}</p>
                        <p class="daily_item_brief">{{item.description}}</p>
                    </div>
                </router-link>
            </div>
        </div>
</template>
<script>
    import {sourceApi} from '../assets/js/common.js'
    export default{
        data () {
            return{
                themeData:[]
            }
        },
        mounted(){
           var _this = this;
           _this.$http.get(sourceApi+'4/themes').then(function(res){
                _this.themeData = res.data.others;
           }).catch(function(err){
                alert(err);
           })
        }
    }
</script>
