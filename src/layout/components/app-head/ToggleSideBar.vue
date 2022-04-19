<template>
  <el-icon
    size="24px"
    @click="toggleMenu"
    class="menu-button"
  >
    <Fold v-if="store.menuExpand" />
    <Expand v-else />
  </el-icon>
</template>

<script setup lang='ts'>
import { Fold, Expand } from '@element-plus/icons-vue'
import { useMainStore } from '@/store/main'

const store = useMainStore()

function toggleMenu () {
  store.menuExpand = !store.menuExpand
}
</script>

<style scoped lang='scss'>
.menu-button {
  margin-left: 16px;
}
</style>
