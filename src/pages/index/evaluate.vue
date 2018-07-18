<template>
  <!-- 商品评价 -->
  <div>
    <div class="rightTop">
        商品评价
    </div>
    <div class="flex evaList">
        <div class="shopInfo">
          <div><img v-lazy="detailList.goodsImg" style="width:135px;height:135px;border:1px solid #ddd;"/></div>
          <h4>{{detailList.goodsName}}</h4>
          <p>规格：灯饰</p>
        </div>
        <div class="shopText">
            <div class="flex shopStar">
              <div>评分</div>
              <div>

                   <div class="star-box" style="margin:0 10px;">
        <img v-for="(star,index) in stars" :key="index" :src="star.src"  @click="getstars(index+1)"/>
      </div>
              </div>
              <!-- <div>非常满意</div> -->
            </div>

            <div>
              <textarea placeholder="填写高质量的评价，即可参与抽奖哦"></textarea>
            </div>

            <div class="flex">
                <ul>
                    <li class="files_liUp"><input type="file"></li>
                    <li><img src="../../assets/image/LOGO.png" alt="" srcset=""></li>
                    <li><img src="../../assets/image/LOGO.png" alt="" srcset=""></li>
                </ul>
                <div 
                style="margin-top: 10px;width:155px;height:45px;border:1px solid #ffc630;color:#ffc630;text-align:center;font-size: 18px;line-height: 45px;" @click="subcomment()">提交</div>
            </div>
        </div>
    </div>


  </div> 
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Swipe from "../../components/Swipe.vue";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";

@Component({
  components: {
    Swipe
  },
  mixins: [mixin]
})
export default class User extends Vue {
  
 orderId="";
  orderdetail=[];
  detailList={goodsId:"",orderId:"",skuId:"",skuKeyValue:"",id:""};
  commentContent="";
  starsnum=0;
  filename=[];
  stars=[{
                            src: require('../../assets/image/评价灰.png'),
                            active: false
                        }, {
                            src: require('../../assets/image/评价灰.png'),
                            active: false
                        }, {
                            src: require('../../assets/image/评价灰.png'),
                            active: false
                        },
                        {
                            src: require('../../assets/image/评价灰.png'),
                            active: false
                        }, {
                            src: require('../../assets/image/评价灰.png'),
                            active: false
                        }
                    ];
  getorderdetail(){
    Vue.prototype.$reqFormPost(
      "/order/queryorderdetail",
      {
        userId: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .userId,
        token: this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO]
          .token,
        orderId: this.orderId,
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
        this.orderdetail = res.data.data;
        this.detailList = res.data.data.detailList[0]
        console.log(res.data.data)
        }
      ); 
  }
  getstars(num){
    this.starsnum=num;
    for(var j = 0; j < 5; j++) {
      this.stars[j].src = require('../../assets/image/评价灰.png');
      this.stars[j].active = false;
    }
    for(var i = 0; i < num; i++) {
      this.stars[i].src = require('../../assets/image/评价黄.png');
      this.stars[i].active = true;
    }
  }

  onRead(file) {
    let form = new FormData();
    form.append("file", file.file);
    Vue.prototype.$reqFormUpload("/fileupload", form, res => {
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
      console.log("文件上传", res.data.data.filename);
      this.filename.push(res.data.data.filename);
    });
  }
  delimg(index){
    this.filename.splice(index,1);
  }
  subcomment(){
  
      if(this.commentContent==""){
          Toast("请填写评价");
      }
      let commentImg = this.filename.toString()


        console.log( {  
            "customCommentList": [
                {
                "commentContent": this.commentContent,
                "commentImg": commentImg,
                "goodsId": this.detailList.goodsId,
                "orderDetailId": this.detailList.id,
                "skuId": this.detailList.skuId,
                "skuKeyValue": this.detailList.skuKeyValue,
                "star": this.starsnum
                }
            ],
            "orderId": this.orderId,
            "token": this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
            "userId": this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId
      })


    //   Vue.prototype.$reqFormPost(
    //   "/comment/add",
    //   {
    //         "customCommentList": [
    //             {
    //             "commentContent": this.commentContent,
    //             "commentImg": commentImg,
    //             "goodsId": this.detailList.goodsId,
    //             "orderDetailId": this.detailList.id,
    //             "skuId": this.detailList.skuId,
    //             "skuKeyValue": this.detailList.skuKeyValue,
    //             "star": this.starsnum
    //             }
    //         ],
    //         "orderId": this.orderId,
    //         "token": this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].token,
    //         "userId": this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].userId
    //   },
    //   res => {
    //     if (res == null) {
    //       console.log("网络请求错误！");
    //       return;
    //     }
    //     if (res.data.status != 200) {
    //       console.log(
    //         "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
    //       );

    //       Toast(res.data.message);
    //       return;
    //     }
    //       this.$router.go(-1);        


    //     console.log(res.data)
    //     },
    //     {
    //     "Content-Type": "application/json"
    // }     

      // ); 
  }
  handlePX(CssName, PxNumber) {
    return CssName +":" +this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /750 * PxNumber +"px;";
  }


  mounted() {
    this.orderId = this.$route.query.orderId;
    this.getorderdetail();
    console.log("评价");
  }


}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
.rightTop{
  height: 40px;background-color: rgb(247, 247, 247);font-size: 14px; border-bottom: 1px solid rgb(229, 229, 229);padding-left:10px;
  line-height: 40px;border-bottom: 1px dashed #ddd;
}
.evaList{
  padding:28px 30px;
  .shopInfo{
    width: 135px;margin-right: 25px;
    h4{
      font-size:18px;color: #000;font-weight: normal;
    }
  }
  .shopText{
    width: 720px;
    .shopStar{
      height: 26px;line-height:26px;margin-bottom:13px;
      div{
        margin-right:15px;font-size:14px;
        img{
          margin-right:10px;vertical-align: middle;
        }
      }
    }
    div{
      textarea{
        resize: none;width:720px;height: 130px;border:1px solid #ddd;padding:10px;margin-bottom: 10px;
      }
    }
    div{
      ul{
          overflow: hidden;width:560px;
        li{
          width:68px;height: 68px;margin-right: 20px;float: left;margin-bottom: 10px;
          img{
            width:100%;height:100%;
          }
        }
        .files_liUp{
          background: url(../../assets/image/+.png) no-repeat center center;border:1px solid #ddd;
        }
        .files_liUp input{
          width:100%;height: 100%;opacity: 0;
        }
      }
      
    }
  }
}
</style>
