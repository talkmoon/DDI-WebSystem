<script lang="ts">
export default {
    name:'App',
}
</script>

<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import Search from "./components/Search.vue";
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
import { reactive, toRefs } from 'vue'
// import {useRouter} from "vue-router";
// const router = useRouter()
// const user = () => {
//
//   router.push('/demo')
//
// }
const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)

}
</script>
<template>

  <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      v-show="$route.name!=='login'"
  >
    <el-menu-item index="0">
      <img
          style="width: 70px"
          src="./assets/logo.svg"
          alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />

    <el-menu-item index="1">
      <router-link to="/DrugIntroduce" tag="p">药物相互作用介绍</router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link to="/nowdatabase">现有数据库</router-link>
    </el-menu-item>

    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->


      <el-menu-item index="4">
        <router-link to="/search">相互作用查询</router-link>
      </el-menu-item>

    <el-sub-menu index="5">
      <template #title>模型预测</template>
      <el-menu-item index="5-1">
        <el-menu-item index="5-1-1" tag="a">
          <router-link to="/MSResGIntro" class="link">MSResG模型</router-link>
        </el-menu-item>
      </el-menu-item>
      <el-menu-item index="5-2">
        <el-menu-item index="5-2-1">
          <router-link to="/DualCIntro" class="link">DualC模型</router-link>
        </el-menu-item>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="6">
      <el-avatar :size="40" :src="circleUrl" />
      <el-sub-menu index="7">
        <el-menu-item index="7-1">
          <el-menu-item index="7-1-1" tag="a">
            <router-link to="/MSResGIntro" class="link">个人中心</router-link>
          </el-menu-item>
        </el-menu-item>
        <el-menu-item index="7-2">
          <el-menu-item index="7-2-1">
            <el-badge :value="2" class="item">
              <router-link to="/DualCIntro" class="link">消息</router-link>
            </el-badge>
          </el-menu-item>
        </el-menu-item>
        <el-menu-item index="8-2">
          <el-menu-item index="8-2-1">
            <router-link to="/DualCIntro" class="link">退出</router-link>
          </el-menu-item>
        </el-menu-item>
      </el-sub-menu>

    </el-menu-item>
  </el-menu>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view/>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
a {
  text-decoration: #ffd04b;
}
.link {
  text-decoration: #ffd04b;
  color: #ffffff;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
