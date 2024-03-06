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
      :default-active="activeIndex"
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
    <router-link to="/DrugIntroduce">
    <el-menu-item index="1">药物相互作用介绍</el-menu-item>
    </router-link>
    <router-link to="/nowdatabase">
    <el-menu-item index="2">现有数据库</el-menu-item>
    </router-link>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/demo2">
      <el-menu-item index="3">模型预测</el-menu-item>
    </router-link>
    <router-link to="/search">
      <el-menu-item index="4">相互作用查询</el-menu-item>
    </router-link>
    <el-sub-menu index="5">
      <template #title>工作台</template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
      <el-sub-menu index="5-4">
        <template #title>item four</template>
        <el-menu-item index="5-4-1">item one</el-menu-item>
        <el-menu-item index="5-4-2">item two</el-menu-item>
        <el-menu-item index="5-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>

</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
