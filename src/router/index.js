import { createRouter, createWebHashHistory } from 'vue-router'

import nowdatabase from '../components/nowdatabase.vue'
import demo2 from '../components/demo2.vue'
import search from "@/components/Search.vue";
import drugintroduce from '../components/DrugIntroduce.vue'
import demo1 from "@/components/demo1.vue";






// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 3.1 通过 history 属性，指定路由的工作模式
    history: createWebHashHistory(),
    // 3.2 通过 routes 数组，指定路由规则
    // path 是 hash 地址，component 是要展示的组件
    routes: [
        { path: '/nowdatabase', component: nowdatabase },
        { path: '/demo2', component: demo2 },
        { path: '/demo1', component: demo1 },
        { path: '/search', component: search },
        { path: '/drugintroduce', component: drugintroduce}
    ]
})

// 4、向外共享路由对象
export default router



