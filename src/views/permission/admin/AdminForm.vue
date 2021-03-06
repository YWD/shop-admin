<template>
  <app-dialog-form
    :title="props.adminId ? '编辑管理员' : '添加管理员'"
    :submit-form="submitForm"
    @open="whenOpen"
    @close="whenClose"
  >
    <el-form
      ref="form"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item
        label="管理员账号"
        prop="account"
      >
        <el-input
          v-model="formData.account"
          placeholder="请输入管理员账号"
        />
      </el-form-item>
      <el-form-item
        label="管理员密码"
        prop="pwd"
      >
        <el-input
          v-model="formData.pwd"
          placeholder="请输入管理员密码"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="conf_pwd"
      >
        <el-input
          v-model="formData.conf_pwd"
          placeholder="请输入确认密码"
        />
      </el-form-item>
      <el-form-item
        label="管理员姓名"
        prop="real_name"
      >
        <el-input
          v-model="formData.real_name"
          placeholder="请输入管理员姓名"
        />
      </el-form-item>
      <el-form-item
        label="管理员身份"
        prop="roles"
      >
        <el-select
          v-model="formData.roles"
          multiple
          placeholder="请选择管理员身份"
        >
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="formData.status">
          <el-radio
            :label="1"
          >
            开启
          </el-radio>
          <el-radio
            :label="0"
          >
            关闭
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </app-dialog-form>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import type { IElForm, IFormRules } from '@/types/element-plus'
import { getAdmin, getAdminRules, postAdmin, putAdmin } from '@/api/admin'
import { ISelectOptions } from '@/api/types/form'

const props = defineProps({
  adminId: { // 编辑的管理员 ID
    type: Number as PropType<number | null>,
    default: null
  }
})

const form = ref<IElForm | null>(null)
const formLoading = ref(false)
const formData = ref({
  id: null as number | null,
  account: '',
  pwd: '',
  conf_pwd: '',
  roles: [] as number[],
  status: 0 as 0 | 1,
  real_name: ''
})

const formRules: IFormRules = {
  account: [
    { required: true, message: '请输入管理员账号', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入管理员密码', trigger: 'blur' }
  ],
  conf_pwd: [
    { required: true, message: '请输入确认密码', trigger: 'blur' }
  ],
  roles: [
    { required: true, message: '请选择管理员角色', trigger: 'blur' }
  ],
  real_name: [
    { required: true, message: '请输入管理员姓名', trigger: 'blur' }
  ]
}

const roles = ref<ISelectOptions[]>([])
const whenOpen = async () => {
  formLoading.value = true
  await Promise.all([
    loadAdmin(),
    loadAdminRules()
  ]).finally(() => {
    formLoading.value = false
  })
}
const loadAdminRules = async () => {
  // bug有值但是没有选项
  roles.value = await getAdminRules()
}
const loadAdmin = async () => {
  if (!props.adminId) return
  const data = await getAdmin(props.adminId)
  formData.value = {
    ...data,
    roles: data.roles.map(item => Number.parseInt(item))
  }
}

interface EmitsType {
  (e: 'update:admin-id', value: null): void
  (e: 'success'): void
}
const emit = defineEmits<EmitsType>()

const whenClose = () => {
  emit('update:admin-id', null)
  form.value!.resetFields()
  form.value!.clearValidate()
}

// const submitForm = async () => {
//   setTimeout(() => {
//     return Promise.resolve()
//   }, 2 * 1000)
// }
const submitForm = async () => {
  // return new Promise<void>(resolve => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 2 * 1000)
  // })
  if (props.adminId) {
    formData.value.id = props.adminId
    await putAdmin(formData.value)
  } else {
    await postAdmin(formData.value)
  }
  emit('success')
}
</script>

<style scoped lang='scss'>

</style>
