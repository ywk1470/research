<template>
  <el-container>
    <el-header height="40px;">{{ pageTitle }}</el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="身份证号码">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="民族">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="职务">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职称">
              <el-cascader
                v-model="form.title"
                :options="form.professional"
                :props="{ expandTrigger: 'hover' }"
                clearable
                @change="cascaderChange"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="学历">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="学位">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="毕业学校">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所学专业">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="手机号码">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="8">
            <el-form-item label="办公电话">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="传真号码">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="16">
            <el-form-item label="联系地址">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="16">
            <el-form-item label="学术团体任职">
              <el-input v-model="form.name" type="textarea" :autosize="{ minRows: 2, maxRows: 8}" />
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="9">&nbsp;</el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" style="width: 100%;" size="medium" @click="saveProfile">保存</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="9">&nbsp;</el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import professional from '@/dicts/professional' // 职称字典

export default {
  data() {
    return {
      pageTitle: '',
      form: {
        name: '',
        title: [],
        professional: professional
      }
    }
  },
  mounted() {
    this.setDefaultValue()
    this.getTitle()
  },
  methods: {
    cascaderChange(title) {
      console.log(title)
    },
    setDefaultValue() {
      this.form.title = ['doctor', 'associate_chief_physician']
    },
    saveProfile() {
      this.$message({
        showClose: true,
        message: this.form.title,
        type: 'success'
      })
    },
    getTitle() {
      this.pageTitle = this.$route.meta.title
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
