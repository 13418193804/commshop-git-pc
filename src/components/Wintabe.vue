<template>
  <div class="alter-container">
  
   <div class="toplabel flex   flex-pack-center">
        <div class="flex flex-end-justify flex-align-center" style="height:100%;width:1200px;color:#fff;font-size:14px;">
            <div v-if="$store.getters[MutationTreeType.TOKEN_INFO].token" class="contentBox">
            {{$store.getters[MutationTreeType.TOKEN_INFO].loginName}}
              <span @click="loginOut()">退出</span>
            </div>
            <div class="contentBox borderleft " @click="changeLoginModel('login')" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
              <span>登录</span>
            </div>
            <div class="contentBox borderleft " @click="changeLoginModel('sign')" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
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
      <div style="height:400px;width:380px;background-color:#fff;position: relative;">
            <img src="../assets/image/关闭按钮1.png" style="width:35px;position: absolute;right: -50px;top: -50px;border-radius: 50%;" @click="close()"/>
      <div v-if="modelType=='login'">
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
        <div class="flex  flex-align-center flex-pack-center" style="    padding: 10px 0;">
          <div @click="modelType = 'sign'" class="flex  flex-align-center flex-pack-center">
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

<div v-if="modelType=='sign'">
  <div style="text-align:center;font-size:18px;margin-top: 25px;">注册页</div>

  <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input placeholder="请输入手机号码" v-model="sign_loginName" style="border:0;width:100%;"/>
     </div>       
          </div>


          
  <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input placeholder="请输入验证码" v-model="sign_code" style="border:0;width:100%;"/>
     </div>       
      <van-button  @click="getVistyCode()"   class="flex-1" style="height:40px;line-height:40px;border-radius:5px;background-color:#fff;color:#F4C542;border:1px solid #F4C542;padding: 0px 10px;margin-left: 10px;"  >{{vistyText}}</van-button>
          </div>


  <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input type="password" placeholder="请输入6-12位密码" v-model="sign_password" style="border:0;width:100%;"/>
     </div>       
          </div>


  <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
<div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
            <input type="password" placeholder="请确认密码" v-model="sign_repassword" style="border:0;width:100%;"/>
     </div>       
          </div>

<div class="flex  flex-align-center flex-pack-center" style="padding:0 30px">
      <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;"  class="flex-1" @click="doSign">立即注册</van-button>
</div>
<div style="text-align:center;margin:10px 0;"><p style="color:#d2d2d2;">注册表示您同意<a href="#" style="color:#f4c542;">《用户协议》</a></p></div>  
</div>
      </div>
   </div>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;padding:5px 0;">
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
  <div style="    position: relative;" v-on:mouseover="mouseover()" v-on:mouseout="mouseout()">
    <div class="messageFexid" style="right:10px">{{cartLen}}</div>
      <img src="../assets/image/购物车.png"/>
      <div class="cartFexid" v-if="cartModel">
        <div style="    display: flex;
    justify-content: flex-end;"> 
          <div style="width:30px;height:30px;line-height:30px;text-align:center" @click="cartModel = false">X</div>
        </div>

        <div style="   height: 310px;overflow:auto;">
<div v-for="(item,index) in cartList" class="cartItem flex flex-align-center" >
      <div class="flex flex-pack-center flex-align-center" style="width:80px;margin:0 10px;overflow:hidden;">
       <img v-lazy="item.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
       </div>
       <div class="flex-1" style="overflow: hidden;">

         <div>
           <span class="textLabel" style="color:#000000;font-size:15px">{{item.goodsName}}</span>
          </div>
         <div style="color:#666;" class="textLabel">
        <span v-if="item.skuKeyValue.length>2 ">
<span v-for="items in JSON.parse(item.skuKeyValue)" style="margin-right:10px;">
  <span>{{items.key}}:{{items.value}} X {{item.num}}</span>
</span>
        </span>
        <span v-else>
          X {{item.num}}
        </span>
         </div>
       </div>

       <div style="padding:10px;">
            <span class="marketPrice" style="font-size:20">￥{{item.price}}</span>
       </div>

</div>
        </div>
<div style="border-top:1px solid #e5e5e5;background-color:#FCFCFC;height:60px" class="flex flex-align-center">
<<<<<<< HEAD
       <div class="flex-1" style="padding:10px;font-size:15px;">  商品合计：<span class="marketPrice"  style="font-size:20"> ￥{{totalMoney}}</span></div>
            <van-button  style="background-color:#F4C542;color:#FFFFFF;border:#F4C542;min-width:130px;margin:0 10px;"  @click.stop="goCart()">去结算</van-button>
</div>
      </div>
  </div>
</div>
<div> 
</div>
         </div>
     <!-- <div style="height:50px;background-color:red">123</div> -->
<van-tabs :active="active" @click="changeTab" class="index_tabs flex-1" style="width:100%;" >
<!-- :style="$route.query.active?'margin-top:-45px':''" -->
  <van-tab v-for="(item,index) in indexList" :title="item.pageName" :key="index" >
      <!-- 商品二级分类   取item 看有没有catid  是一级id   -->

<div v-if="active == index">
    <!-- {{item.catId}} -->
  
        <div v-for="(items,childrenIndex) in item.children" :key="childrenIndex" >
              <!-- 轮播图 -->
            <div v-if="items.componentType === 'COMPONENT_TYPE_SCROLL_HEADER'">
     <el-carousel :interval="5000" arrow="always" style="width:100vw;    margin-left: -20vw;">
    <el-carousel-item v-for="(image, imageIndex) in items.items" :key="imageIndex">
                       <img v-lazy="image.itemImgUrl" style="width:100%;" @click="goActionType(image.actionType,image.actionValue)"/>
    </el-carousel-item>
  </el-carousel>
=======
    <div class="flex-1" style="padding:10px;font-size:15px;">  商品合计：<span class="marketPrice"  style="font-size:20"> ￥{{totalMoney}}</span></div>
    <van-button  style="background-color:#F4C542;color:#FFFFFF;border:#F4C542;min-width:130px;margin:0 10px;"  @click.stop="goCart()">去结算</van-button>

</div>
</div>
</div>
</div>
<div> 
</div>
 </div>

<!-- <div style="height:50px;background-color:red">123</div> -->
<!-- 头部导航菜单 -->
<van-tabs :active="active" @click="changeTab" class="index_tabs flex-1" style="width:100%;" >
<!-- :style="$route.query.active?'margin-top:-45px':''" -->
<van-tab v-for="(item,index) in indexList" :title="item.pageName" :key="index">
<div v-if="active == index">
       <!-- {{item.catId}}  -->
       <!-- 二级菜单 -->
        <div class="flex flex-pack-center two_classify">
            <div  v-for="(catItem,index) in catList"  :key="index" @click="twoList(index)">
              <p class="flex-pack-center"><img v-lazy="catItem.catIcon"/></p>
              <p class="flex-pack-center">{{catItem.catName}}</p>
>>>>>>> 9af613786b42ae578280871c7b882979db5fc69e
            </div>
        </div>
       <!--  <div class="flex flex-pack-center" v-else>
            
        </div> -->
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
            <div style="height:10px;background-color:#f7f7f7;width:100vw;margin-left: -20vw;"></div>
            <div style="margin:20px 0">
                  <div style="    text-align: center;border-bottom: 1px solid #e5e5e5;
                      font-size: 28px;">
                  {{items.name}}
                  </div>
                  <div class="goodsBody" v-if="items.columnNum ===1" >
                      <div v-for="(goods,goodsIndex) in items.items" @click="goProductDetail(goods.goodsId)" class="flex" style="width:50%;border-bottom: 1px solid #e5e5e5;">
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
                              <span style="display:inline-block;color:#E05459;font-size:20;margin:12px 5px 12px 0;">￥{{goods.marketPrice}}</span>
                              <span style="color:#C5C4C4;text-decoration:line-through;font-size:14px" >原价:{{goods.labelPrice}}</span>
                            </div>
                            <van-button class="btn_yellow" @click.stop="doChangeModel(goods.goodsId)">立即抢购</van-button>
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
  cartModel = false
  mouseover() {
    this.cartModel = true
  }
  mouseout() {
    console.log("222");
  }
  type = "H5";
  leftScale = "1.5";
  textindex = 1;
  rightClick() {
    this.$emit("rightClick");
  }

  isGetverify = true; //当前允许发送验证码

  sign_loginName = "";
  sign_code = "";
  sign_password = "";
  sign_repassword = "";

  getVistyCode() {
    //验证手机号码
    if (!this.isGetverify) {
      return;
    }
    //getCode
    Vue.prototype.$reqFormPost1(
      "/auth/getsmscode",
      { mobile: this.sign_loginName, type: "REGISTER" },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }

        this["$Message"].success("发送成功");
        this.timelop();
      }
    );
  }
  goCart(){
    this.$router.push('/cart')
  }

  doSign() {
    //验证
    Vue.prototype.$reqFormPost1(
      "/auth/register",
      {
        loginName: this.sign_loginName,
        password: require("crypto")
          .createHash("md5")
          .update(this.loginName + this.password)
          .digest("hex"),
        code: this.sign_code,
        recommontId: "" //推荐者ID
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        this["$Message"].success("注册成功");
        this.modelType = "login";
      }
    );
  }
  timer = 60;
  timerNum = 60;
  timelop() {
    let self = this;
    console.log("获取验证码");
    self.timer = setInterval(function() {
      self.isGetverify = false;
      if (self.timerNum >= 1) {
        self.timerNum--;
      } else {
        self.timerNum = 60;
      }
      self.$store.commit(Vue.prototype.MutationTreeType.VERCODE, self.timerNum);
    }, 1000);
  }
  get vistyText() {
    if (this.$store.getters[Vue.prototype.MutationTreeType.VERCODE] < 60) {
      this.isGetverify = false;
      return this.$store.getters[Vue.prototype.MutationTreeType.VERCODE] + "s";
    } else {
      this.isGetverify = true;
      return "获取验证码";
    }
  }

  goProductDetail(goodsId) {
    this.$router.push({
      path: "/productdetail",
      query: {
        goodsId: goodsId
      }
    });
  }
  modelType = "login";
  loginOut() {
    this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, {
      userId: "",
      token: ""
    });
    localStorage.removeItem(Vue.prototype.MutationTreeType.TOKEN_INFO);
  }
  goCenter() {
    this.$router.push("/center");
  }
  loginModel = false;
  close() {
    this.changeLoginModel("");
  }
  changeLoginModel(type) {
    this.modelType = type;
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
          this["$Message"].warning(res.message);
          return;
        }
        console.log(res.data);
        this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, res.data);
        localStorage.setItem(
          Vue.prototype.MutationTreeType.TOKEN_INFO,
          JSON.stringify(res.data)
        );
        this.loginModel = false
      }
    );
  }
  indexList = [];
  catList = [];
  active = "0";

twoList(active,catList){
    console.log(this.indexList,this.active)
    sessionStorage.catId = this.catList[active].catId;
    sessionStorage.parentId = this.indexList[this.active].catId
    this.$router.push({
      path: "/productClassify"
    }); 
}
  
changeTab(active, shit) {
    console.log(this.indexList[active].catId);
    // shit 立刻检测  通常进来时不检测
    if (
      this.active == "-1" &&
      this.$route.path != "/" &&
      typeof shit == "string"
    ) {
      console.log("传值", active);
      this.$router.replace({
        name: "index",
        params: {
          active: active
        }
      });
      return;
    }

    this.active = active;
    if (active != "-1" && !this.indexList[active].children) {
      Vue.prototype.$reqFormPost1(
        "/page/info",
        {
          pageId: this.indexList[active].pageId
        },
        res => {
          if (res.returnCode != 200) {
            this["$Message"].warning(res.message);
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
                  this["$Message"].warning(res.message);
                  return;
                }
                this.indexList[active].children.push({
                  componentType: "COMPONENT_TYPE_GOODS_TAG",
                  columnNum: 1,
                  items: res.data.goodsList
                });

                this.indexList.push();
                this.getSecCatList(active);
              }
            );
          }
        }
      );
    } else {
    }
  }
  //二级菜单
  getSecCatList(active){
    Vue.prototype.$reqFormPost1(
      "/user/cat/list",
      {
        parentId: this.indexList[active].catId
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log(res.message);
          return;
        }
        this["$Message"].success("成功");
        this.catList = res.data;
        console.log(res.data);
      }
    );
  }
  initIndex() {
    Vue.prototype.$reqUrlGet1("/page/list", {}, res => {
      if (res.returnCode !== 200) {
        console.log(res);
        this["$Message"].warning(res.message);
        console.log("网络请求错误！");
        return;
      }
      this.indexList = res.data;
      if (this.indexList.length > 0) {
        this.changeTab(this.active, true);
      }
    });
  }
  cartList = [];
  getNumber(cartList = []) {
    let num = 0;
    cartList.forEach((item, index) => {
      num += item.num;
    });
    return num.toString();
  }
  cartLen = "0";
  totalMoney = 0;
  getCartList() {
    Vue.prototype.$reqFormPost1(
      "/shop/cart/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
      },
      res => {
        if (res.returnCode !== 200) {
          this["$Message"].warning(res.message);
          console.log(res)
          if(res.returnCode ==400 && res.message =='账号已在其他设备登录'){
            this.loginOut();
            this.loginModel = true;
          }
          return;
        }
        this.cartList = res.data.carts;
        this.totalMoney = res.data.totalMoney;
        this.cartLen = this.getNumber(res.data.carts);
        this.$emit("getCartList");
      }
    );
  }

  mounted() {
    this.table ? (this.active = "-1") : "";
    (this.$route.params.active || "") != ""
      ? (this.active = this.$route.params.active)
      : "";
    this.$route.params.active = "";

    this.initIndex();

    if (this.$store.getters[Vue.prototype.MutationTreeType.VERCODE] < 60) {
      this.isGetverify = false;
      this.timerNum = this.$store.getters[
        Vue.prototype.MutationTreeType.VERCODE
      ];
      this.timelop();
    }

    if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {
      this.getCartList();
    }
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
.cartFexid {
  height: 400px;
  width: 380px;
  background-color: #fff;
  position: absolute;
  bottom: -400px;
  left: -190px;
  z-index: 990;
  overflow: hidden;
  box-shadow: 1px 1px 10px #eee;
  border:1px solid #FAFAFA;
}
.cartItem{
  padding:5px 0;
}
.btn_yellow{
  height: 30px;line-height: 30px; border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;
}

.two_classify{
  width: 100%;background:#fefefe;height:100px;padding:20px;
  div{
    flex: 1;cursor: pointer;
    p{
      width:100%;text-align: center;
      img{
        width:35px;height:35px;border-radius: 50px;background: #ccc;
      }
    }
  }
}
</style>