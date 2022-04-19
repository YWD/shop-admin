<template>
  <div>
    <el-container>
      <el-aside
        width="200px"
        class="aside-class"
      >
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header class="clear-gap">
          Header
        </el-header>
        <el-main class="clear-gap">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from '@/layout/components/AppMenu.vue'
</script>

<style scoped>
.aside-class {
  height: 100vh;
  background-color: #304156;
}
.clear-gap {
  margin: 0;
  padding: 0;
}
</style>
