<template>
  <el-form ref="form" :model="baseForm" label-width="100px" size="mini">
    <table class="w840">
      <tr>
        <td class="tbTitle">项目名称</td>
        <td class="tbContent w740" colspan="3">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
    </table>
  </el-form>
</template>
<script>
export default {
  name: 'Base',
  data() {
    return {
      baseForm: {
        data: 'base'
      }
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/item.scss";
</style>
