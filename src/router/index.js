import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);
//登陆
// const Home   = () => import('@/pages/Home')
import Home  from  '@/pages/Home';
import Popup  from  '@/pages/popup/Popup';

let router =  new Router({
  mode :'history',
  // base : '/'+process.env.ROUTER_BASE,
  routes: [
    //登陆
    {path: '/home',name: 'Home',component: Home,meta:{title:'列表'}},
    {path: '/popup',name: 'Popup',component: Popup,meta:{title:'popup'}},
  ]
});


export {router};


//全局的路由钩子函数。所有的路由，进入之后都会执行该方法！
router.afterEach((to,from,next) => {
  //遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0,0);
});
