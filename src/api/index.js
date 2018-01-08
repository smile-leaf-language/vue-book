import axios from "axios";
//默认请求的路径
axios.defaults.baseURL="http://localhost:3000";

//拦截器   统一拦截结果把结果处理成res.data
axios.interceptors.response.use((res)=>{
  return res.data;
});

// 获取轮播图数据 , 返回的是一个promise对象
export let getSliders = () =>{
  return axios.get('/sliders')
};

// 获取热门图书接口
export let getHotBook = () =>{
  return axios.get('/hot');
};
// 获取全部图书
export let getBooks = () =>{
  return axios.get('/book');
};

// 删除某一本图书
export let removeBook = (id) =>{
  return axios.delete(`/book?id=${id}`);
};

// 获取某一本书
export let findOneBook = (id) =>{
  return axios.get(`/book?id=${id}`);
};
//首页获取sliders和hotBook
export let getAll = () =>{
  return axios.all([getSliders(),getHotBook()]);
};
