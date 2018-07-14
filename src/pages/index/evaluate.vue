<template>
  <!-- 商品评价 -->
  <div>
    <div class="rightTop">
        商品评价
    </div>
    <div class="flex evaList">
        <div class="shopInfo">
          <div><img src="../../assets/image/LOGO.png" style="width:135px;height:135px;border:1px solid #ddd;"/></div>
          <h4>泰国制作灯泡</h4>
          <p>规格：灯饰</p>
        </div>
        <div class="shopText">
            <div class="flex shopStar">
              <div>评分</div>
              <div>
                <img src="../../assets/image/评价黄.png"/><img src="../../assets/image/评价黄.png"/><img src="../../assets/image/评价灰.png"/>
                <img src="../../assets/image/评价灰.png"/><img src="../../assets/image/评价灰.png"/>
              </div>
              <div>非常满意</div>
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
                style="margin-top: 10px;width:155px;height:45px;border:1px solid #ffc630;color:#ffc630;text-align:center;font-size: 18px;line-height: 45px;">提交</div>
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
