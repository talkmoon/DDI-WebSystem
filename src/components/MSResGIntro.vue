<template>



  <section class="p-5 ">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <!-- -md让其缩小上下排列 -->
          <img src="../img/MSResGpic.jpg" alt="1" class="img-fluid">
          <p></p>
          <p><h3>-------------MSResG模型框架图---------------</h3></p>
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
        <div class="col-md p-5">
          <h1>MSResG模型：</h1>
          <p class="lead">DrugBank数据库是药品信息领域的权威数据库，该数据库以药物为中心，提供丰富的生物信息学和化学信息学资源，如化学结构、靶标、副作用、临床应用和不良反应等，目前，DrugBank数据库已广泛应用于药物设计和开发、药物-药物相互作用预测等领域。
          </p>
          <router-link to="/MSResGUse">
            <a class="btn btn-light">点击</a>
          </router-link>

        </div>
      </div>
    </div>
  </section>





  <!--contact-->
  <footer class="p-5 bg-dark text-white text-center">
    <div class="container">
      <p class="lead">Copyright &copy; GuoLin</p>
    </div>
  </footer>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>


