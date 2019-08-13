<template>
  <el-form ref="form" :model="PersonForm" label-width="100px" size="mini">
    <table class="w900">
      <tr>
        <td colspan="10">项目组信息</td>
      </tr>
      <tr class="center">
        <td>参与单位数</td>
        <td>总人数</td>
        <td>高级</td>
        <td>中级</td>
        <td>初级</td>
        <td>辅助人员</td>
        <td rowspan="2">其中在读</td>
        <td>博士后</td>
        <td>博士生</td>
        <td>硕士生</td>
      </tr>
      <tr class="center">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
        <td><el-input v-model="PersonForm.data" size="mini" /></td>
      </tr>
    </table>
    <table class="w900">
      <tr>
        <td colspan="10">项目组成员（不含申请者）</td>
      </tr>
    </table>
  </el-form>
</template>
<script>
export default {
  name: 'Participants',
  data() {
    return {
      PersonForm: {
        data: '方培丰'
      }
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/item.scss";
</style>
