<template>

  <div id="building2"></div>
  <body>


<!--  <section class="p-5">-->
<!--    <div class="container">-->
<!--      <div class="row g-4">-->
<!--        &lt;!&ndash; g-4 gap 的意思 加间距 &ndash;&gt;-->
<!--        <div class="col-md">-->
<!--          &lt;!&ndash; -md 可以让小于mid时候row的样式不生效 &ndash;&gt;-->
<!--          <div class="card bg-light text-dark">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="card-title">-->
<!--                第一个-->
<!--              </div>-->
<!--              <div class="card-text">-->
<!--                zhelihusdwadwad-->
<!--              </div>-->
<!--              <img src="../img/showcase.svg" alt="showcase" class="w-50">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md">-->
<!--          <div class="card bg-secondary text-light">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="card-title">-->
<!--                第二个-->
<!--              </div>-->
<!--              <div class="card-text">-->
<!--                diergemoxin-->
<!--              </div>-->
<!--              <img src="../img/showcase.svg" alt="showcase" class="w-50">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md">-->
<!--          <div class="card bg-secondary text-light">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="card-title">-->
<!--                第三个-->
<!--              </div>-->
<!--              <div class="card-text">-->
<!--                ababababab-->
<!--              </div>-->
<!--              <img src="../img/showcase.svg" alt="showcase" class="w-50">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">

        <div class="col-md">
          <!-- -md让其缩小上下排列 -->
          <img src="../img/DDIex1.png" alt="1" class="img-fluid" >
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
        <div class="col-md p-5">
          <h1>药物-药物相互作用是什么？</h1>
          <span>---------------------------------------------------------------------</span>
          <h2></h2>
          <h2></h2>
          <p class="lead">药物-药物相互作用（Drug Drug Interaction, DDI）是指病人同时或在一定时间内由先后服用两种或两种以上药物后所产生的复合效应，可使药效加强或副作用减轻，也可使药效减弱或出现不应有的毒副作用。作用加强包括疗效提高和毒性增加，作用减弱包括疗效降低和毒性减少。因此，临床上在进行联合用药时，应注意利用各种药物的特性，充分发挥联合用药中各个药物的药理作用，以达到最好的疗效和最少的药品不良反应，从而提高用药安全。按照发生的原理可分为药物代谢动力学或/和药效学相互作用，药效学相互作用结果包括无关、协同、相加和拮抗4种；药动学相互作用主要由于药物在吸收、分布、代谢和排泄方面的相互影响引起。
          </p>

          <a href="https://baike.baidu.com/item/%E8%8D%AF%E7%89%A9%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8/9716813?fr=ge_ala" class="btn btn-light">查看更多</a>
        </div>
      </div>
    </div>
  </section>
  <section class="p-5  bg-dark text-light">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <h1>药物-药物相互作用常见的研究领域有哪些？</h1>
        <span>--------------------------------------------------------------------------------------------------------------</span>
        <h2></h2>
        <h2></h2>
        <div class="col-md">
          <h2>药物联合治疗：</h2>
          <p class="lead">随着批准的药物数量快速增加，药物联合治疗逐渐成为治疗癌症、心脑血管疾病等多种疾病的有效方法。我们乐见于有益结果，让药物组合产生“1+1>2”的治疗增效作用，但实际上DDI的发生往往也会导致一些意想不到的不良事件。所以对DDI的研究很有必要。
          </p>
<!--          <p>-->
<!--            来自百度百科-->
<!--          </p>-->
<!--          <a href="https://baike.baidu.com/item/%E8%8D%AF%E7%89%A9%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8/9716813?fr=ge_ala" class="btn btn-light">查看更多</a>-->
        </div>
        <div class="col-md p-5">
          <!-- -md让其缩小上下排列 -->
          <h2>药物研发过程：</h2>
          <p class="lead">药物研发主要分为四个步骤，药物设计、临床前研究、临床试验和上市，其中DDI的预测在每个步骤中都十分重要，这涉及到药物的安全性和使用广泛性，但受限于DDI实验鉴别方法周期长，成本高，我们更倾向于选择计算方法进行DDI预测。
          </p>
          <!-- 加上img-fluid 不会超出div的范围 -->
        </div>
      </div>
    </div>
  </section>
  <footer class="p-5 bg-dark text-white text-center">
    <div class="container">
      <p class="lead">Copyright &copy; GuoLin</p>
    </div>
  </footer>


  </body>
</template>
<script setup>
</script>

<style>
#building2{
  background:url("src/img/beijing2.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  z-index: -1;
  top: 0;
  left: 0;
}


</style>