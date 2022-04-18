<template>
  <h1>首页</h1>
  <div>{{ counter }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { storeToRefs } from 'pinia'
import { getLoginInfo } from '@/api/common'

const main = useMainStore()
const { counter } = storeToRefs(main)
getLoginInfo.then(data => console.log(data.login_logo))
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
