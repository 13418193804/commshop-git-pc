<template>
  <div class="" style="background-color:#FFFFFF;">


    <div style="padding: 30px 15px;" >

      
      <!-- <el-row :gutter="10" type="flex" justify="start" class="flex-warp-justify">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"  v-for="(item,index) in goodsList" :key="index" 
      > -->
 <div class="flex flex-align-center flex-warp-justify"
        > 
            <div v-for="(item,index) in goodsList" :key="index" >


        <div class="flex flex-align-center" style="width:250px;margin:10px;" @mouseover="over(index)"  @mouseout="out(index)"  
        > 
        <!-- <div class="flex flex-align-center" style="width:200px;margin:10px;"  
        >  -->
          <div style="position: relative;width: 100%;"  @click="goProductDetail(item.goodsId)">
            <div v-if="index==classindex"  style="z-index: 2;position: absolute;top:-10px;right:-20px;">
              <img src="../../assets/image/删除按钮.png" style="width:30px;height:30px;cursor: pointer;" @click.stop="favdelete(item)"/>
            </div>
            <div  class="flex flex-v flex-pack-center collImg">
              <div style="    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 300px;
    width: 100%;">
              <img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;vertical-align: middle;"/>
              </div>
              <div style="width:100%;text-align: center;overflow: hidden;color:#a3a3a3;font-size:16px;text-overflow: ellipsis;white-space: nowrap;height:40px;line-height:45px;background: hsla(0,0%,81%,.3);">{{item.jingle}}</div>
            </div>
            <div style="width: 100%;" class="textLabel"><span class="textLabel" style="color:#000000;font-size:15px;">{{item.goodsName}}</span></div>
            <div style="width: 100%;" class="textLabel"> <span class="textLabel marketPrice" >
               <span v-if="item.goodsType === 'RETAIL'">￥</span>{{item.marketPrice.toFixed(2)}}<span v-if="item.goodsType === 'SCORE'">积分</span>
             </span></div>
          </div>
        </div>
      <!-- </el-col> -->
      <!-- <el-col> -->
          <div v-if="goodsList.length == 0">
              <div style="text-align:center;margin-top:50px;">暂无收藏</div>
          </div>


    </div>
    </div>


        <!-- </el-col>
    </el-row> -->
    </div>




  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
import comhead from "../../components/Comhead.vue";

@Component({
  components: { comhead },
  mixins: [mixin]
})
export default class collection extends Vue {
  goodsList = [];
  checkedGoods = [];
  isShow = false;
  classindex=999;
  goGoodsId = "";
  toggle() {
    this.isShow = !this.isShow;
  }
  over(index){
    this.classindex=index
  }
  out(index){
    this.classindex=NaN;    
  }
  goDetails(){
    console.log('开始跳转')
    
  }
  favdelete(item) {
    Vue.prototype.$reqFormPost(
      "/fav/delete",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        goodsIds: item.goodsId
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        this.getProductList();
      }
    );
  }
  allchange() {
    if (this.goodsList.length == this.checkedGoods.length) {
      this.checkedGoods = [];
    } else {
      let result = [];
      this.goodsList.forEach((item, index) => {
        console.log();
        result.push(item.goodsId);
      });
      this.checkedGoods = result;
    }
  }
  getProductList() {
    Vue.prototype.$reqFormPost1(
      "/fav/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        page: 0,
        pageSize: 20
      },
      res => {
        if (res.returnCode != 200) {
                  this["$Message"].warning(res.message);
          return;
        }
        console.log("收藏", res.data.goodsList);
        this.goodsList = res.data.goodsList;
      }
    );
  }

  goProductDetail(goodsId) {
    this.$router.push({
      path: "/productdetail",
      query: {
        goodsId: goodsId
      }
    });
  }

  handlePX(CssName, PxNumber) {
    return (
      CssName +
      ":" +
      this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /
        750 *
        PxNumber +
      "px;"
    );
  }

  mounted() {
    this.getProductList();
    console.log("收藏页面");
    this.$emit('selectMenu',{
      name: '我的收藏',
      url:'/collection',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
// .outclass{
//   border:1px solid #EAEAEA;
//   border-radius: 4px;
//   cursor: pointer;
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -ms-transform: scale(1);
//   -webkit-transition: -webkit-transform 0.4s;
//   transition: transform .4s;
// }
// .overclass{
//   // box-shadow:0px 0px 5px 5px #F3F3F3;
//   // border:1px solid #FFCF63;
//   // border-radius: 5px;
//   // height:260px;
//   box-shadow:0px 0px 5px 5px #F3F3F3;
//   border:1px solid #FFCF63;
//   border-radius: 5px;
//   margin-bottom: 15px;
//   -webkit-transform: scale(1.05);
//   transform: scale(1.05);
//   -ms-transform: scale(1.05);
// }

.collImg {
  margin: 10px 0px;
  border:1px solid #EAEAEA;
  border-radius: 4px;
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform .4s;
}
.collImg:hover{
  box-shadow:0px 0px 5px 5px #F3F3F3;
  border:1px solid #FFCF63;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -ms-transform: scale(1.05);
}
</style>