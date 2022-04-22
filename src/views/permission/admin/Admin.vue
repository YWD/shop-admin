<template>
  <page-container>
    <app-card>
      <template #header>
        数据筛选
      </template>
      <el-form
        :inline="true"
        ref="form"
        :disabled="loading"
        @submit.prevent="loadAdmins"
      >
        <el-form-item label="状态">
          <el-select
            placeholder="请选择"
            clearable
          >
            <el-option
              label="全部"
              value=""
            />
            <el-option
              label="显示"
              :value="1"
            />
            <el-option
              label="不显示"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员名称">
          <el-input
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </app-card>
    <app-card>
      <template #header>
        <el-button
          type="primary"
          @click="addAdmin"
        >
          添加管理员
        </el-button>
      </template>
      <!-- v-loading 绑定 -->
      <el-table
        :data="admins"
        stripe
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column
          prop="id"
          label="ID"
        />
        <el-table-column
          prop="real_name"
          label="姓名"
        />
        <el-table-column
          prop="account"
          label="账号"
        />
        <el-table-column
          prop="roles"
          label="身份"
          min-width="180"
        >
          <template #default="scope">
            <el-space wrap>
              <el-tag
                class="role-tag"
                v-for="(item) in scope.row.roles.split(',')"
                :key="item"
              >
                {{ item }}
              </el-tag>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column
          label="最后一次登录时间"
          prop="last_time"
        />
        <el-table-column
          label="最后一次登录IP"
          prop="last_ip"
        />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
              :loading="scope.row.statusLoading"
              @change="changeStatus(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          min-width="100"
          align="center"
        >
          <template #default="scope">
            <el-button
              type="text"
              @click="editAdmin(scope.row.id)"
            >
              编辑
            </el-button>
            <el-popconfirm
              title="确认删除吗？"
            >
              <template #reference>
                <el-button type="text">
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <AppPagination
        v-model:page="params.page"
        v-model:limit="params.limit"
        :load-list="loadAdmins"
        :list-count="adminsLength"
        :disabled="loading"
      />
    </app-card>
  </page-container>
  <admin-form
    v-model="adminDialogVisible"
    v-model:adminId="adminId"
    @success="submitSuccess"
  />
</template>

<script setup lang='ts'>
import { getAdmins, putAdminStatus } from '@/api/admin'
import { onMounted, reactive, ref } from 'vue'
import { IAdmin, IQueryAdminParams } from '@/api/types/admin'
import { ElMessage } from 'element-plus'
import AdminForm from '@/views/permission/admin/AdminForm.vue'
const submitSuccess = () => {
  adminDialogVisible.value = false
  loadAdmins()
}
const adminDialogVisible = ref(false)
const addAdmin = () => {
  adminDialogVisible.value = true
}

const adminId = ref<number | null>(null)
const editAdmin = (id: number) => {
  adminId.value = id
  adminDialogVisible.value = true
}

const admins = ref<IAdmin[]>([])
const adminsLength = ref(0)
const loading = ref(true)
const params = reactive<IQueryAdminParams>({
  page: 1,
  limit: 10
})

onMounted(() => {
  loadAdmins()
})

// 监听params变化自动调用接口
const loadAdmins = async () => {
  console.log('loadAdmins')
  loading.value = true
  const rsp = await getAdmins(params).finally(() => {
    loading.value = false
  })
  admins.value = rsp.list
  admins.value.forEach(item => {
    item.statusLoading = false
  })
  adminsLength.value = rsp.count
}

const changeStatus = async (admin: IAdmin) => {
  admin.statusLoading = true
  await putAdminStatus(admin).finally(() => {
    admin.statusLoading = false
  })
  ElMessage.success((admin.status === 1 ? '开启' : '关闭') + '成功')
}
</script>

<style scoped lang='scss'>

</style>
