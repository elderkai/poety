<template>
  <div class="sd">
    <div class="header"></div>
    <div class="title">古诗词生成器
      <span @click="$router.push('/settings')" class="settings"><img class="settings-img" src="../../static/imgs/设置.png" alt=""></span>
    </div>
    <span>生成数量：</span><input type="number" max="11" v-model="num">
    <br>
    <div @click="getPoetys" class="btn">一键生成古诗词</div>
    <br>
    <div class="poems">
      <div class="poem-item" v-for="(poet,index) in poety" :key="index">{{poet}}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
        datas:{
           array:"朱砂|天下|杀伐|人家|韶华|风华|繁华|血染|墨染|白衣|素衣|嫁衣|倾城|孤城|空城|旧城|旧人|伊人|心疼|春风|古琴|无情|迷离|奈何|断弦|焚尽|散乱|陌路|乱世|笑靥|浅笑|明眸|轻叹|烟火|一生|三生|浮生|桃花|梨花|落花|烟花|离殇|情殇|爱殇|剑殇|灼伤|仓皇|匆忙|陌上|清商|焚香|墨香|微凉|断肠|痴狂|凄凉|黄梁|未央|成双|无恙|虚妄|凝霜|洛阳|长安|江南|忘川|千年|纸伞|烟雨|回眸|公子|红尘|红颜|红衣|红豆|红线|青丝|青史|青冢|白发|白首|白骨|黄土|黄泉|碧落|紫陌",
           array2: "情深缘浅|情深不寿|莫失莫忘|阴阳相隔|如花美眷|似水流年|眉目如画|曲终人散|繁华落尽|不诉离殇|一世长安",
           array3:"xx，xx，xx了xx。|xxxx，xxxx，不过是一场xxxx。|你说xxxx，我说xxxx，最后不过xxxx。|xx，xx，许我一场xxxx。|一x一x一xx，半x半x半xx。|你说xxxxxxxx，后来xxxxxxxx。|xxxx，xxxx，终不敌xxxx。"
        },
      array: "",
      array2: "",
      array3: "",
      poety: [],
      num: 10
    };
  },
  methods: {
    getData() {
        if(this.data.array){
            this.datas=this.data
        }else{
            this.$store.commit("CHANGE_DATA", this.datas);
        }
      this.array = this.datas.array.split(
        "|"
      );
      this.array2 = this.datas.array2.split(
        "|"
      );
      this.array3 = this.datas.array3.split(
        "|"
      );
    },
    setNum1() {
      let num = Math.ceil(Math.random() * this.array.length - 1);
      return num;
    },
    setNum2() {
      let num = Math.ceil(Math.random() * this.array2.length - 1);
      return num;
    },
    setNum3() {
      let num = Math.ceil(Math.random() * this.array3.length - 1);
      return num;
    },
    getPoetys() {
      this.poety = [];
      if(this.num>10000){this.num=10000}
      for (var i = 0; i < this.num; i++) {
        this.setPoem({});
      }
    },
    setPoem(value) {
      try {
        let str = "";
        let sts = "";
        sts = this.array2[this.setNum2()];
        if (typeof value == "object") {
          str = this.array3[this.setNum3()].replace("xxxx", sts);
        } else {
          str = value.replace("xxxx", sts);
        }
        if (str.indexOf("xxxx") > -1) {
          this.setPoem(str);
        } else {
          this.setPoem2(str);
        }
      } catch (err) {}
    },
    setPoem2(value) {
      try {
        let str = "";
        let sts = "";
        sts = this.array[this.setNum1()];
        if (value != undefined) {
          str = value.replace("xx", sts);
          if (str.indexOf("xx") > -1) {
            this.setPoem2(str);
          } else {
            if (str.indexOf("x") > -1) {
              this.setPoem3(str);
            } else {
              this.poety.push(str);
            }
          }
        }
      } catch (err) {}
    },
    setPoem3(value) {
      let str = "";
      let sts = "";
      let arr = this.array[this.setNum1()].split("");
      sts = arr[Math.ceil(Math.random() * arr.length - 1)];
      try {
        if (value != undefined) {
          str = value.replace("x", sts);
        }
        if (str.indexOf("x") > -1) {
          this.setPoem3(str);
        } else {
          this.poety.push(str);
        }
      } catch (err) {}
    }
  },
  created() {
    this.getData();
  },
    computed: {
    ...mapState(["data"])
    //   this.$store.commit("CHANGE_DATA", data);
  },
};
</script>

<style lang="scss" scoped>
.sd {
  // font-size: 1rem;
  .btn {
    background: green;
    display: inline-block;
    padding: 5px 12px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    margin-top:.2rem;
  }
}
.poems{
    max-height: calc(100vh - 100px);
    overflow: scroll;
    margin-top:.2rem;
}
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
.settings{
  position: absolute;
  right:.2rem;
    width:.8rem;
    height:.8rem;
    top:.05rem;
  .settings-img{
    width:.8rem;
    height:.8rem;
  }
}
.sd{
  max-height:100vh;
  overflow: hidden;
}
</style>