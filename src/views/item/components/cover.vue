<template>
  <el-form ref="form" :model="coverForm" label-width="100px" size="mini">
    <el-row>
      <el-col :span="4">&nbsp;</el-col>
      <el-col :span="16" style="height: 64px; line-height: 64px; font-size: 32px; text-align: center;">
        揭阳市医学科研项目申请书
      </el-col>
      <el-col :span="4">&nbsp;</el-col>
    </el-row>
    <table class="w840">
      <tr>
        <td class="tbTitle">项目名称</td>
        <td class="tbContent w740" colspan="3">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">项目编号</td>
        <td class="tbContent w320">
          {{ coverForm.data }}
        </td>
        <td class="tbTitle">项目类别</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">研究类型</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">学科名称</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">承担单位</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">邮政编码</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">单位电话</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">单位传真</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">通讯地址</td>
        <td class="tbContent w740" colspan="3">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">项目负责人</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">电子邮箱</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">联系电话</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">手机号码</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">申报时间</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
        <td class="tbTitle">推荐单位</td>
        <td class="tbContent w320">
          <el-input v-model="coverForm.data" size="mini" />
        </td>
      </tr>
    </table>
  </el-form>
</template>
<script>
export default {
  name: 'Cover',
  data() {
    return {
      coverForm: {
        data: 'test'
      }
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/item.scss";
</style>
