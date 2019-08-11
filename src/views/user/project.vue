<template>
  <el-container>
    <el-header height="40px;">{{ pageTitle }}</el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%;"
      >
        <el-table-column
          fixed="left"
          header-align="center"
          prop="data"
          label="项目名称"
          width="250"
        />
        <el-table-column
          header-align="center"
          prop="data"
          label="受理编号"
          width="100"
        />
        <el-table-column
          header-align="center"
          prop="data"
          label="立项编号"
          width="100"
        />
        <el-table-column
          header-align="center"
          prop="data"
          label="项目时间"
          width="100"
        />
        <el-table-column
          header-align="center"
          prop=""
          label="项目状态"
          width="150"
        />
        <el-table-column
          header-align="center"
          prop=""
          label="项目类型"
          width="150"
        />
        <el-table-column
          header-align="center"
          prop=""
          label="审核意见"
          width="150"
        />
        <el-table-column
          header-align="center"
          prop=""
          label="立项结果"
          width="150"
        />
        <el-table-column
          header-align="center"
          fixed="right"
          label="申报操作"
          width="90"
        >
          <template slot-scope="scope">
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">编辑</a>
            <a class="tablelink" @click="handleClick(scope.row)">生成</a>
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">提交</a>
            <a v-if="scope.row.show" class="tablelink" @click="handleClick(scope.row)">下载</a>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          fixed="right"
          label="合同操作"
          width="90"
        >
          <template slot-scope="scope">
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">编辑</a>
            <a class="tablelink" @click="handleClick(scope.row)">生成</a>
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">提交</a>
            <a v-if="scope.row.show" class="tablelink" @click="handleClick(scope.row)">下载</a>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          fixed="right"
          label="结题操作"
          width="90"
        >
          <template slot-scope="scope">
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">编辑</a>
            <a class="tablelink" @click="handleClick(scope.row)">生成</a>
            <a v-if="!scope.row.show" class="tablelink" @click="handleClick(scope.row)">提交</a>
            <a v-if="scope.row.show" class="tablelink" @click="handleClick(scope.row)">下载</a>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px; text-align: center;">
        <router-link to="/item/index?action=new">
          <el-button type="primary" style="width: 200px;" size="medium">新建项目</el-button>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      pageTitle: '',
      tableData: [
        {
          uid: 1,
          data: '2019.08.04',
          show: false
        },
        {
          uid: 2,
          data: '2019.08.05',
          show: true
        }
      ]
    }
  },
  mounted() {
    this.getTitle()
  },
  methods: {
    getTitle() {
      this.pageTitle = this.$route.meta.title
    },
    handleClick(row) {
      this.$message({
        message: row
      })
      this.$router.push({ path: '/item/index', query: { action: 'edit' }})
    }
  }
}
</script>
<style>
.tablelink {
  color: blue;
  text-decoration: none;
  cursor: pointer;
  height: 20px;
}
.tablelink:hover {
  text-decoration: underline;
}
</style>
