<script lang="ts" >
import {createApp, ref} from 'vue'
import axios, {get} from "axios";
export default {
  setup() {
    let input1 = ref('')
    let input2 = ref('')
    //表格数据
    let tableData = ref([])

    //axios测试
    //查找数据库POST
    function search(){

      axios.post('http://localhost:8080/postTest2',{name1:input1.value,name2:input2.value})
          .then(response => {
            // 处理响应数据
            //赋值给tableData,.value实现动态相应数据
            //后端返回数据类型为对象需要push（）
            tableData.value.push(response.data)
            console.log(response)
            console.log("POST请求成功")
          })
    }
    return {input1,input2,tableData,search}
  }
}

</script>

<template>
  <div id="search">
    <li>第一种药物</li>
    <el-input v-model="input1" placeholder="请输入药物名称" />
    <p>input1 is : {{input1}}</p>
    <li>第二种药物</li>
    <el-input v-model="input2" placeholder="请输入药物名称" />
    <p>input2 is : {{input2}}</p>
    <el-button type="primary" @click="search">查找现有数据库</el-button>
    <div>
      <h3>数据查询结果</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name1" label="药物1名称" width="180" />
        <el-table-column prop="name2" label="药物2名称" width="180" />
        <el-table-column prop="number1" label="药物1编号" width="180"/>
        <el-table-column prop="number2" label="药物2编号" width="180"/>
        <el-table-column prop="database_ddi" label="数据库中DDI" width="180"/>
        <el-table-column prop="database_ddi_description" label="数据库中药物之间存在相互作用情况" width="80"/>
        <el-table-column prop="ddi_prob" label="预测所得的DDI可能性" width="180"/>
        <el-table-column prop="ddi_prob_description" label="预测所得的DDI情况" width="180"/>
        <el-table-column prop="advise" label="给出建议" />
      </el-table>
    </div>
  </div>
<!--  <div>-->
<!--    <section class="p-5 bg-primary text-light">-->
<!--      <div class="container">-->
<!--        <div class="d-md-flex justify-content-between align-items-center">-->
<!--          <h3 class="mb-3">第一个输入框</h3>-->
<!--          <div class="input-group news-input">-->
<!--            &lt;!&ndash; input-group 可以让按钮和输入框在一起 &ndash;&gt;-->
<!--            &lt;!&ndash; news-input 是自建的宽度 &ndash;&gt;-->
<!--            <input type="text" class="form-control" placeholder="请输入第一种药物">-->
<!--            &lt;!&ndash; placeholder 输入框提示内容 &ndash;&gt;-->
<!--            <button class="btn btn-dark btn-lg">确定</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </section>-->
<!--    <section class="p-5 bg-dark text-light">-->
<!--      <div class="container">-->
<!--        <div class="d-md-flex justify-content-between align-items-center">-->
<!--          <h3 class="mb-3">第二个输入框</h3>-->
<!--          <div class="input-group news-input">-->
<!--            &lt;!&ndash; input-group 可以让按钮和输入框在一起 &ndash;&gt;-->
<!--            <input type="text" class="form-control" placeholder="请输入第二种药物">-->
<!--            <button class="btn btn-primary btn-lg">确定</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </section>-->
<!--  </div>-->
</template>

<style scoped>

</style>