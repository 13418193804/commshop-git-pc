<template>
  <div class="alter-container">
  
   <div class="toplabel flex   flex-pack-center">
        <div class="flex flex-end-justify flex-align-center" style="height:100%;width:60%;color:#fff;font-size:14px;">
         
          <div v-if="$store.getters[MutationTreeType.TOKEN_INFO].token">
          {{$store.getters[MutationTreeType.TOKEN_INFO].loginName}}
          <span>退出</span>
          </div>
          <div class="contentBox borderleft " @click="changeLoginModel()" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
          <span>登录</span>
          </div>
              <div class="contentBox borderleft " v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
          <span>注册</span>
          </div>
          

    <div class="contentBox borderleft ">
          <span>我的订单</span>
          </div>

              <div class="contentBox borderleft ">
          <span>消息</span>
          </div>


              <div class="contentBox borderleft ">
          <span>在线客服</span>
          </div>

              <div class="contentBox borderleft borderright">
          <span>APP</span>
          </div>
          

        </div>

   </div>
   <div style="height:52px;"></div>







   <div class="dialog  flex  flex-align-center flex-pack-center" v-if="loginModel">
      <div style="height:400px;width:400px;background-color:#fff;">

          <div style="text-align:center;padding:20px;">
            <img src="../assets/image/LOGO.png" style="width:80px;"/>
          </div> 
          
          <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input placeholder="请输入手机号码" v-model="loginName" style="border:0;width:100%;"/>
     </div>       
          </div>
          <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input  placeholder="请输入密码" type="password" v-model="password"  style="border:0;width:100%;"/>
          </div>
          </div>
<div class="flex  flex-align-center flex-pack-center" style="padding:0 30px">
      <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;"  class="flex-1" @click="doLogin">登录</van-button>
</div>
        <div class="flex  flex-align-center flex-pack-center">
          <div @click="gosign()" class="flex  flex-align-center flex-pack-center">
            <img src="../assets/image/新用户注册.png" style="width:20px">
            <span  style="margin:0 5px">注册新用户</span>
          </div>
          <div  style="background-color:#A3A3A3;margin:5px 15px;width:1px;height:20px;" ></div>
          <div @click="goforget()" class="flex  flex-align-center flex-pack-center">
            <img src="../assets/image/忘记密码.png" style="width:20px;">
            <span  style="margin:0 5px">忘记密码?</span>
          </div>
        </div>
      </div>
   </div>




   
<div class=" flex   flex-pack-center">
       <div  style="width:60%;">
         <div style="" class="flex flex-pack-justify flex-align-center">
            <img  src="../assets/image/logo拷贝.png"/>
<div class="flex flex-align-center flex-1 flex-end-justify">
 
  <div class="flex flex-align-center" style="border:1px #EAEAEA solid;">
    <input  style="border:none;margin:0 10px" placeholder="搜索商品"/>
    <div style="width:30px;height:30px;background-color:#F4C542" class="flex flex-align-center flex-pack-center">
  <img src="../assets/image/放大镜.png"/>
    </div>
  </div>
  <img src="../assets/image/登录.png" @click="goCenter" style="margin:0 10px"/>
  <img src="../assets/image/购物车.png"/>
</div>
<div> 
</div>
         </div>

     <!-- <div style="height:50px;background-color:red">123</div> -->
<van-tabs :active="active" @click="changeTab" class="index_tabs flex-1" style="width:100%;" >
<!-- :style="$route.query.active?'margin-top:-45px':''" -->
  <van-tab v-for="(item,index) in indexList" :title="item.pageName" :key="index" >

<div v-if="active == index">
        <div v-for="(items,childrenIndex) in item.children" :key="childrenIndex" >
              <!-- 轮播图 -->
            <div v-if="items.componentType === 'COMPONENT_TYPE_SCROLL_HEADER'">
     <el-carousel :interval="5000" arrow="always" style="width:100vw;    margin-left: -20vw;">
    <el-carousel-item v-for="(image, imageIndex) in items.items" :key="imageIndex">
                       <img v-lazy="image.itemImgUrl" style="width:100%;" @click="goActionType(image.actionType,image.actionValue)"/>
    </el-carousel-item>
  </el-carousel>
            </div>
    
      <div v-if="items.componentType === 'COMPONENT_TYPE_GOODS_TAG'">
        <div style="height:10px;background-color:#f7f7f7;"></div>


<div style="margin:20px 0">

<div style="    text-align: center;border-bottom: 1px solid #e5e5e5;
    font-size: 28px;">
{{items.name}}
  </div>
      <div class="goodsBody" v-if="items.columnNum ===1" >
                  <div v-for="(goods,goodsIndex) in items.items" @click="goDetail(goods.goodsId)" class="flex" style="width:50%;border-bottom: 1px solid #e5e5e5;">
      <div class="flex" style="width:-webkit-fill-available;   padding:10px;">
                      <div class="flex flex-pack-center flex-align-center" style="width:200px;overflow:hidden;">
                        <img v-lazy="goods.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
                      </div>
                      <div style="padding:10px">

             <div >
                          <img src="../assets/image/新品特价.png" v-if="goods.isBargain"    style="vertical-align: middle;"/>
                          <span class="textLabel" style="color:#000000;font-size:15px">{{goods.goodsName}}</span>
                        </div>
                        <div class="textLabel"  style="color:#A3A3A3;" >{{goods.jingle}}</div>

                          <div>
                          <span style="color:#E05459;font-size:20">￥{{goods.marketPrice}}</span>
                          <span style="color:#C5C4C4;text-decoration:line-through;font-size:14px" >原价:{{goods.labelPrice}}</span>
                        </div>

<van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;"  @click.stop="doChangeModel(goods.goodsId)">立即抢购</van-button>

                      </div>
                      </div>
                   </div>
                   </div>
                   </div>

          </div>

            </div>
            </div>
      </van-tab>
  </van-tabs>
     <!-- <div style="height:50px;background-color:red">123</div> -->

       </div>



</div>




  </div>
  <!-- end container -->
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component
export default class Comhead extends Vue {
  @Prop({ required: false })
  table: boolean;
  @Prop({ required: false })
  router: boolean;

  @Watch("table", { deep: true })
  watchCount(newVal, oldVal) {
    console.log(this.active);
    // this.changeTab()
  }
  type = "H5";
  leftScale = "1.5";
  textindex = 1;
  rightClick() {
    this.$emit("rightClick");
  }

goCenter(){
  this.$router.push('/center')
}
  loginModel =false;
  changeLoginModel() {
    this.loginModel = !this.loginModel;
  }
  loginName = "13418193804";
  password = "5164659";
  doLogin() {
    if (this.loginName == "" || this.password == "") {
      return;
    }
    Vue.prototype.$reqFormPost1(
      "/auth/user/login",
      {
        loginName: this.loginName,
        password: require("crypto")
          .createHash("md5")
          .update(this.loginName + this.password)
          .digest("hex")
      },
      res => {
        if (res.returnCode != 200) {
          return;
        }
        console.log(res.data);
        this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, res.data);
        localStorage.setItem(
          Vue.prototype.MutationTreeType.TOKEN_INFO,
          JSON.stringify(res.data)
        );
      }
    );
  }
  indexList = [];
  active = "0";

  changeTab(active) {
    if (active !== "-1" && this.$route.path != "/") {
      this.$router.replace({
        path: "/",
        params: {
          active: active
        }
      });
      return;
    }
    this.active = active;

    if (!this.indexList[active].children) {
      Vue.prototype.$reqFormPost1(
        "/page/info",
        {
          pageId: this.indexList[active].pageId
        },
        res => {
          if (res == null) {
            console.log("网络请求错误！");
            return;
          }
          if (res.returnCode != 200) {
            return;
          }
          (<any>Object).assign(this.indexList[active], {
            children: res.data
          });
          this.indexList.push();
          if (this.indexList[active].catId) {
            Vue.prototype.$reqFormPost1(
              "/user/goods/list",
              {
                catId: this.indexList[active].catId
              },
              res => {
                if (res.returnCode != 200) {
                  return;
                }
                this.indexList[active].children.push({
                  componentType: "COMPONENT_TYPE_GOODS_TAG",
                  columnNum: 1,
                  items: res.data.goodsList
                });

                this.indexList.push();
              }
            );
          }
        }
      );
    } else {
    }
  }
  initIndex() {
    Vue.prototype.$reqUrlGet1("/page/list", {}, res => {
      if (res.returnCode !== 200) {
        console.log("网络请求错误！");
        return;
      }

      this.indexList = res.data;

      if (this.indexList.length > 0) {
        this.changeTab(this.active);
      }
    });
  }
  mounted() {
    this.table ? (this.active = "-1") : "";
    (this.$route.params.active || "") != ""
      ? (this.active = this.$route.params.active)
      : "";
    this.$route.params.active = "";
    console.log(this.$route);
    this.initIndex();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vhead {
  border-bottom: solid 1px #e5e5e5;
  justify-content: flex-end;
  height: 52px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;

  top: 0;
  padding: 0px;
  width: 100%;
  max-width: 640px;
  color: #101010;
}
.baseLine {
  width: 100%;
  height: 52px;
  margin-top: 0px;
  color: white;
}
.bodyContent {
  border: 1px #d2d2d2 solid;
  display: flex;
  border-radius: 6px;
  font-size: 15px;
}
.toplabel {
  z-index: 999;
  background-color: #212426;
  height: 52px;
  width: 100%;
  position: fixed;
  top: 0;
}
.contentBox {
  min-width: 65px;
  padding: 0 20px;
  text-align: center;
}
.borderleft {
  border-left: 1px #fff solid;
}
.borderright {
  border-right: 1px #fff solid;
}
.dialog {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #0000007f;
  height: 100vh;
}
.goodsBody {
  width: -webkit-fill-available;
  display: flex;
  flex-wrap: wrap;
}
.goodsItem {
  width: 50%;
}
</style>