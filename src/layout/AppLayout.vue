<template>
  <div>
    <el-container>
      <el-aside
        class="aside-class"
      >
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header class="clear-gap">
          <AppHead />
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
import AppHead from '@/layout/components/app-head/Index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  display: flex;
  justify-content: space-between;
}
.aside-class {
  width: auto;
  height: 100vh;
  background-color: #304156;
}
.clear-gap {
  margin: 0;
  padding: 0;
}
.el-header {
  display: flex;
  align-items: center;
}
</style>
