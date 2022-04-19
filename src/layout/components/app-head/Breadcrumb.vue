<template>
  <el-breadcrumb
    :separator-icon="ArrowRight"
  >
    <el-breadcrumb-item
      v-for="route in routes"
      :key="route.path"
    >
      {{ route.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(route => route.meta.title)
})
</script>

<style scoped lang='scss'>
.el-breadcrumb {
  margin-left: 16px;
}
</style>
