<template>
  <el-form ref="form" :model="baseForm" label-width="100px" size="mini">
    <table class="w900">
      <tr>
        <td rowspan="2" class="leftrow">项目基本信息</td>
        <td class="tbTitle">项目名称</td>
        <td class="tbContent w740" colspan="3">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">学科名称</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">起止日期</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
    </table>
    <table class="w900">
      <tr>
        <td rowspan="5" class="leftrow">项目负责人基本信息</td>
        <td class="tbTitle">姓名</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">性别</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">民族</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">身份证号</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">职务</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">职称</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">学历</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">学位</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">所学专业</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">联系电话</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">手机号码</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">电子邮箱</td>
        <td class="tbContent w210">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">学术团<br>体任职</td>
        <td class="tbContent w740" colspan="5">
          <el-input v-model="baseForm.data" type="textarea" size="mini" />
        </td>
      </tr>
    </table>
    <table class="w900">
      <tr>
        <td rowspan="4" class="leftrow">承担单位基本信息</td>
        <td class="tbTitle">单位名称</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">组织机构代码</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">单位性质</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
        <td class="tbTitle">单位地址</td>
        <td class="tbContent w320">
          <el-input v-model="baseForm.data" size="mini" />
        </td>
      </tr>
      <tr>
        <td class="tbTitle">重点专（学）科、实验室级别及名称</td>
        <td class="tbContent w740" colspan="3">
          <el-input v-model="baseForm.data" type="textarea" size="mini" />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <table class="w840" style="border: 0; margin: -1px; text-align:center;">
            <tr>
              <td>&nbsp;</td>
              <td>姓名</td>
              <td>职务</td>
              <td>电话</td>
              <td>手机</td>
              <td>电子邮箱</td>
            </tr>
            <tr>
              <td>单位负责人</td>
              <td>方培丰</td>
              <td>科员</td>
              <td>0663-8660281</td>
              <td>13800138000</td>
              <td>ses281@126.com</td>
            </tr>
            <tr>
              <td>科研管理人</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
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
        data: '方培丰'
      }
    }
  }
}
</script>
<style lang="scss">
  @import "~@/styles/item.scss";
</style>
