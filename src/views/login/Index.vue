<template>
  <div>login</div>
</template>

<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'

getLoginInfo.then(data => console.log(data.login_logo))
</script>

<style scoped>

</style>
