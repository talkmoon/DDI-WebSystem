<template>

  <div id="building4"></div>

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
          <h2>MSResG模型：</h2>
            <el-timeline style="max-width: 600px">
              <el-timeline-item timestamp="MSResG模型的引入背景" placement="top">
                <el-card>
                  <h5 class="lead">基于深度学习的药物-药物相互作用预测通常使用经典的图卷积网络从药物-药物相互作用网络中提取药物的潜在拓扑特征。
                    现如今，经典的图卷积网络在现实领域的各项研究中都发展迅速，但是它容易出现梯度消失的问题，所以经典的图卷积网络通常局限于比较浅的深度学习模型，
                    在实际研究中，常见的图卷积网络层数大多为1至3层，所以引入残差图卷积网络，旨在提高信息的传递效率和准确性、提高模型的泛化能力。
                    又因为药物-药物相互作用网络中只包含药物之间的相互作用信息，所以本章还引入了基于多种药物特征的药物相似性信息，
                    包括药物靶标相似性、药物酶相似性、药物子结构相似性和药物通路相似性，用以补充药物拓扑信息的丰富性。
                    基于此，该系统提供一种考虑多源药物特征和残差图卷积网络的药物-药物相互作用预测模型，名为MSResG。
                  </h5>

                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="MSResG模型的介绍" placement="top">
                <el-card>
                  <h5 class="lead">MSResG模型的实现步骤如下：
                    首先，该模型从药物相关数据库中获取药物化学子结构、药物靶标、药物通路和药物酶四种药物特征，并基于此将各个药物表示为二元向量进而计算药物的Jaccard相似性，
                    由此可以获得药物化学子结构相似性、药物靶标相似性、药物通路相似性和药物酶相似性，为了综合考虑不同的药物特征，
                    求取平均值的方式来进行相似性融合得到药物综合相似性网络。然后，为了补充药物-药物相互作用网络的信息，将药物综合相似性网络与药物-药物相互作用网络相结合，
                    构建为异构网络。最后，使用图自编码器对异构网络进行编码和解码以实现药物-药物相互作用预测，编码过程即是使用残差图卷积网络从异构网络中学习药物的潜在拓扑特征向量，
                    这些特征向量既包含药物的相似性信息，也包含药物的相互作用信息，解码过程则是重建网络以实现对潜在药物-药物相互作用的预测。
                  </h5>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp=" " placement="top">
                <el-timeline-item timestamp="使用" placement="top">
                  <el-card>
                    <router-link to="/MSResGUse">
                      <a class="btn btn-secondary" >点击此处使用MSResG模型进行训练与预测</a>
                    </router-link>
                  </el-card>
                </el-timeline-item>

            </el-timeline-item>
            </el-timeline>



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

<style type="text/css">
h5 {
  text-align: justify;
}
</style>

<style>

#building4{
  background:url("src/img/beijing5.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  z-index: -1;
  top: 0;
  left: 0;
}

</style>
