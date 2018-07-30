<template>
  <div class="alter-container">
   <div class="toplabel flex   flex-pack-center">
   
        <div class="flex flex-end-justify flex-align-center" style="height:100%;width:1200px;color:#fff;font-size:14px;">
            <div v-if="$store.getters[MutationTreeType.TOKEN_INFO].token" class="contentBox" 
            v-on:mouseover="mouseover_select()" v-on:mouseout="mouseout_select()">
               <i class="user_img">
                 <img :src="userInfo.userIcon" v-if="userInfo.userIcon"/>
                 <img src="../assets/pic_adim.png" v-else>
                 </i>
                   <span v-if="userInfo.nickName&& userInfo.nickName.length>0">{{userInfo.nickName}}</span>   
                   <span v-else>{{userInfo.loginName}}</span>   
              <div class="top_select" v-if="select_block">
                <div @click="myDiscount()">优惠券</div>
                <div @click="myCollect()">我的收藏</div>
                <div @click="mySite()">地址管理</div>
                <div @click="myAward()">我的积分</div>
                <div @click="ruleshow()">退出登录</div>
              </div>
            </div>
            <div class="contentBox" @click="changeLoginModel('login')" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
              <span style="cursor: pointer;">登录</span>
            </div>
            <div class="contentBox borderleft " @click="changeLoginModel('sign')" v-if="!$store.getters[MutationTreeType.TOKEN_INFO].token">
              <span style="cursor: pointer;">注册</span>
            </div>
            <div class="contentBox borderleft ">
              <span @click="myOrder()">我的订单</span>
            </div>
            <div class="contentBox borderleft ">
              <span @click="myMessagelist()" style="position:relative">消息
                    <div class="messageFexid" style="right:10px" v-if="messageCount!= 0">{{messageCount}}</div>
                </span>
            </div>
            <div class="contentBox borderleft ">
              <span onclick="showMeiQia()">在线客服</span>
            </div>

            <div class="contentBox borderleft borderright" v-on:mouseover="appMouseover()" v-on:mouseout="appMouseout()">
              <span> <img src="../assets/phone1.png" style="vertical-align: middle;"/>APP</span>
            </div>
             <div class="icon_code" v-if="app_code" style="    top: 52px;
    z-index: 9999999;
    padding: 20px 15px;
    box-shadow: 2px 5px 19px #888888;
    background: #fff;
    position: absolute;
    bottom: 160px;
    z-index: 9999;
    width: 110px;
    height: 120px;">
               <img src="../assets/appcode.jpeg" style="width:80px;height:80px;"/></div>
        </div>
   </div>

   <div style="height:52px;"></div>
   <div class="dialog  flex  flex-align-center flex-pack-center" v-if="loginModel">
      <div style="height:400px;width:380px;background-color:#fff;position: relative;">
            <img src="../assets/image/关闭按钮1.png" style="width:35px;position: absolute;right: -50px;top: -50px;border-radius: 50%;" @click="close()"/>
      <!-- 登录 -->
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
                <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;cursor: pointer;"  class="flex-1" @click="doLogin">登录</van-button>
          </div>
           <div class="flex  flex-align-center flex-pack-center" style="    padding: 10px 0;">
              <div @click="modelType = 'sign'" class="flex  flex-align-center flex-pack-center">
                <img src="../assets/image/新用户注册.png" style="width:20px">
                <span  style="margin:0 5px;cursor: pointer;">注册新用户</span>
              </div>
              <div  style="background-color:#A3A3A3;margin:5px 15px;width:1px;height:20px;" ></div>
              <div @click="modelType = 'forget'" class="flex  flex-align-center flex-pack-center">
                <img src="../assets/image/忘记密码.png" style="width:20px;">
                <span  style="margin:0 5px;cursor: pointer;">忘记密码?</span>
              </div>
        </div>
      </div>
      <!-- 注册 -->
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
            <van-button  @click="getVistyCode('REGISTER')"   class="flex-1" style="height:40px;line-height:40px;border-radius:5px;background-color:#fff;color:#F4C542;border:1px solid #F4C542;padding: 0px 10px;margin-left: 10px;cursor: pointer;"  >{{vistyText}}</van-button>
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
                <input type="password" placeholder="请输入6位以上密码" v-model="sign_password" style="border:0;width:100%;"/>
          </div>       
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
              <input type="password" placeholder="请确认密码" v-model="sign_repassword" style="border:0;width:100%;"/>
            </div>       
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px">
              <van-button style="border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;cursor: pointer;"  class="flex-1" @click="doSign">立即注册</van-button>
        </div>
        <div style="text-align:center;margin:10px 0;"><p style="color:#d2d2d2;">注册表示您同意<a href="#" style="color:#f4c542;" @click="goAgreement()">《用户协议》</a></p></div>  
      </div>
      <!-- 忘记密码 -->
      <div v-if="modelType=='forget'">
        <div style="text-align:center;font-size:18px;margin-top: 25px;">忘记密码页</div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
              <input placeholder="请输入手机号码" v-model="forget_Name" style="border:0;width:100%;"/>
          </div>       
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
                  <input placeholder="请输入验证码" v-model="forget_code" maxlength="11" style="border:0;width:100%;"/>
          </div>       
          <van-button  @click="getVistyCode('FINDPASSWORD')"   class="flex-1" style="cursor: pointer;height:40px;line-height:40px;border-radius:5px;background-color:#fff;color:#F4C542;border:1px solid #F4C542;padding: 0px 10px;margin-left: 10px;"  >{{vistyText}}</van-button>
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
                <input type="password" placeholder="请输入新密码" v-model="forget_password" style="border:0;width:100%;"/>
          </div>       
        </div>
        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px;margin:15px 0">
            <div style="border:1px #e5e5e5 solid;padding:10px;border-radius:5px;" class="flex-1">
              <input type="password" placeholder="请再输入一次密码" v-model="forget_repassword" style="border:0;width:100%;"/>
            </div>       
        </div>

        <div class="flex  flex-align-center flex-pack-center" style="padding:0 30px">
              <van-button style="cursor: pointer;border-radius:4%;background-color:#F4C542;color:#FFFFFF;border:#F4C542;"  class="flex-1" @click="goforget()">保存</van-button>
        </div>
      </div>
  </div>
</div>

<div class=" flex   flex-pack-center">
       <div  style="width:1200px;padding:5px 0;">
         <div style="" class="flex flex-pack-justify flex-align-center">
            <img  src="../assets/image/logo拷贝.png" @click="goIndex()"/>
<div class="flex flex-align-center flex-1 flex-end-justify">
  
<!-- 搜索记录 -->
<div class="flex flex-align-center" style="border:1px #EAEAEA solid;">
   <div style="position: relative;min-width:250px;"> 
        <input  style="border:none;margin:0 10px;width:90%;" v-model="keyword" placeholder="搜索商品"  @focus="onFocus()"  @blur="onblur()"/>
        
       

      
 <div style="position: absolute;width: 100%;font-size:14px;border: 1px #e5e5e5 solid;background-color:#fff;z-index: 300;padding:10px;top:24px;" v-if="filterModel">
          <div style="border-bottom: 1px #e5e5e5 solid;" v-if="stockpile.length>0">

              <div style="color:#999;">搜索记录
                <!-- 删除历史记录 -->
            </div>
            <div class="flex-pack-justify  flex-align-center" style="padding-left:5px;position:relative" >
              <div v-for="(item,index) in stockpile" :key="index" class="flex  flex-align-center flex-pack-justify">
                 <div style=" overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor: pointer;" @click="doSelect(item.value,true)">{{item.value}}</div>
                 <div >
                <i class="iconfont icon-iconfontshanchu3" style="font-size:14px;cursor: pointer;" 
                  @click="clearSearch(item)"
                ></i></div>
              </div>
            </div>
            </div>


          <div style="padding-top:10px;padding-left:5px;    cursor: pointer;">
              <div class="hotwordItem1 flex" v-for="n in hotwordList" v-text="n.word" @click="doSelect(n.word,false)">
              </div>
          </div>
        </div> 
    </div>
    <div style="width:30px;height:30px;background-color:#F4C542;    cursor: pointer;"  @click="doSelect(keyword,true)" class="flex flex-align-center flex-pack-center">
        <img src="../assets/image/放大镜.png" />
    </div>
  </div>
  
  <!-- <img src="../assets/image/登录.png" @click="goCenter" style="margin:0 10px;cursor: pointer;"/> -->
  <div style=" cursor: pointer; position: relative;margin-left: 30px;" v-on:mouseover="mouseover()" v-on:mouseout="mouseout()">
    <div class="messageFexid" style="right:10px;cursor: pointer;" v-if="cartLen!=0">{{cartLen}}</div>
      <img src="../assets/image/购物车.png" style="    vertical-align: middle;"/>
      <div class="cartFexid" v-if="cartModel" >
        <div style="display: flex;justify-content: flex-end;"> 
          <div style="width:30px;height:30px;line-height:30px;text-align:center" @click="cartModel = false">
            <img src="../assets/image/关闭按钮1.png" style="cursor: pointer;width:20px;height:20px;vertical-align: middle;" />
          </div>
        </div>
        <div style="   height: 310px;overflow:auto;">
<div  v-if="cartList.length>0">      
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
            <span class="marketPrice" style="font-size:20">￥{{item.price.toFixed(2)}}</span>
       </div>
       </div>
       </div>



<div class=" flex  flex-align-center   flex-pack-center" v-else>
  <img src="../assets/空购物车拷贝.png" style="width:180px;height:180px;"/>
</div>

        </div>
<div style="border-top:1px solid #e5e5e5;background-color:#FCFCFC;height:60px" class="flex flex-align-center">
    <div class="flex-1" style="padding:10px;font-size:15px;">  商品合计：<span class="marketPrice"  style="font-size:20"> ￥{{totalMoney}}</span></div>
    <van-button  style="cursor: pointer;background-color:#F4C542;color:#FFFFFF;border:#F4C542;min-width:130px;margin:0 10px;"  @click.stop="goCart()">去结算</van-button>

</div>
</div>
</div>
</div>
<div> 
</div>
 </div>

<!-- <div style="height:50px;background-color:red">123</div> -->
<!-- 头部导航菜单 -->

<van-tabs id="searchBar" :active="active" @click="changeTab" v-on:mouseover="changeTab" class="searchBar index_tabs flex-1" style="width:100%;" >
<!-- <van-tabs :active="active" k@clic="changeTab" class="index_tabs flex-1" style="width:100%;" > -->
<!-- :style="$route.query.active?'margin-top:-45px':''" -->
    <van-tab v-for="(item,index) in indexList" :title="item.pageName" :key="index"
      
    >
    <!-- v-on:mouseover="two_menu(active)" -->
          <div v-if="active == index">
              <!-- {{item.catId}}  -->
              <!-- 二级菜单 -->
                <div class="flex flex-pack-center two_classify" 
                  v-if="item.catId &&catList&& catList.length>0"
                >
                    <div  v-for="(catItem,index) in catList"  :key="index" @click="twoList(index)">
                      <p class="flex-pack-center"><img v-lazy="catItem.catIcon"/></p>
                      <p class="flex-pack-center">{{catItem.catName}}</p>
                    </div>
                </div>
                <div v-for="(items,childrenIndex) in item.children" :key="childrenIndex" >
                  <!-- 轮播图 -->
                  <div v-if="items.componentType === 'COMPONENT_TYPE_SCROLL_HEADER'">
                        <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="(image, imageIndex) in items.items" :key="imageIndex" 
                        v-bind:style="{backgroundImage:'url(' + image.itemImgUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
                        >
                              <!-- <img v-lazy="image.itemImgUrl" style="width:100%;height: 300px;" @click="goActionType(image.actionType,image.actionValue)"/> -->
                        </el-carousel-item>
                      </el-carousel>
                  </div>
                     <!-- 新品推荐 -->
                  <div v-if="items.componentType === 'COMPONENT_TYPE_GOODS_TAG'">

                    <div style="background-color:#f7f7f7;"></div>
                    
                    <div style="margin:20px 0">
                          <div class="index_headline">
                              <i class="user_img" >{{items.letter}}</i>
                              <i>{{items.name}}</i>
                              <p>{{items.nameEn}}</p>
                              
                          </div>
                          
                        <!-- //1 定制推荐-->
                         <div class="goodsBody" v-if="items.arrtibleIndex %3 == 1">
                           <div class="more" @click.stop="goMoretj(active)">更多推荐 ></div>
                           <div class="recommend_list" 
                            v-for="(goods,goodsIndex) in items.items " :key="goodsIndex" v-if="goodsIndex<2"
                              @click="goProductDetail(goods.goodsId)" >
                              <div class="shop_img">
                                <div class="hot"  v-if="goods.hotStatus"><img src="../assets/hot.png" /></div>
                                <img  v-lazy="goods.goodsImg.split(',')[0]" style="height:365px;">
                                <h4 class="ellipsis">{{goods.jingle}}</h4>
                              </div>
                              <div class="shop_details">
                                <div class="discounts">
                                  <span v-if="goods.bargainStatus">满减</span>
                                  <span v-if="goods.singleStatus" style="color:#f4c542;border:1px solid #f4c542;">特价</span>
                                </div>
                                <h3 class="ellipsis"> {{goods.goodsName}}</h3>
                                <p class="shop_prce" style="color:red">￥{{goods.costPrice.toFixed(2)}}</p>
                              </div>
                           </div>
                           
                           <div class="recommend_list"
                           >
                              <div v-for="(goods,goodsIndex) in items.items " :key="goodsIndex" v-if="goodsIndex>1&&goodsIndex<4"
                                @click="goProductDetail(goods.goodsId)">
                                <div class="shop_img"  
                                v-bind:style="{backgroundImage:'url(' + goods.goodsImg.split(',')[0] + ')', backgroundRepeat:'no-repeat',height: '160px', backgroundPosition:'center center', backgroundSize: '100%'}"
                                >
                                  <div class="hot" v-if="goods.hotStatus"><img src="../assets/hot.png" /></div>
                                  <h4 class="ellipsis">{{goods.jingle}}</h4>
                                </div>
                                <div class="shop_details">
                                  <div class="discounts">
                                     <span v-if="goods.bargainStatus">满减</span>
                                  <span v-if="goods.singleStatus" style="color:#f4c542;border:1px solid #f4c542;">特价</span>
                                  </div>
                                  <h3 class="ellipsis"> {{goods.goodsName}}</h3>
                                  <p class="shop_prce" style="color:red">￥{{goods.costPrice.toFixed(2)}}</p>
                                </div>
                              </div>
                           </div>
                         </div>
                        </div>
                     
                      <!-- 2 新品推荐-->
                          <div class="goodsBody" style="flex-wrap: wrap;" v-if="items.arrtibleIndex %3 == 2">
                              <div class="more" @click.stop="goMorexp(active)">更多新品 ></div>
                              <div v-for="(goods,goodsIndex) in items.items" :key="goodsIndex" @click="goProductDetail(goods.goodsId)" class="flex" style="width:50%;border-bottom: 1px solid #e5e5e5;"> 
                                <div class="flex" style=" padding:10px;">
                                  <div class="flex flex-pack-center flex-align-center" style="width:200px;overflow:hidden;position: relative;">
                                    <div class="hot" v-if="goods.hotStatus"><img src="../assets/hot.png"></div>
                                    <img class="collImg_none" v-lazy="goods.goodsImg.split(',')[0]" style="width:100%;border:1px solid #EAEAEA"/>
                                  </div>
                                  <div style="padding:10px">
                                    <div >
                                        <img src="../assets/image/新品特价.png" v-if="goods.isBargain"  style="vertical-align: middle;height:20px;font-size: 12px;"/>
                                        <span class="textLabel" style="color:#000000;font-size:18px">{{goods.goodsName}}</span>
                                    </div>
                                    <div class="textLabel"  style="color:#A3A3A3;font-size:16px;width:350px;" >{{goods.jingle}}</div>
                                    <div>
                                      <span style="display:inline-block;color:#E05459;font-size:22px;margin:12px 5px 12px 0;">￥{{goods.marketPrice.toFixed(2)}}</span>
                                      <span style="color:#C5C4C4;text-decoration:line-through;font-size:18px" >原价:{{goods.labelPrice.toFixed(2)}}</span>
                                    </div>
                                    <van-button class="btn_yellow" @click.stop="goProductDetail(goods.goodsId)">立即抢购</van-button>
                                  </div>
                                  </div>
                                </div>
                          </div>
                          <!-- 3 热卖-->
                          <div class="goodsBody" v-if="items.arrtibleIndex %3 == 0">
                            <div class="more" @click.stop="goMorerm(active)">更多商品 ></div>
                              <div style="width:260px;margin-right: 20px;" 
                              v-for="(goods,goodsIndex) in items.items" :key="goodsIndex" v-if="goodsIndex<4" @click="goProductDetail(goods.goodsId)" >
                                  <div class="shop_img collImg">
                                    <div class="hot"><img src="../assets/hot.png" /></div>
                                    <img v-lazy="goods.goodsImg.split(',')[0]" style="height:270px;">
                                    <h4 class="ellipsis">{{goods.jingle}}</h4>
                                  </div>
                                  <div class="shop_details">
                                    <div class="discounts">
                                      <span v-if="goods.bargainStatus">满减</span>
                                      <span  v-if="goods.singleStatus" style="color:#f4c542;border:1px solid #f4c542;">特价</span>
                                    </div>
                                    <h3 class="ellipsis"> {{goods.goodsName}}</h3>
                                    <p class="shop_prce" style="color:red">￥{{goods.marketPrice.toFixed(2)}}</p>
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
 <!-- 浮动标识 -->
 <div class="float_icon" id="to-top-btn" v-show="backTopShow">
    <div class="icon_app"
      v-on:mouseover="mouseover_code()" v-on:mouseout="mouseout_code()"
    >
      <p>下载app</p>
    </div>
    <div class="icon_code" v-if="cartModel_code"><img src="../assets/appcode.jpeg" style="width:68px;height:68px;"/></div>

    <div class="icon_service" onclick="showMeiQia()">
      <p>联系客服</p>
    </div>
    <div class="icon_top"  @click="backTop()">
      <p>返回顶部</p>
    </div>
 </div>

 <!-- 确认退出弹窗 -->
<div style=" position: relative;">
    <div style="background-color:rgba(0, 0, 0, 0.5);  z-index: 99999;position: fixed;width: 100%;height: 100vh;top:0;left:0;" v-show="isruleshow" >
      <div class="flex flex-pack-center flex-align-center" style="height:100vh;">
        <div class="flex flex-around-justify flex-align-center flex-v" style="background-color:#fff;width:300px;height:170px;padding:20px; border-radius: 10px;    position: relative;">
          <div style="position: absolute;top:10px;right:10px;">
            <img src="../assets/image/关闭按钮1.png" style="width:20px;height:20px;" @click="ruleshow()"/>
          </div>
          <div style="padding:10px;font-size:14px">是否退出登录</div>
          <div class="flex">
            <div @click="ruleshow()" 
            style="width:90px;height:35px;border:1px solid #FCCB52;color:#FCCB52;text-align: center;line-height:35px;margin-right:8px;font-size:14px;">取消</div>

            <div @click="sendLoginOut()" 
            style="width:90px;height:35px;background-color:#FCCB52;color:#fff;text-align: center;line-height:35px;font-size:14px;">确认</div>

          </div>
        </div>
      </div>
    </div>
</div>
  <agreement ref="agreement"></agreement>
</div>
  <!-- end container -->
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
// import agreement from "../pages/index/agreement.vue";
import agreement from "../pages/index/agreement.vue";

@Component({
  components: {
    agreement
  }
})
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
  filterModel = false;
  app_code = false;
  //hover二维码
   appMouseover() {
    this.app_code = true;
  }
  appMouseout() {
     this.app_code = false;
  }
  //用户协议
  goAgreement() {
    console.log("进来协议");
    let b: any = this.$refs.agreement;
    console.log(b);
    b.userModel = true;
  }
  onFocus() {
    //搜索
    this.filterModel = true;
  }
  onblur() {
    // 离开
    setTimeout(() => {
      this.filterModel = false;
    }, 500);
  }
  keyword = "";
  stockpile = [];

  //返回顶部
  backTop() {
    let back = setInterval(() => {
      if (document.body.scrollTop || document.documentElement.scrollTop) {
        document.body.scrollTop -= 100;
        document.documentElement.scrollTop -= 100;
      } else {
        clearInterval(back);
      }
    });
  }
  //返回顶部显示隐藏
  handleScroll() {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
      this.backTopShow = true;
    } else {
      this.backTopShow = false;
    }
  }

  backTopShow = false;
  cartModel = false;
  // 弹窗
  isruleshow = false;
  ruleshow() {
    this.isruleshow = !this.isruleshow;
  }
  mouseover() {
    this.cartModel = true;
  }
  mouseout() {
     this.cartModel = false;
  }

  menu_block = false;
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

  forget_Name = "";
  forget_code = "";
  forget_password = "";
  forget_repassword = "";

  getVistyCode(type) {
    let mobile = "";
    if (type == "REGISTER") {
      if ((this.sign_loginName || "") == "") {
        this["$Message"].warning("请输入手机号码");
        return;
      }
      if (this.sign_loginName.length != 11) {
        this["$Message"].warning("手机号码格式不对");
        return;
      }
      mobile = this.sign_loginName;
    } else {
      if (this.forget_Name == "") {
        this["$Message"].warning("请输入手机号码");
        return;
      }

      mobile = this.forget_Name;
    }

    //验证手机号码

    if (!this.isGetverify) {
      return;
    }
    //getCode
    Vue.prototype.$reqFormPost1(
      "/auth/getsmscode",
      { mobile: mobile, type: type },
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



  doSign() {
    if ((this.sign_loginName || "") == "") {
      this["$Message"].warning("请输入手机号码");
      return;
    }
    if ((this.sign_code || "") == "") {
      this["$Message"].warning("请输入验证码");
      return;
    }
    if ((this.sign_code || "") == "") {
      this["$Message"].warning("请输入密码");
      return;
    }
    //验证
    if (this.sign_password.length < 6) {
      this["$Message"].warning("请输入6位以上密码");
      return;
    }
    if (this.sign_password != this.sign_repassword) {
      this["$Message"].warning("两次输入密码不一致 ");
      return;
    }
    //验证
    Vue.prototype.$reqFormPost1(
      "/auth/register",
      {
        loginName: this.sign_loginName,
        password: require("crypto")
          .createHash("md5")
          .update(this.sign_password)
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
    self.timer = setInterval(function() {
      self.isGetverify = false;
      if (self.timerNum >= 1) {
        self.timerNum--;
      } else {
        self.timerNum = 60;
        clearInterval(self.timer);
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

  goforget() {
    //验证
    if (this.forget_Name == "") {
      this["$Message"].warning("请输入手机号码");
      return;
    }
    if (this.forget_code == "") {
      this["$Message"].warning("请输入验证码");
      return;
    }

    if (this.forget_password == "") {
      this["$Message"].warning("请输入确认密码");
      return;
    }

    if (this.forget_repassword == "") {
      this["$Message"].warning("请输入新密码");
      return;
    }
    if (this.forget_password.length < 6 || this.forget_repassword.length < 6) {
      this["$Message"].warning("最低字符为6位");
      return;
    }
    if (this.forget_password != this.forget_repassword) {
      this["$Message"].warning("两次输入密码不一致");
      return;
    }

    Vue.prototype.$reqFormPost1(
      "/user/password/find",
      {
        mobile: this.forget_Name,
        smsCode: this.forget_code,
        password: require("crypto")
          .createHash("md5")
          .update(this.forget_password)
          .digest("hex")
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        this["$Message"].success("找回密码成功");
        this.modelType = "login";
      }
    );
  }
  goIndex(){
    this.$router.push({
      path: "/"
    });
  }
  // 导航跳转
  myDiscount() {
    this.$router.push({
      path: "discountLobby"
    });
  }
  myCollect() {
    this.$router.push({
      path: "/collection"
    });
  }
  mySite() {
    this.$router.push({
      path: "/addresslist"
    });
  }
  myAward() {
    this.$router.push({
      path: "/my_reward"
    });
  }
  myOrder() {
    this.$router.push({
      path: "/orderlist"
    });
  }
  myMessagelist() {
    this.$router.push({
      path: "/Messagelist"
    });
  }
  goProductDetail(goodsId) {
    sessionStorage.goodsId = goodsId;
    this.$router.push({
      path: "/productDetail",
      query: {
        goodsId: goodsId
      }
    });
  }
  modelType = "login";

sendLoginOut(){
   this.isruleshow = !this.isruleshow;
   this.loginOut()
   
}

  // 退出登录
  loginOut() {

    this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, {
      userId: "",
      token: ""
    });
    localStorage.removeItem(Vue.prototype.MutationTreeType.TOKEN_INFO);

    sessionStorage.userInfo = ''
       
   if(this.$route.path =='/center'){
     let a :any = window
a.getUserInfo();
}


  }
    goCart() {
         if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {
    this.$router.push("/cart");
    }else{
        this.changeLoginModel('login')
    }
  }
  goCenter() {
  
    if (
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId !=
        "" &&
      this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token != ""
    ) {
    this.$router.push("/center");
    }else{
        this.changeLoginModel('login')
    }
  }
  loginModel = false;
  close() {
this.loginModel = false;
  }

  changeLoginModel(type) {
    this.modelType = type;
     this.loginModel = true
  }
 
  loginName = "";
  password = "";
  doLogin() {
    if (this.loginName == "") {
      this["$Message"].warning("请输入账号");
      return;
    }
    if (this.password == "") {
      this["$Message"].warning("请输入密码");
      return;
    }
    Vue.prototype.$reqFormPost1(
      "/auth/user/login",
      {
        loginName: this.loginName,
        password: require("crypto")
          .createHash("md5")
          .update(this.password)
          .digest("hex")
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        this.$store.commit(Vue.prototype.MutationTreeType.TOKEN_INFO, res.data);
        localStorage.setItem(
          Vue.prototype.MutationTreeType.TOKEN_INFO,
          JSON.stringify(res.data)
        );
        this.queryuserinfo();


        this.loginModel = false;
  
      }
    );
  }
  indexList = [];
  catList = [];
  active = "0";

  twoList(active, catList) {
    sessionStorage.catId = this.catList[active].catId;
    sessionStorage.parentId = this.indexList[this.active].catId;
    sessionStorage.keyword = "";
    this.$router.push({
      path: "/productClassify"
    });
  }

  cartModel_code = false;
  mouseover_code() {
    this.cartModel_code = true;
  }
  mouseout_code() {
    this.cartModel_code = false;
  }

  select_block = false;
  mouseover_select() {
    this.select_block = true;
  }
  mouseout_select() {
    this.select_block = false;
  }
  goActionType(actionType, actionValue) {
    if (actionType == "ACTION_TYPE_GOODSID") {
      var goodsId = actionValue;
      this.$router.push({
        path: "/productdetail",
        query: {
          goodsId: goodsId
        }
      });
    }

    if (actionType == "ACTION_TYPE_TAGID") {
      console.log(actionValue);

      Vue.prototype.$reqFormPost("/user/cat/querytree", {}, res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          return;
        }

        for (var i = 0; i < res.data.data.children.length; i++) {
          for (var j = 0; j < res.data.data.children[i].children.length; j++) {
            if (res.data.data.children[i].children[j].catId == actionValue) {
              var selectIndex = j.toString();

              sessionStorage.catId = actionValue;
              sessionStorage.parentId =
                res.data.data.children[i].children[j].parentId;
              sessionStorage.keyword = "";
              this.$router.push({
                path: "/productClassify"
              });
              // this.$router.push({
              //   path: "/productClassify",
              //   query: {
              //     catId: res.data.data.children[i].children[j].catId,
              //     parentCatId: res.data.data.children[i].children[j].parentId,

              //     title: res.data.data.children[i].label
              //   }
              // });

              return;
            }
          }
        }
      });
    }

    if (actionType == "ACTION_TYPE_URL") {
      window.location.href = actionValue;
      return;
    }
    return;
  }
  //更多商品
  goMoretj(active){
    this.changeTab(1, true);
  }
  goMorexp(active){
    this.changeTab(2, true);
  }
  goMorerm(active){
    this.changeTab(3, true);
  }

  changeTab(active, shit) {
    // shit 立刻检测  通常进来时不检测
    if (
      this.active == "-1" &&
      this.$route.path != "/" &&
      typeof shit == "string"
    ) {
      this.$router.replace({
        name: "index",
        params: {
          active: active
        }
      });
      return;
    }

    this.active = active;

    console.log(this.indexList, active)

    if (active != "-1" && !this.indexList[active].children) {
      console.log("哈哈", this.indexList[active].pageId);
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

          let a = res.data.filter((item, index) => {
            return item.componentType === "COMPONENT_TYPE_GOODS_TAG";
          });
          console.log(res.data);
          res.data.forEach((items, index) => {
            for (let i = 0; i < a.length; i++) {
              if (items.id == a[i].id) {
                items.arrtibleIndex = i + 1;
                a[i].arrtibleIndex = i + 1;
              }
            }
          });

          (<any>Object).assign(this.indexList[active], {
            children: res.data
          });
          console.log("jj", res.data);
          this.indexList.push();
          if (this.indexList[active] && this.indexList[active].catId) {
            this.two_menu(active);
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

                console.log("首页", res.data.goodsList);
                this.indexList.push();
              }
            );
          }
        }
      );
    } 
  }


  two_menu(active) {


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
        this.catList = res.data;
      }
    );
  }
  //二级菜单
  getSecCatList(active) {
    // Vue.prototype.$reqFormPost1(
    //   "/user/cat/list",
    //   {
    //     parentId: this.indexList[active].catId
    //   },
    //   res => {
    //     if (res.returnCode !== 200) {
    //       this["$Message"].warning(res.message);
    //       console.log(res.message);
    //       return;
    //     }
    //     this.catList = res.data;
    //   }
    // );
  }

  initIndex() {
    Vue.prototype.$reqUrlGet1("/page/list", {}, res => {
      if (res.returnCode !== 200) {
        this["$Message"].warning(res.message);
        console.log("网络请求错误！");
        return;
      }

      this.indexList = res.data;
      // this.indexList.forEach((item,index)=>{
      //   this.handleGoodSend(item,this.indexList)
      // })

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
          return;
        }
        this.cartList = res.data.carts;
        this.totalMoney = res.data.totalMoney;
        this.cartLen = this.getNumber(res.data.carts);
        this.$emit("getCartList");
      }
    );
  }


  queryuserinfo() {
    Vue.prototype.$reqFormPost1(
      "/user/query",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        sessionStorage.userInfo = JSON.stringify(res.data);
        this.userInfo = res.data;
        if(this.$route.path =='/center'){
     let a :any = window
a.getUserInfo();
}

      }
    );
  }
  userInfo = {};
  hotwordList = [];
  gethotword() {
    Vue.prototype.$reqUrlGet("/hotword/query", {}, res => {
      if (res == null) {
        console.log("网络请求错误！");
        return;
      }
      if (res.data.status != 200) {
        console.log(
          "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
        );
        this["$Message"].warning(res.data.message);
        return;
      }

      this.hotwordList = res.data.data;
      // console.log(res.data.data);
    });
  }
  messageCount: any = 0;
  getMessageCount() {
    Vue.prototype.$reqFormPost1(
      "/message/unread/count",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token
      },
      res => {
        if (res.returnCode != 200) {
          this["$Message"].warning(res.message);
          return;
        }
        this.messageCount = res.data.count;
        // console.log('消息条数',res.data.count)
      }
    );
  }
  clearSearch(item) {
    this.removeByValue( this.stockpile ,item);
    localStorage.filterValue = JSON.stringify(this.stockpile);
  }
  removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  doSelect(keyword,cookie) {

    if (keyword == "") {
      return;
    }

    if(cookie){this.stockpile || [];
    if (this.stockpile.length > 10) {
      this.removeByValue(
        this.stockpile,
        this.stockpile[this.stockpile.length - 1]
      );
    }

 this.stockpile.forEach((item,index)=>{
    if(item.value ==  keyword){
        this.removeByValue(
        this.stockpile,
        item
      );
    }
})
    this.stockpile.unshift({ value: keyword });
    localStorage.filterValue = JSON.stringify(this.stockpile);
}

    if (this.$route.path == "/productclassify") {
        this.keyword = keyword
      this.$emit("filterproduct");
      return;
    }

    sessionStorage.keyword = keyword;
    this.$router.push({
      name: "productclassify",
      query: {
        type: "filter"
      }
    });
    
  }
  //监听header滚动固定
  handleScrollHead () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollTop)
    // var offsetTop = document.querySelector('#searchBar').offsetTop
    // if (scrollTop > offsetTop) {
    // this.searchBarFixed = true
    // } else {
    // this.searchBarFixed = false
    // }
  }
  mounted() {
    window['changeLoginModel'] = ()=>{
      this.changeLoginModel('login')
    }
    window['loginOut'] = ()=>{
      this.loginOut()
    }
    window['queryuserinfo'] = ()=>{
      this.queryuserinfo()
    }

    if (localStorage.filterValue) {
      this.stockpile = JSON.parse(localStorage.filterValue);
    }
    // 添加一个滚动滚动监听事件：
    window.addEventListener("scroll", this.handleScroll);
    //监听header滚动固定
    window.addEventListener("scroll", this.handleScrollHead);
    
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
      this.queryuserinfo();
    this.getMessageCount();
    }
    this.gethotword();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.index_headline .user_img {
  color:#f4c542!important;font-size: 36px;
}
.user_img img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  vertical-align: middle;
}
.float_icon {
  position: fixed;
  bottom: 90px;
  right: 25px;
  z-index: 9999;
  div {
    width: 70px;
    height: 70px;
    border: 1px solid #f4f4f4;
    cursor: pointer;
    margin-bottom: 12px;
    p {
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #7c7c7c;
      background: #ccc;
    }
  }
  .icon_app {
    background: #fff url(../assets/phone1.png) no-repeat center bottom 2px;
    position: relative;
  }
  // 二维码
  .icon_code {
    padding: 20px 15px;text-align: center;
    box-shadow: 2px 5px 19px #888888;
    background: #fff;
    position: absolute;
    right: 88px;
    bottom: 160px;
    z-index: 9999;
    width: 110px;
    height: 115px;
  }
  .icon_service {
    background: #fff url(../assets/service1.png) no-repeat center bottom 2px;
  }
  .icon_top {
    background: #fff url(../assets/jt_up.png) no-repeat center bottom 2px;
  }
  //hover-icon
  div:hover p {
    background: #f4c542;
    color: #fff;
  }
  .icon_app:hover {
    background: #fff url(../assets/phone2.png) no-repeat center bottom 2px;
    color: #f4c542;
  }
  .icon_service:hover {
    background: #fff url(../assets/service2.png) no-repeat center bottom 2px;
    color: #f4c542;
  }
  .icon_top:hover {
    background: #fff url(../assets/jt_hover.png) no-repeat center bottom 2px;
    color: #f4c542;
  }
}
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
  cursor: pointer;
}
.contentBox span:hover{
  color: #f4c542;
}
//消息样式
.msgNum {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fe2015;
  clear: #fff;
  border-radius: 50px;
  text-align: center;
  line-height: 19px;
  left: 22px;
  top: -8px;
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
.index_headline {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 28px;
  padding-bottom: 20px;
  i {
    font-size: 30px;
    color: #3d3d3d;
  }
  p {
    font-size: 18px;
    color: #313131;
  }
}
.goodsBody {
  width: -webkit-fill-available;
  display: flex;
  // flex-wrap: wrap;
  padding: 10px 5px;
  border-bottom:10px solid #f5f5f5;
  justify-content: space-evenly;
  position:relative;
}
.goodsBody>div{
  cursor: pointer;
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
  left: -344px;
  z-index: 990;
  overflow: hidden;
  box-shadow: 1px 1px 10px #eee;
  border: 1px solid #fafafa;
}
.cartItem {
  padding: 5px 0;
}
.btn_yellow {
  height: 36px;
  line-height: 36px;
  border-radius: 4%;
  background-color: #f4c542;
  color: #ffffff;
  border: #f4c542;
  width: 130px;
  padding: 0;
  cursor: pointer;
}

.two_classify {
  width: 100%;
  background: #fefefe;
  height: 100px;
  padding: 20px;
  div {
    flex: 1;
    cursor: pointer;
    p {
      width: 100%;
      text-align: center;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50px;
        background: #ccc;
      }
    }
  }
}
// 热卖
.hot {
  position: absolute;
  left: 0;
  top: 0;
}
//头部下拉菜单
.contentBox {
  position: relative;
}
.top_select {
  position: absolute;
  background: #fff;
  width: 100%;
  border: 1px solid #efefef;
  border-top: 0;
  right: 0;
  div {
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #efefef;
    color: #000;
    cursor: pointer;
  }
  :hover {
    color: #f4c542;
    background: #f8f8f8;
  }
}

.hotwordItem1 {
  font-size: 14px;
}
//定制推荐
.recommend_list {
  cursor: pointer;
  width: 370px;
  margin-right: 15px;
  border: 1px solid #ededed;
  .shop_img {
    border: none;
    margin-bottom: 12px;
    overflow: hidden;
    h4 {
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      position: absolute;
      bottom: 0;
      background: rgba(207, 207, 207, 0.3);
      color: #a3a3a3;
    }
  }
  .shop_details {
    padding: 0 10px 10px 20px;
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}
.recommend_list:nth-of-type(4) {
  border: none;
}
.recommend_list:nth-of-type(4) > div {
  border: 1px solid #ededed;
  height: 230px;
  margin-bottom: 10px;
  .shop_img {
    overflow: hidden;
    h4 {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
  }
  .shop_img>img{
    height: 165px;
  }
  .shop_details {
    position: relative;
    .discounts {
      margin-bottom: 7px;
    }
    p {
      position: absolute;
      right: 10px;
      top: 8px;
    }
  }
}

.shop_img {
  border: 1px solid #ededed;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  // 热卖
  .hot {
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 33px;
      height: 38px;
    }
  }
  
  h4 {
    height: 54px;
    line-height: 54px;
    background: #eff1f1;
    text-align: center;
    font-size: 22px;
    color: #a3a3a3;
    width: 100%;
  }
}
.shop_img>img {
    width: 100%;
    height: 230px;
  }
.shop_details {
  div {
    margin-bottom: 12px;
    span {
      display: inline-block;
      width: 40px;
      height: 19px;
      text-align: center;
      color: red;
      border: 1px solid red;
      margin-right: 10px;
      border-radius: 5px;
    }
  }
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
  }
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.textLabel:hover{
  color:#f4c542;
}
.recommend_list div:nth-of-type(2){
  margin-bottom:0;
}
.more{
  position: absolute;right:30px;color: #333;cursor:pointer;z-index: 2;top:-65px;
}
.more:hover{
  color: #f4c542;
}
//新品推荐
.collImg_none {
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform .4s;
}
.collImg_none:hover{
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -ms-transform: scale(1.2);
}

// 热卖效果
.collImg {
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
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
  -ms-transform: scale(1.04);
}
//头部导航固定
.isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:999;
    left:200px;
  }
</style>