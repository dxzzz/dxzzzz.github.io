<template>
    <div class="details">
        <div class="feedback"><a onclick="window.history.go(-1)">返回</a></div>
        <div class="details_head" v-if="detailsData.image">
            <img :src="detailsData.image">
            <p class="details_title">{{detailsData.title}}</p>
            <p class="details_name">{{detailsData.image_source}}</p>
        </div>
        <div class="details_content">
            <div class="main_content" v-html="detailsData.body"></div>
        </div>
    </div>
</template>
<script>
    import {sourceApi} from '../assets/js/common.js'
    export default {
        data() {
            return {
                detailsData:[]
            }
        },
        mounted(){
            this.fatchData(this.$route.params.id);
        },
        methods:{
            fatchData(id){
                let _this = this;
                _this.$http.get(sourceApi+'4/news/'+id).then(function(res){
                    _this.detailsData = res.data;
                    console.log(res.data.body)
                }).catch(function(err){
                    alert(err);
                })
            }
        }
    }
</script>
<style>
    @import url('http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3');
    .details{
        background-color: #fff;
    }
    .feedback{
        position: fixed;
        top: 0;
        left: 0;
        height: 1.44rem;
        background: #252e39;
        width: 100%;
        line-height: 1.44rem;
        padding-left: 0.4rem;
        z-index: 9;
    }
    .feedback a{
        color: #fff;
    }
    .details_head{
        position: absolute;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .details_head img{
        width: 100%;
    }
    .details_head .details_title{
        font-size: 0.56rem;
        color: #fff;
        position: absolute;
        top: 0.1rem;
        line-height: 1rem;
        padding: 0.4rem;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        box-sizing: border-box;
    }
    .details_head .details_name{
        color: #fff;
        position: absolute;
        bottom: 0.4rem;
        right: 0.4rem;
    }
    .main_content{
        padding: 0.1rem 0;
    }
</style>