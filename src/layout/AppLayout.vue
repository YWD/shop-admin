<template>
  <div>
    <el-container>
      <el-aside
        width="200px"
        class="aside-class"
      >
        Aside
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
</script>

<style scoped>
.aside-class {
  height: 100vh;
}
.clear-gap {
  margin: 0;
  padding: 0;
}
</style>
