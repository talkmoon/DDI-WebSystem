<template>

  <div id="building5"></div>

  <section class="p-5 bg-body-secondary text-dark">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <h2>DualC模型引入</h2>
        <span>--------------------------------------------------------------------------------------------------------------</span>
        <h5 class="lead">
          MSResG模型借助药物的拓扑特征进行药物-药物相互作用预测。实际上除了药物拓扑信息外，还有很多其他的药物信息值得考虑，如药物结构信息，药物副作用信息、药物靶标信息等，
          考虑到药物-药物相互作用预测领域中被广泛应用的“相似的药物具有相似的药物-药物相互作用关系”这一假设，所以利用药物结构信息补充药物拓扑信息，
          富药物的潜在特征向量。由经典的图卷积网络公式可知，使用L层图卷积网络提取特征之后，结点容易出现信息丢失或信息过度平滑的问题，信息丢失是指随着层数的增加，
          部分结点的特征可能会受到周围结点特征的覆盖或稀释，导致部分重要信息丢失；信息过度平滑是指随着层数的增加，不同结点的特征表示可能会逐渐趋同，使得结点之间的差异性减弱，
          影响了模型的表达能力。所以引入层注意力机制，使用具有层注意力机制的图卷积网络对所提取到的各层药物特征综合考虑，基于此，
          本系统中该方法介绍一种基于药物拓扑信息和结构信息的双特征提取的药物-药物相互作用预测方法，名为DualC。
        </h5>
      </div>
    </div>
  </section>


  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="../img/DualCpic.jpg" alt="1" class="img-fluid">
          <p></p>
          <p><h3>---------------DualC模型框架图----------------</h3></p>
        </div>

        <div class="col-md p-5">
          <h2>DualC模型介绍</h2>
          <el-timeline style="max-width: 600px">
            <el-timeline-item timestamp="" placement="top">
              <el-card>
                <h5 class="lead">
                              DualC是一种基于双特征提取的药物-药物相互作用预测方法，利用具有层注意力机制的GCN和1D-CNN分别提取药物的拓扑信息和结构信息。
                              DualC的整体框架图如图4-1所示：首先，从数据库中获得药物-药物相互作用网络，并借助药物靶标特征计算药物靶标相似性，然后将其结合构建为异构网络。
                              其次借助药物化学子结构特征计算药物化学子结构相似性矩阵。然后，利用具有层注意机制的GCN从药物异构网络中提取药物的拓扑特征，
                              并基于“相似的药物具有相似的药物-药物相互作用关系”这一假设，利用1D-CNN从药物的化学子结构相似性矩阵中提取药物的结构信息。
                              最后，将药物的拓扑信息特征和结构信息特征进行拼接，使用sigmoid函数实现药物-药物相互作用预测。
                </h5>

              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="" placement="top">
              <el-card>
                <router-link to="/MSResGUse">
                  <a class="btn btn-secondary" >点击此处使用MSResG模型进行训练与预测</a>
                </router-link>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp=" " placement="top">
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
#building5{
  background:url("src/img/beijing6.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>

