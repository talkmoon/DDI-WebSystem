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
          <h2>参数表单提交：</h2>
          <el-form
              ref="ruleFormRef"
              style="max-width: 600px"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="auto"
              class="demo-ruleForm"
          >
            <el-form-item label="Password" prop="pass" size="large">
              <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Confirm" prop="checkPass">
              <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="Age" prop="age">
              <el-input v-model.number="ruleForm.age" />
            </el-form-item>
            <el-form-item label="Age" prop="age">
              <el-input v-model.number="ruleForm.age" />
            </el-form-item>
            <el-form-item>

            </el-form-item>
          </el-form>

          <h2>数据集文件上传：</h2>
          <el-upload
              ref="upload"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :limit="1"
              :on-exceed="handleExceed"
              :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">选择文件上传</el-button>
              <el-button class="ml-3" type="success" @click="submitUpload;submitForm(ruleFormRef)">
                提交至服务器
              </el-button>
            </template>

            <template #tip>
              <div class="el-upload__tip text-red">
                限制上传一个文件, 新上传文件会覆盖旧文件
              </div>
            </template>
          </el-upload>


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
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
</script>