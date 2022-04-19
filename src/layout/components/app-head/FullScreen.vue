<template>
  <el-icon
    @click="switchFullScreen"
  >
    <full-screen />
  </el-icon>
</template>

<script setup lang='ts'>
import { FullScreen } from '@element-plus/icons-vue'
const switchFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
