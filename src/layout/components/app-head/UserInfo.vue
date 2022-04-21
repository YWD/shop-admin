<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ mainStore.user.account }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          个人中心
        </el-dropdown-item>
        <el-dropdown-item @click="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { useMainStore } from '@/store/main'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logoutI } from '@/api/common'
import { useRouter } from 'vue-router'
const mainStore = useMainStore()
const router = useRouter()
const logout = () => {
  ElMessageBox.confirm('确定提交吗').then(async () => {
    await logoutI()
    ElMessage.success('成功')
    await router.replace('/login')
    mainStore.setUser(null)
  })
}
</script>

<style scoped lang='scss'>
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
