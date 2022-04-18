<template>
  <h1>首页</h1>
  <div>{{ counter }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { storeToRefs } from 'pinia'
const main = useMainStore()
const { counter } = storeToRefs(main)
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
