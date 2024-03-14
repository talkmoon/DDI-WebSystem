<template>

  <div id="building"></div>

  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <!-- -md让其缩小上下排列 -->
          <img src="../assets/img/DrugBank.png" alt="1" class="img-fluid">
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
        <div class="col-md p-5">
          <h2>DrugBank数据库</h2>
          <p class="lead">DrugBank数据库是药品信息领域的权威数据库，该数据库以药物为中心，提供丰富的生物信息学和化学信息学资源，如化学结构、靶标、副作用、临床应用和不良反应等，目前，DrugBank数据库已广泛应用于药物设计和开发、药物-药物相互作用预测等领域。
          </p>
          <a href="https://go.drugbank.com/" class="btn btn-light">查看更多DrugBank数据库信息</a>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5  bg-body-secondary text-dark">
    <div class="container">
      <div class="row align-items-center justify-content-between">

        <div class="col-md">
          <h2>PubChem数据库</h2>
          <p class="lead">PubChem数据库是一个公共化学数据库，该数据库关注全球范围内的化合物信息，介绍了化学结构、标识符、化学和物理性质、生物活性、毒性数据等信息，目前，DrugBank数据库在药物设计和开发、毒性评估与预测等领域都有广泛应用。
          </p>
          <a href="https://pubchem.ncbi.nlm.nih.gov/" class="btn btn-light">查看更多PubChem数据库信息</a>
        </div>
        <div class="col-md p-5">
          <!-- -md让其缩小上下排列 -->
          <img src="../assets/img/PubChem.png" alt="1" class="img-fluid">
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
      </div>
    </div>
  </section>



  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">

        <div class="col-md">
          <!-- -md让其缩小上下排列 -->
          <img src="../assets/img/KEGG.png" alt="1" class="img-fluid">
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
        <div class="col-md p-5">
          <h2>KEGG数据库</h2>
          <p class="lead">KEGG数据库是一个综合性的生物信息学数据库，KEGG数据库可以分为16个主要数据库，如生物通路数据库、药物信息数据库等，比如生物通路数据库包含广泛的生物化学和代谢通路信息;现如今，KEGG数据库广泛应用于药物研究和临床医学等领域。</p>
          <a href="https://www.kegg.jp/" class="btn btn-light">查看更多KEGG数据库信息</a>
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


<!--  <section id="contact">-->
<!--    <div class="lvjing">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-md-7 wow fadeInLeft animated">-->
<!--            <h2>-->
<!--              <span class="glyphicon glyphicon-send"></span>-->
<!--              &nbsp;-->
<!--              聯繫我們-->
<!--            </h2>-->
<!--            <p>-->
<!--              栢能科技集團 1997 年於香港成立，以卓越的研發能力和頂尖生產技術，屹立於行業前列地位。我們產品線多元化，現已擴展到圖像顯示卡、迷你電腦、主機板、嵌入式系統及電競硬件等多種產品類別。同時，栢能亦為世界知名品牌提供一站式的電子專業製造服務（EMS）。-->
<!--            </p>-->
<!--            <address>-->
<!--              <p>-->
<!--                <span class="glyphicon glyphicon-map-marker"></span>-->
<!--                &nbsp;-->
<!--                地址: 香港新界沙田火炭山尾街18-24號沙田商業中心19樓-->
<!--              </p>-->
<!--              <p>-->
<!--                <span class="glyphicon glyphicon-earphone"></span>-->
<!--                &nbsp;-->
<!--                電話: (852) 2799 8011-->
<!--              </p>-->
<!--              <p>-->
<!--                <span class="glyphicon glyphicon-envelope"></span>-->
<!--                &nbsp;-->
<!--                電郵: <a href="mailto:inquiry@pcpartner.com" target="_blank">inquiry@pcpartner.com</a>-->
<!--              </p>-->
<!--            </address>-->
<!--          </div>-->
<!--          <div class="col-md-5 wow fadeInRight animated">-->
<!--            <img align="right" src="../img/contactus.png" class="img-responsive" alt="聯繫我們"/>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--  &lt;!&ndash;contact&ndash;&gt;-->

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}


 #building{
   background:url("../assets/img/beijing1.png");
   width:100%;
   height:100%;
   position:fixed;
   background-size:100% 100%;


   z-index: -1;
   top: 0;
   left: 0;

   //-webkit-filter: opacity(38%);
   //filter: opacity(38%);
 }


</style>
