 <template>
  <div class="tab-contents" style="height:-webkit-fill-available;background-color:#f3f3f3;">
    <comhead ref="comhead" isLeftIcon="icon-zuo" leftIconName="angle-left" @leftClick="false"  title="修改密码" isRightIcon="true" ></comhead>

    <van-cell-group v-if="updatename === 'password'">
        <van-field v-model="oldPassword" type="password" label="原密码" placeholder="请输入原密码" />
        <van-field v-model="newPassword" type="password" label="新密码" placeholder="请输入新密码" />
        <van-field v-model="againnewPassword" type="password" label="重新新密码" placeholder="请再次输入新密码" />
    </van-cell-group>

    <van-cell-group v-if="updatename === 'nickName'">
        <van-field v-model="nickName" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>

    <van-radio-group v-model="sex" v-if="updatename === 'sex'">
      <van-cell-group>
        <van-cell><van-radio name="男">男</van-radio></van-cell>
        <van-cell><van-radio name="女">女</van-radio></van-cell>
      </van-cell-group>
    </van-radio-group>
    
    <div style="margin-top:20px;">
        <van-button size="large" @click="updatepassword()"  v-if="updatename === 'password'">确定修改</van-button>
        <van-button size="large" @click="updateinfo()"  v-if="updatename === 'sex'||updatename === 'nickName'">修改</van-button>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mixin from "../../config/mixin";
import { Action } from "vuex-class";
import { Toast } from "vant";
// import { recommendList } from '../../service/getData';
import comhead from "../../components/Comhead.vue";

@Component({
  components: { comhead },
  mixins: [mixin]
})
export default class update_info extends Vue {
  nickName="";
  sex="";
  oldPassword="";
  newPassword="";
  againnewPassword="";
  updatename="";
  updatepassword() {
    if (this.oldPassword == "") {
      Toast('请输入原密码');
      return;
    }
    if (this.newPassword == "") {
      Toast('新密码不能为空');
      return;
    }
    if (this.newPassword !== this.againnewPassword ) {
      Toast('两次输入密码不一致');      
      return;
    }
    Vue.prototype.$reqFormPost(
      "/user/password/update",
      {
        userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        oldPassword:require('crypto').createHash('md5').update(this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].loginName+this.oldPassword).digest('hex'),
        newPassword:require('crypto').createHash('md5').update(this.$store.getters[Vue.prototype.MutationTreeType.TOKEN_INFO].loginName+this.newPassword).digest('hex'),
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        console.log(res);

        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        Toast('修改成功');        
        console.log('res.data',res.data)
        this.$router.go(-1);
      }
    );
  }
  updateinfo(){
    if (this.nickName == "" && this.sex == "") {
      return;
    }
    if(this.nickName !== ""){
      Vue.prototype.$reqFormPost(
      "/user/update",
      {
        userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        nickName:this.nickName
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        console.log(res);

        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        console.log('res.data',res.data)
        this.$router.go(-1);
      }
    );
    }
    if(this.sex !== ""){
      Vue.prototype.$reqFormPost(
      "/user/update",
      {
        userId: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].userId,
        token: this.$store.getters[
            Vue.prototype.MutationTreeType.TOKEN_INFO
        ].token,
        sex:this.sex
      },
      res => {
        if (res == null) {
          console.log("网络请求错误！");
          return;
        }
        console.log(res);

        if (res.data.status != 200) {
          console.log(
            "需控制错误码" + res.data.status + ",错误信息：" + res.data.message
          );
          Toast(res.data.message);
          return;
        }
        console.log('res.data',res.data)
        this.$router.go(-1);
      }
    );
    }
  }
  handlePX(CssName, PxNumber) {
    return CssName +":" +this.$store.getters[Vue.prototype.MutationTreeType.SYSTEM].availWidth /750 * PxNumber +"px;";
  }


  mounted() {
    this.updatename = this.$route.query.updatename;
    if(this.$route.query.nickName){
      this.nickName = this.$route.query.nickName
    }
    if(this.$route.query.sex){
      this.sex = this.$route.query.sex
    }
    console.log("收藏页面")
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/utils.scss";
</style>