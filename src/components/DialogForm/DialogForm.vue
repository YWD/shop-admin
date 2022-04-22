<template>
  <el-dialog
    title="Tips"
    width="50%"
    ref="dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="cancel"
        >
          Cancel
        </el-button>
        <el-button
          type="primary"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
interface EmitsType {
  (e: 'update:modelValue', value: boolean): void
}
const emits = defineEmits<EmitsType>()
const cancel = () => {
  emits('update:modelValue', false)
}

// import { ref } from 'vue'
// import { IElDialog } from '@/types/element-plus'
//
// const dialog = ref<IElDialog | null>(null)
// const cancel = () => {
//   dialog.value!.visible = false
// }
</script>

<style scoped lang='scss'>

</style>
