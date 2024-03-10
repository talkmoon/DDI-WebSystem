<script lang="ts">
export default {
    name:'App',
}
</script>

<script lang="ts" setup>
import Search from "./components/Search.vue";
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
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
  </el-menu>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>

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
</style>
