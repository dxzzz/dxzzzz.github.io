<template>
    <div class="main">
        <div class="list_item" v-for="item in listData.stories">
            <router-link :to="{name:'Details',params:{id:item.id}}">
                <p class="news_pic" v-if="item.images"><img :src="item.images" alt=""></p>
                <p class="news_title">{{item.title}}</p>
            </router-link>
        </div>
        </div>
</template>
<script>
    import {sourceApi} from '../assets/js/common.js'
    export default {
        data () {
            return {
                listData:[]
            }
        },
        mounted () {
            let _this = this;
            _this.$http.get(sourceApi+'4/theme/'+_this.$route.params.id).then(function (res) {
                _this.listData = res.data;
            }).catch(function(err){
                alert(err)
            })
        }
    }
</script>