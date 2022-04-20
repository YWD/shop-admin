<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ mainStore.user.account }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { State, useMainStore } from '@/store/main'
const mainStore: State = useMainStore()

</script>

<style scoped lang='scss'>
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
