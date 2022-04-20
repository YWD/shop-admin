<template>
  <el-space size="large">
    <ToggleSideBar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <FullScreen />
    <UserInfo />
  </el-space>
</template>

<script setup lang='ts'>
import ToggleSideBar from '@/layout/components/app-head/ToggleSideBar.vue'
import Breadcrumb from '@/layout/components/app-head/Breadcrumb.vue'
import FullScreen from '@/layout/components/app-head/FullScreen.vue'
import UserInfo from '@/layout/components/app-head/UserInfo.vue'
</script>

<style scoped lang='scss'>

</style>
