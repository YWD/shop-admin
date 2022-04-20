<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="default"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="src/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon><IUser /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon><lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="img-code-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <el-icon><key /></el-icon>
            </template>
          </el-input>
          <img
            class="img-code"
            alt="验证码"
            :src="srcCaptcha"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { User as IUser, Lock, Key } from '@element-plus/icons-vue'
import { getCaptcha, login } from '@/api/common'
import { IElForm, IFormRules } from '@/types/element-plus'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/main'

const srcCaptcha = ref('')
async function loadCaptcha () {
  const data = await getCaptcha()
  srcCaptcha.value = URL.createObjectURL(data)
}
onMounted(() => {
  loadCaptcha()
})
const mainStore = useMainStore()
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const form = ref<IElForm | null>(null)
const rules: IFormRules = {
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
}
const router = useRouter()

const handleSubmit = async () => {
  // 1.验证表单
  const valid = await form.value!.validate()
  if (!valid) return false
  // 2.提交请求
  loading.value = true
  // rsp -> promise 解析失败，报错
  const rsp = await login(user).finally(() => {
    loading.value = false
  })
  console.log(rsp)
  mainStore.setUser(rsp.user_info)
  window.localStorage.setItem('user', JSON.stringify(rsp.user_info))
  // 3.处理响应
  console.log(router)
  await router.replace('/')
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}
:deep .el-input__prefix-inner {
  align-items: center;
}
.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .img-code-wrap {
    display: flex;
    align-items: center;
    .img-code {
      height: 37px;
    }
  }
}
</style>
