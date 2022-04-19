<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><Apple /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">
        <el-icon><Menu /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/attr">
        <el-icon><Menu /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/product/classify">
        <el-icon><Menu /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/apply">
        <el-icon><Menu /></el-icon>
        <span>商品添加</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        <el-icon><Menu /></el-icon>
        <span>订单列表</span>
      </el-menu-item>
      <el-menu-item index="/order/offline">
        <el-icon><Menu /></el-icon>
        <span>订单离线</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Menu /></el-icon>
      <span>媒体管理</span>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/admin">
        <el-icon><Menu /></el-icon>
        <span>管理权限</span>
      </el-menu-item>
      <el-menu-item index="/permission/role">
        <el-icon><Menu /></el-icon>
        <span>角色权限</span>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <el-icon><Menu /></el-icon>
        <span>权限规则</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang='ts'>
import { Apple, Menu } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
