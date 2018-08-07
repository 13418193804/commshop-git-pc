<template>
<div style=" position: relative;">
      <div class="rightTop">
            商品评价
      
      </div>
    <div class="flex evaList">
        <div class="shopInfo">
            <div><img v-lazy="detailList.goodsImg.split(',')[0]" style="width:135px;height:135px;border:1px solid #ddd;"/></div>
            <h4>{{detailList.goodsName}}</h4>
             <span v-for="items in JSON.parse(detailList.skuKeyValue)">
                <span>{{items.key}}:{{items.value}}</span>
             </span>
        </div>
        <div class="shopText">
            <div class="flex shopStar">
              <div>评分</div>
              <div>
                   <div class="star-box" style="margin:0 10px;cursor:pointer;">
                        <img v-for="(star,index) in stars" :key="index" :src="star.src"  @click="getstars(index+1)"/>
                  </div>
              </div>
            </div>
            <div>
                <textarea placeholder="请填写申请理由" 
                v-model="commentContent" type="text" name="content" rows="9" 
                ></textarea>
                <!-- <textarea placeholder="填写高质量的评价，即可参与抽奖哦" v-model="commentContent"></textarea> -->
            </div>
  
            <div class="flex" style="margin:10px;">
                  <div class="el-upload--picture-card">
              
                    <van-uploader :after-read="onRead" class="flex flex-pack-center flex-align-center" style="width: 100%;height: 100%;" accept="image/jpg,image/png, image/jpeg">
              
                      <van-icon name="photograph" />
              
                    </van-uploader>
              
                  </div>
                  <div class="el-upload--picture-card" style="position: relative;" 
                  v-bind:style="handleBackGround(item)"
                  v-for="(item,index) in refundObj.refundImgs" :key="index">
              
                    <!-- <img :src="item" style="width:100%;" /> -->
              
                    <!-- <i class="iconfont icon-shanchu3" style="color: #000;
              
                  position: absolute;
                  right: -8px;
                  top: -8px;
                  height: 17px;
                  line-height: 17px;" @click="removeByValue(refundObj.refundImgs,item)"></i> -->
                  <i >
                  <img src="../../assets/image/删除按钮.png" style="color: #000;
                  position: absolute;
                  right: -8px;width:23px;height:23px;
                  top: -8px;" @click="removeByValue(refundObj.refundImgs,item)"/>
                  </i>
                  
                  </div>
            </div>
          <div style="margin: 10px;">
            <van-button size="large" @click="subcomment()" style="width:150px;height:45px;background-color:#FCCB52;color:#fff;text-align: center;line-height:45px;margin-right:10px;"
            >提交</van-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import mixin from "../../config/mixin";
  import Swipe from "../../components/Swipe.vue";
  import { Action } from "vuex-class";
  import { Toast } from "vant";
  import comhead from "../../components/Comhead.vue";
  import { Prop } from "vue-property-decorator";
  
  
  @Component({
  
    components: {
  
      comhead
  
    },
  
    mixins: [mixin]
  
  })
  
  export default class Refund extends Vue {

 @Prop({ required: false })
  orderItem: any;
  model=false 
  detail = "";
  refundObj = {
    refundImgs: [],
    reason: ""
  };
  orderId="";
  orderdetail=[];
  detailList={goodsId:"",orderId:"",skuId:"",skuKeyValue:"",id:""};
  commentContent="";
  starsnum=0;
  filename=[];
  //星星评价
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
  
  //添加评价
  subcomment(){
      if(this.commentContent==""){
          Toast("请填写评价");
          return;
      }
      let commentImg = this.refundObj.refundImgs.join(',');
      Vue.prototype.$reqFormPost(
      "/comment/add",
      {
        // commentModel:{
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
            // }
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
          Toast("评价成功～");
          return;
        }
          this.$router.go(-1);       
          Vue.prototype.$confirmLogin({
              name: "orderlist",
              query: {
                orderStatus: "ORDER_WAIT_REVIEW"
              }
            });

        console.log(res.data)
        },
        {
        "Content-Type": "application/json"
    }     

      ); 
  }
skuKeyValue
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
        this.skuKeyValue = JSON.parse(res.data.data.detailList[0].skuKeyValue)
        console.log(res.data.data)
        }
      ); 
  }
  


  
    removeByValue(arr, val) {
  
      for (var i = 0; i < arr.length; i++) {
  
        if (arr[i] == val) {
  
          arr.splice(i, 1);
  
          break;
  
        }
  
      }
  
    }
    handleBackGround(img){
    return `background-image:url('${img}');
            background-repeat:no-repeat;
            backgroundPosition:center centert;
            backgroundSize:contain;`
    // backgroundImage:'url(item)', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'
  }
    onRead(file) {
  
      console.log();
  
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
  
        let refundImgs = this.refundObj.refundImgs ?
  
          this.refundObj.refundImgs :
  
          [];
  
        refundImgs.push(res.data.data.filename);
  
        this.refundObj.refundImgs = refundImgs;
  
        console.log("文件上传", res.data.data.filename);
  
      });
  
    }
    delimg(index){
      this.filename.splice(index,1);
    }
    formatStatus(status) {
  
      // ORDER_WAIT_PAY
  
      // ORDER_CANCEL_PAY
  
      // ORDER_WAIT_SENDGOODS
  
      // ORDER_WAIT_RECVGOODS
  
      // ORDER_WAIT_REVIEW
  
      // ORDER_END_GOODS
  
      // ORDER_FINISH
  
      switch (status) {
  
        case "ORDER_WAIT_PAY":
  
          return "未付款";
  
        case "ORDER_CANCEL_PAY":
  
          return "已取消";
  
        case "ORDER_WAIT_SENDGOODS":
  
          return "未发货";
  
        case "ORDER_WAIT_RECVGOODS":
  
          return "未收货";
  
        case "ORDER_END_GOODS":
  
          return "交易结束";
  
        case "ORDER_WAIT_REVIEW" || "ORDER_FINISH":
  
          return "交易完成";
  
      }
  
    }
  
  
  money =''

  
    mounted() {
        this.orderId = this.$route.query.orderId;
        this.getorderdetail();
        console.log("评价");
    }
  
  }
</script>

<style lang="scss" scoped>
  @import "../../style/utils.scss";
  
  .selectType {
  
    border-color: #ffc630 !important;
    color: #ffc630;
  
  }
  
  
  
  .product {
  
    display: flex;
  
    font-size: 16px;
  
    border-bottom: solid 1px #eee;
  
    align-items: center;
  
    padding: 10px;
  
    background-color: #fff;
  
  }
  
  
  
  .selectBox {
  
    border: 1px #e5e5e5 solid;
    padding: 5px 18px;
    border-radius: 6px;

  
  }
  
  
  
  .el-upload--picture-card {
  
    background-color: #fbfdff;
  
    border: 1px dashed #c0ccda;
  
    border-radius: 6px;
  
    box-sizing: border-box;
  
    width: 80px;
  
    height: 80px;
  
    cursor: pointer;
  
    line-height: 146px;
  
    vertical-align: top;
  
    margin: 10px;
    background: url(../../assets/image/添加图片.png) no-repeat;
    background-size: 100%;
  
  }
  
  .el-upload--picture-card i{
        opacity: 0;
  }
  .el-upload--picture-card>i{
    opacity: 1;
  }
  
  .el-upload {
  
    display: inline-block;
  
    text-align: center;
  
    cursor: pointer;
  
    outline: none;
  
  }
  .btn_refund{
    div{
      height:40px;line-height: 40px;width:100px;font-size:14px;margin-bottom: 20px;
    }
    button{
        border:1px solid #e6e6e6;height:40px;width:155px;margin-right:28px;font-size:14px;
    }
    .border_yellow{
      border:1px solid #FCCB52;color: #FCCB52
    }
  }

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


