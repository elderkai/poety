<template>
    <div class="sd">
        <div class="header"></div>
        <div class="title">
            <span  class="goback" @click="$router.push('/')"><img class="goback-icon" src="../../static/imgs/返回.png" alt=""></span>
            故诗词生成器</div>
        <div class="title-item">两个字的词：</div>
        <div class="setting">
            <textarea @keyup="setData()" class="text-tarea" v-model="data.array"  name="" id="" cols="50" rows="10"></textarea>
        </div>
        <div class="title-item">四个字的词：</div>
        <div class="setting">
            <textarea class="text-tarea" v-model="data.array2"  name="" id="" cols="50" rows="3"></textarea>
        </div>
        <div class="title-item">模板：</div>
        <div class="setting">
            <textarea class="text-tarea" v-model="data.array3"  name="" id="" cols="50" rows="5"></textarea>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        data(){
            return{ 
            }
        },
        methods:{
            setData(){
                try{
                    this.$store.commit("CHANGE_DATA", this.data);
                }catch(err){}
            }
        },
        created(){
        },
         computed: {
    ...mapState(["data"])
  },
  watch:{
 
  }
    }
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height:.8rem;
   background: blue;
  opacity: .5;
}
.title{
    position: relative;
  font-size:.5rem;
  font-weight: 800;
  background: blue;
  opacity: .5;
  color:#fff;
  height:.9rem;
  font-family: 'Courier New', Courier, monospace;
  line-height: .9rem;
  margin-bottom:.2rem;
}
.text-tarea{
    border:none;
    border-bottom: 1px solid #999;
    margin-bottom:.2rem;
}
.title-item{
    text-align: left;
    margin-left:1.3rem;
    margin-bottom:.2rem;
    padding-bottom:.2rem;
}
.goback{
    position: absolute;
    left:.2rem;
    top:.1rem;
    .goback-icon{
        width:.8rem;
        height:.8rem;
    }
}
.sd{
  max-height:100vh;
  overflow: hidden;
}
</style>