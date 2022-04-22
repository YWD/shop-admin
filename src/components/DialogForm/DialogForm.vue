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
          @click="submitForm"
          :loading="loading"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { IElDialog } from '@/types/element-plus'

const props = defineProps({
  submitForm: {
    type: Function,
    default: () => {}
  }
})

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void
  // (e: 'submitForm'): void
}
const emits = defineEmits<EmitsType>()
const cancel = () => {
  emits('update:modelValue', false)
}

const loading = ref(false)
const submitForm = async () => {
  // emits('submitForm')
  loading.value = true
  await props.submitForm().finally(() => {
    loading.value = false
  })
}
// import { ref } from 'vue'
//
const dialog = ref<IElDialog | null>(null)
// const cancel = () => {
//   dialog.value!.visible = false
// }
</script>

<style scoped lang='scss'>

</style>
