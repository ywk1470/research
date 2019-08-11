<template>
  <el-container>
    <el-header height="40px;">{{ pageTitle }}</el-header>
    <el-main>
      <div>&nbsp;</div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      pageTitle: '' // 项目查询
    }
  },
  mounted() {
    this.getTitle()
  },
  methods: {
    getTitle() {
      this.pageTitle = this.$route.meta.title
    }
  }
}
</script>
