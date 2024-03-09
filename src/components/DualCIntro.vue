<template>

  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <h1>药物-药物相互作用常见的研究领域有哪些？</h1>
        <span>--------------------------------------------------------------------------------------------------------------</span>
        <h2></h2>
        <h2></h2>
        <h2>药物联合治疗：</h2>
        <p class="lead">随着批准的药物数量快速增加，药物联合治疗逐渐成为治疗癌症、心脑血管疾病等多种疾病的有效方法。我们乐见于有益结果，让药物组合产生“1+1>2”的治疗增效作用，但实际上DDI的发生往往也会导致一些意想不到的不良事件。所以对DDI的研究很有必要。
        </p>
      </div>
    </div>
  </section>

  <section class="p-5 bg-body-secondary text-dark">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <!-- -md让其缩小上下排列 -->
          <img src="../img/DualCpic.jpg" alt="1" class="img-fluid">
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
        <div class="col-md p-5">
          <h2>DrugBank数据库</h2>
          <p class="lead">DrugBank数据库是药品信息领域的权威数据库，该数据库以药物为中心，提供丰富的生物信息学和化学信息学资源，如化学结构、靶标、副作用、临床应用和不良反应等，目前，DrugBank数据库已广泛应用于药物设计和开发、药物-药物相互作用预测等领域。
          </p>
          <router-link to="/DualCUse">
            <a class="btn btn-light">查看更多DrugBank数据库信息</a>
          </router-link>

        </div>
      </div>
    </div>
  </section>

  <!--  <section class="p-5  ">-->
  <!--    <div class="container">-->
  <!--      <div class="row align-items-center justify-content-between">-->

  <!--        <div class="col-md">-->
  <!--          <h2>PubChem数据库</h2>-->
  <!--          <p class="lead">PubChem数据库是一个公共化学数据库，该数据库关注全球范围内的化合物信息，介绍了化学结构、标识符、化学和物理性质、生物活性、毒性数据等信息，目前，DrugBank数据库在药物设计和开发、毒性评估与预测等领域都有广泛应用。-->
  <!--          </p>-->
  <!--          <a href="https://pubchem.ncbi.nlm.nih.gov/" class="btn btn-light">查看更多PubChem数据库信息</a>-->
  <!--        </div>-->
  <!--        <div class="col-md p-5">-->
  <!--          &lt;!&ndash; -md让其缩小上下排列 &ndash;&gt;-->
  <!--          <img src="../img/PubChem.png" alt="1" class="img-fluid">-->
  <!--          &lt;!&ndash; 加上img-fluid 不会超出div的范围 &ndash;&gt;-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->




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


