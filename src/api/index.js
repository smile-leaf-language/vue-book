import axios from "axios";
//默认请求的路径
axios.defaults.baseURL="http://localhost:3000";

//拦截器   统一拦截结果把结果处理成res.data
axios.interceptors.response.use((res)=>{
  return res.data;
});

//获取轮播图数据
export let getSliders = () => {
  return axios.get("/sliders");
}
