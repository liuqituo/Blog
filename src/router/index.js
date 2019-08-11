import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import BlogHome from '../components/Blog_home.vue';//1、引入组件
import BlogLife from '../components/Blog_life.vue';//1、引入组件
import BlogTechonology from '../components/Blog_techonology.vue';//1、引入组件
import Aboutme from '../components/About_me.vue';//1、引入组件
import Plugins from '../components/Plugins.vue';//1、引入组件
import Treasure from '../components/Knowledge_treasure.vue';//1、引入组件
import Sign from '../components/Sign.vue';//1、引入组件
import Article from '../components/Article.vue';//1、引入组件
//引入组件子路由
import Carousel from '../components/pluginchild/Carousel';
import Date from '../components/pluginchild/Date'
import Loading from '../components/pluginchild/Loading'
import Paging from '../components/pluginchild/Paging'
import Process from '../components/pluginchild/Process'
import Switcher from '../components/pluginchild/Switcher'
import Location from '../components/pluginchild/Location'
export default new Router({
  routes: [
      {path:'/home',component:BlogHome},
      {path:'/life',component:BlogLife},
      {path:'/techonology',component:BlogTechonology},
      {path:'/aboutme',component:Aboutme},
      {path:'/treasure',component:Treasure},
      {path:'/sign',component:Sign},
      {path:'/article/:id',component:Article},
      {path:'/plugins',component:Plugins,
          children:[
            {path:'Carousel',component:Carousel},
            {path:'Date',component:Date},
            {path:'Loading',component:Loading},
            {path:'Paging',component:Paging},
            {path:'Process',component:Process},
            {path:'Switcher',component:Switcher},
            {path:'Location',component:Location},
            {path:'',component:Loading},
          ]
      },
  ]
})
