<template>
  <el-container>
    <el-header height="40px;">{{ title }} {{ action }}</el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="封面" name="tab1">
          <Cover />
        </el-tab-pane>
        <el-tab-pane label="基本情况" name="tab2" :disabled="showTab<2">
          <Base />
        </el-tab-pane>
        <el-tab-pane label="参与人员" name="tab3" :disabled="showTab<3">
          <Participants />
        </el-tab-pane>
        <el-tab-pane label="主要内容" name="tab4" :disabled="showTab<4">
          主要内容
        </el-tab-pane>
        <el-tab-pane label="计划进度" name="tab5" :disabled="showTab<5">
          计划进度
        </el-tab-pane>
        <el-tab-pane label="经费预算" name="tab6" :disabled="showTab<6">
          经费预算
        </el-tab-pane>
        <el-tab-pane label="参与单位" name="tab7" :disabled="showTab<7">
          参与单位
        </el-tab-pane>
        <el-tab-pane label="附件上传" name="tab8" :disabled="showTab<8">
          附件上传
        </el-tab-pane>
      </el-tabs>
      <el-row>
        <el-col :span="8">&nbsp;</el-col>
        <el-col :span="8" style="text-align: center;">
          <el-button type="primary" @click="addShow">下一页</el-button>
          <el-button type="primary">保&nbsp;&nbsp;存</el-button>
        </el-col>
        <el-col :span="8">&nbsp;</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Cover from './components/cover'
import Base from './components/base'
import Participants from './components/participants'

export default {
  components: {
    Cover,
    Base,
    Participants
  },
  data() {
    return {
      title: '',
      action: '',
      activeName: 'tab1',
      showTab: 1, // 设置标签显示权限，未完成的不能进入下一个标签
      tabIndex: 0, // 当前标签Index，用于显示下一个标签
      isAdd: true
    }
  },
  mounted() {
    this.getAction()
    this.getTitle()
  },
  methods: {
    getAction() {
      if (this.$route.query.action) {
        this.action = this.$route.query.action
        this.action === 'new' ? this.showTab = 1 : this.showTab = 8
      }
    },
    getTitle() {
      this.title = this.$route.meta.title
    },
    addShow() {
      // 点击“下一页”时，标签显示权限showTab+1
      if (this.isAdd && this.showTab < 8) this.showTab++
      // 权限showTab大于最大标签数量时，返回最大标签数
      // 如果权限showTab不超过最大标签数，标签Index加1
      // 如果权限showTab等于7，说明所有标签已经能够完全显示
      // 不用再计算tabIndex，直接按
      if (this.showTab < 9) {
        this.tabIndex++
        if (this.tabIndex > 7) this.tabIndex = 0
        this.activeName = 'tab' + String(this.tabIndex + 1)
        if ((this.tabIndex + 1) === this.showTab) {
          this.isAdd = true
        }
      } else {
        this.activeName = 'tab' + String(this.tabIndex + 1)
      }
    },
    handleClick(tab, event) {
      this.tabIndex = parseInt(tab.index)
      if ((this.tabIndex + 1) === this.showTab) {
        this.isAdd = true
      } else {
        this.isAdd = false
      }
    }
  }
}
</script>
<style>
  .el-header {
    background-color: #F3F4F7;/* #e5e9f2;*/
    color: #333;
    text-align: left;
    line-height: 40px;
    font-size: 16px;
  }
  .input-inline-left {
    width: 45%;
    float: left;
  }
  .input-inline-right {
    width: 45%;
    float: right;
  }
</style>
