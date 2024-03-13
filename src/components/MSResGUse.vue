<template>

  <div id="building6"></div>

  <!--上侧部分，本页面功能介绍-->
  <section class="p-5 bg-body-secondary text-dark">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <h2>使用MSResG模型进行训练与预测</h2>
        <span>----------------------------------------------------------------------</span>
        <h5 class="lead">
          在此，您可以选择您想要上传的药物相关数据集以及药物相似关系，这部分文件的参考格式可在下方查看，然后输入您想要进行训练的模型参数，具体参数类型可以参考论文，
          您可以通过点击提交按钮将数据上传至服务器，模型训练预测完成后将会通过邮件方式进行通知，您可以登陆系统进行预测结果的查询。
        </h5>
      </div>
    </div>
  </section>

  <!--下侧部分-->
  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">

      <!--左侧部分，参考模式的展示-->
        <div class="col-md">
          <h2>文件格式参考如下：</h2>
          <p></p>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h5>文件均以××.csv格式提交，行列表示药物0到n</h5>
              <h5>其内容表示行列对应药物对的相互作用或相似性</h5>
              <h5>相互作用关系为0/1，相似性关系为0-1之间小数</h5>
              <p></p>
            </div>
            <img src="../assets/img/cankaogeshi.png" alt="1" class="img-fluid">
            <p></p>
            <span>---------------------------------------------------------------</span>
            <p></p>
            <img src="../assets/img/xiangsixing.png" alt="1" class="img-fluid">
          </el-card>
        </div>

        <!--右侧部分，参考模式的展示-->
        <div class="col-md p-5">
          <!--参数-->
          <h2>参数表单提交：</h2>
          <p></p>
          <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="训练周期" size="large">
              <el-input v-model="form.xuexizhouqi" />
            </el-form-item>
            <el-form-item label="嵌入维度" size="large">
              <el-input v-model="form.qianruweidu" />
            </el-form-item>
            <el-form-item label="学习率" size="large">
              <el-input v-model="form.xuexilv" />
            </el-form-item>
            <el-form-item label="Dropout率" size="large">
              <el-input v-model="form.dlv" />
            </el-form-item>
          </el-form>

          <!--数据集-->
          <p></p>
          <h2>数据集文件上传：</h2>
          <p></p>
          <el-upload
              v-model:file-list="fileList"
              ref="uploadRef"
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-change="handleChange"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              将文件拖至此处或 <em>点击上传</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                请注意：文件大小小于500kb
              </div>
            </template>
          </el-upload>


          <p></p>
          <!--上传参数和数据集-->
          <el-button class="ml-3" type="success" @click="submitUpload;onSubmit">
            上传数据集与参数表单，提交至服务器
          </el-button>

        </div>




      </div>
    </div>
  </section>



<!--下方guolin黑框-->
  <footer class="p-5 bg-dark text-white text-center">
    <div class="container">
      <p class="lead">Copyright &copy; GuoLin</p>
    </div>
  </footer>
</template>



<!--h5文件两端对齐-->
<style type="text/css">
h5 {
  text-align: justify;
}
</style>

<!--参考卡片-->
<style>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 480px;
}
</style>

<!--背景-->
<style>
#building6{
  background:url("../assets/img/beijing6.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>

<!--script-->
<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  xuexizhouqi: '',
  qianruweidu: '',
  xuexilv: '',
  dlv: ''
})

// 表单上传
const onSubmit = () => {
  console.log('submit!')
}



// 文件上传
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadInstance } from 'element-plus'
import {UploadProps, UploadUserFile} from "element-plus";

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}

const fileList = ref<UploadUserFile[]>([
  {
    name: 'DDI.csv',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'SimJaccard.csv',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3)
}
</script>