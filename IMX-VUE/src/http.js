import axios from "axios";
import router from "./router"
// 请求拦截
axios.interceptors.request.use(config=>{
    if (localStorage.userInfo) {
        config.headers.Authoriztion = localStorage.userInfo;
    }
    return config;
},error=>{
    return Promise.reject(error);
})
//响应拦截
axios.interceptors.response.use(response=>{
    return response
},error=>{
    const { status } = error.response;
    if (status==401) {
        console.log("token过期，请重新登录！")
        localStorage.removeItem("userInfo");
        router.push('/Login')
    }
    console.log(error.response.data);
    return Promise.reject(error);
})
export default axios;