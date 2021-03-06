import axios from 'axios';
import Vue from 'vue';
import { Toast } from "vant";
import { MutationTreeType } from '../store/mutation-types';
import Wintabe from "../components/Wintabe.vue";
// const bizUrl = "https://sr.cncloud.com/qichang"
const bizUrl = "https://m.yourhr.com.cn/zhongyi";


axios.interceptors.response.use(response => {
    // 系统报错
    if (response.data && response.data.err !== 0) {
        console.log('正常')
    }

    return response;
}, error => {
 
    if(!error.response){
        return Promise.resolve({
            data:{
                message:"网络连接失败，请检查网络。",
                status:404
            }
        })
    }
    return Promise.resolve(error.response)
})



//this.axios.post("http://119.23.44.223:8080/game/ssq/bet?token=3883e10d01054a6996e9b601dc4d368f&userid=cyl45dbcb75d39b4e47aaccf77d1bde22ef",

const querystring = require('querystring');

class ResponseObject {
    returnCode: number;
    message: string;
    data: object;
}

export function json2Query(json) {
    let str = [];
    for (var p in json) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
}

export const reqOrderId = () => {
    return "orderid";
};


export const reqFormUpload = (url, form, callBack) => {
    axios.post(bizUrl + url, form, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(res => {
            callBack(res);

            if (res == null || res.data == null) {
                console.error('网络请求失败');
                callBack(null);
                return;
            }
        }
        )
        .catch(error => {
            console.log(error);
        });
};



export const reqUrlGet = (url, data, callBack) => {
    axios.get(bizUrl + url + '?' + querystring.encode(data))
        .then(res => {
            if (res.data.status == 400 && res.data.message == "账号已在其他设备登录") {
                Toast(res.data.message);

                // window['myvue'].$store.commit(MutationTreeType.TOKEN_INFO, {
                //     userId: "",
                //     token: ""
                // })
                localStorage.removeItem(MutationTreeType.TOKEN_INFO);

                if (window.confirm('账号已在其他设备登录,是否重新登录?')) {
                    window['myvue'].$router.push({ name: 'login' });
                    return true;
                }
                return;
            }
            callBack(res);
            if (res == null || res.data == null) {
                console.error('网络请求失败');
                callBack(null);
                return;
            }
        }
        )
        .catch(error => error);

};

export const confirmLogin = (obj: any) => {

    if ((window['myvue'].$store.getters[MutationTreeType.TOKEN_INFO].userId || '') == '' || (window['myvue'].$store.getters[MutationTreeType.TOKEN_INFO].token || '') == '') {
        obj = { name: 'login' };
    }
    window['myvue'].$router.push(obj);

};


export const reqUrlGet1 = (url, data, callBack) => {

    axios.get(bizUrl + url + '?' + querystring.encode(data))
        .then(res => {
            let resp: ResponseObject = new ResponseObject();
            if (res.status !== 200) {
                resp.returnCode = res.status;
                resp.message = `http返回状态码错误，错误码是${res.status}`;
                resp.data = res;
                callBack(resp);
            } else {
                resp.returnCode = res.data.status;
                resp.message = res.data.message;
                resp.data = res.data.data;
                callBack(resp);
            }
        }).catch(error => {
            let resp: ResponseObject = new ResponseObject();
            let message = error.toString();
            console.error(message);

            resp.returnCode = 500
            resp.message = message
            resp.data = {}
            callBack(resp);
        })
};

export const reqFormPost = (url, data, callBack, headers) => {
    if (!headers) {
        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        data = querystring.encode(data);
    }
    axios.post(bizUrl + url, data,
        {
            headers: headers
        })
        .then(res => {


            if (res.data.status == 401 && res.data.message == "用户信息未找到") {
                console.log(url)
                let a:any = window;
                a.loginOut();
                a.changeLoginModel();
                return;
            }
            if (res.data.status == 400 && res.data.message == "账号已在其他设备登录") {
                console.log(url)
                
                let a:any = window;
                a.loginOut();
                a.changeLoginModel();
                return;
            }
            callBack(res);

            if (res == null || res.data == null) {
                console.error('网络请求失败');
                callBack(null);
                return;
            }
        }
        )
        .catch(error => {
            Toast(error.toString())
        });
};
export const reqFormPost1 = (url, data, callBack, headers) => {
    if (!headers) {
        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        data = querystring.encode(data);
    }
    console.log('data',data)
    axios.post(bizUrl + url, data,
        {
            headers: headers
        })
        .then(res => {
            let resp: ResponseObject = new ResponseObject();
            if (res.status !== 200) {
                resp.returnCode = res.status;
                resp.message = `http返回状态码错误，错误码是${res.status}`;
                resp.data = res;
                callBack(resp);
            } else {


                if (res.data.status == 401 && res.data.message == "用户信息未找到") {
                console.log(url)
                
                    let a:any = window;
                    a.loginOut();
                    a.changeLoginModel();
                    return;
                }
                
                if (res.data.status == 400 && res.data.message == "账号已在其他设备登录") {
                console.log(url)
                
                    let a:any = window;
                    a.loginOut();
                    a.changeLoginModel();
                    return;
                }

                
                resp.returnCode = res.data.status;
                resp.message = res.data.message;
                resp.data = res.data.data;
                callBack(resp);

            }

        }).catch(error => {
            let resp: ResponseObject = new ResponseObject();
            let message = error.toString();
            console.error(message);

            resp.returnCode = 500
            resp.message = message
            resp.data = {}
            callBack(resp);


        })
};


export default {
    install(Vue) {
        Vue.prototype.$reqUrlGet = reqUrlGet
        Vue.prototype.$reqUrlGet1 = reqUrlGet1
        Vue.prototype.$reqFormPost = reqFormPost
        Vue.prototype.$reqFormPost1 = reqFormPost1
        Vue.prototype.$confirmLogin = confirmLogin
        Vue.prototype.$reqFormUpload = reqFormUpload
    }
    // reqUrlGet:reqUrlGet,
    // reqFormPost:reqFormPost,
    // reqFormUpload:reqFormUpload
}
