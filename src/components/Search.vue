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
  <div id="building3"></div>

      <section class="p-6">
        <div id="search">

          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="13">
              <p></p>
              <h2>药物-药物相互作用查询</h2>
              <span>------------------------------------------------</span>
              <h5 class="lead">
                在此，您可以通过输入想要查询的两种药物直接查询药物-药物相互作用，我们会为您提供现有数据库中已证实的药物-药物相互作用以及通过MSResG模型和DualC模型
                预测出的药物-药物相互作用，如果遇到现有数据库中没有被证实但是方法可以预测的药物-药物相互作用，
                您可以重点关注，进行进一步的实验室验证或者在联合使用时重点关注。
              </h5>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="13">
              <p></p>
              <div class="form-floating mb-3">
                <input type="email" v-model="input1" class="form-control" id="floatingInput" placeholder="name@example.com">
                <!--          {{input1}}-->
                <label for="floatingInput">第一种药物</label>
              </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="13">
              <p></p>
              <div class="form-floating mb-3">
                <input type="email" v-model="input2" class="form-control" id="floatingInput" placeholder="name@example.com">
                <!--          {{input2}}-->
                <label for="floatingInput">第二种药物</label>

              </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="13">
              <p></p>
              <div class="grid-content bg-purple-light">
                <!--          <el-button type="primary" @click="search">查找药物-药物相互作用</el-button>-->
                <el-button type="primary"  @click="search" round size="large">查找药物-药物相互作用</el-button>
                <br>
                <br>
                <br>
                <!--          <button type="button" @click="search" class="btn btn-outline-secondary">查找药物-药物相互作用</button>-->
                <el-divider > <p class="fs-3">药物-药物相互作用查询结果</p></el-divider>
              </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="13">

              <div>
                <p></p>
                <!--          <h3>数据查询结果</h3>-->
                <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="name1" label="药物1名称" width="140" />
                  <el-table-column prop="name2" label="药物2名称" width="140" />
                  <el-table-column prop="number1" label="药物1编号" width="140"/>
                  <el-table-column prop="number2" label="药物2编号" width="140"/>
                  <el-table-column prop="database_ddi" label="数据库中DDI" width="150"/>
                  <el-table-column prop="database_ddi_description" label="数据库中DDI情况" width="150"/>
                  <el-table-column prop="ddi_prob" label="预测所得的DDI可能性" width="170"/>
                  <el-table-column prop="ddi_prob_description" label="预测所得的DDI情况" width="180"/>
                  <el-table-column prop="advise" label="给出建议" />
                </el-table>
              </div>

            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>



        </div>
      </section>


  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="../assets/img/baise.png" alt="1" class="img-fluid">
          <img src="../assets/img/baise1.png" alt="1" class="img-fluid">
          <img src="../assets/img/baise2.png" alt="1" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
  <!--contact-->



  <section id="contact">
    <div class="lvjing">
      <div class="container">
        <div class="row">
          <div class="col-md-7 wow fadeInLeft animated">
            <h2>
              <span class="glyphicon glyphicon-send"></span>
              &nbsp;
              联系我们
            </h2>
<!--            <p>-->
<!--              药物-药物相互作用预测是药物领域的重要问题，陕西师范大学计算机科学学院生物信息大数据实验室致力于研究基于深度学习的药物-药物相互作用预测方法及其他生物信息领域问题，具体内容详见雷秀娟教授谷歌学术。-->
<!--            </p>-->
            <address>
              <p>
                <span class="glyphicon glyphicon-map-marker"></span>
                &nbsp;
                本实验室致力于研究基于深度学习的药物-药物相互作用预测方法及其他生物信息领域问题
              </p>
              <p>
                <span class="glyphicon glyphicon-map-marker"></span>
                &nbsp;
                具体内容详见雷秀娟教授谷歌学术：<a href="https://so2.cljtscd.com/citations?user=baqzftMAAAAJ&hl=zh-CN&oi=ao" target="_blank">点击跳转查看学术成果</a>
              </p>
              <p>
                <span class="glyphicon glyphicon-map-marker"></span>
                &nbsp;
                地址: 陕西省西安市长安区西长安街陕西师范大学文津楼3527实验室。
              </p>
              <p>
                <span class="glyphicon glyphicon-earphone"></span>
                &nbsp;
                电话: 15991503910
              </p>
              <p>
                <span class="glyphicon glyphicon-envelope"></span>
                &nbsp;
                邮箱: 20212743@snnu.edu.com
              </p>
              <p>
                <span class="glyphicon glyphicon-envelope"></span>
                &nbsp;
                GitHub: <a href="https://github.com/talkmoon/DDI-WebSystem" target="_blank">https://github.com/talkmoon/DDI-WebSystem</a>
              </p>
            </address>
          </div>
          <div class="col-md-5 wow fadeInRight animated">
            <img align="center" src="../assets/img/contactus.png" class="img-responsive" alt="联系我们"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--contact-->

</template>

<style>

#building3{
   background:url("../assets/img/beijing3.png");
   width:100%;
   height:100%;
   position:fixed;
   background-size:100% 100%;
   z-index: -1;
   top: 0;
   left: 0;
 }


</style>