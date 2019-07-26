<template>
<div ref="thisTable" class="hzh-table">
    <el-table
    ref="thisDataTable"
		:summary-method="tableOption.getSummaries"
    :show-summary = "tableOption.showSummary||false"
    :data="tableData"
    :height="tableHeight"
    :border="tableOption.border||true"
    :stripe="tableOption.stripe||true"
    :highlight-current-row="tableOption.highlightCurrentRow||true"
    :row-class-name="tableOption.rowClassName||null"
    :cell-class-name="tableOption.cellClassName||null"
    v-loading="loading"
    @selection-change="handleSelectionChange">
    <el-table-column type="expand" v-if="tableOption.expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item v-for="col in tableOption.expand" :label="col.label" :key="col.prop">
            <span>{{ props.row[col.prop] }}</span>
          </el-form-item> 
        </el-form>
      </template>
    </el-table-column>
    <el-table-column v-if="tableOption.checkbox"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column v-for="col in tableOption.cols" :key="col.prop"
      :prop="col.prop"
      :label="col.label"
      :width="col.width||''"
      :formatter="col.formatter||null"
      :show-overflow-tooltip="col.showOverflowTooltip||true"
      :class-name="col.className||''"
      :sortable="col.sortable||false"
      :fixed="false">
    </el-table-column>
    <el-table-column v-if="tableOption.toolbar"
      label="操作"
      :width="tableOption.toolbar.width||''">
      <template slot-scope="scope">
        <el-button v-for="btn in tableOption.toolbar.buttons" :key="btn.index"
          size="mini"
          :type="btn.type" 
          :plain="btn.plain"
          :round="btn.round"
          :circle="btn.circle"
          :icon="btn.icon"
          @click="toolbarHandle((btn.event||''), scope.row)">{{btn.name}}</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="tableOption.pageSizes||[10, 20, 30, 50]"
      :page-size="currentPageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataCount">
  </el-pagination>
</div>
</template>
<script>
import qs from 'qs';
export default {
  props: {
    tableOption: {
      type: Object
    },
    postBody: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      currentPageSize:
        this.tableOption.pageSize ||
        (this.tableOption.pageSizes ? this.tableOption.pageSizes[0] : 10),
      currentPage: 1,
      dataCount: 0,
      tableData:[],
      multipleSelection: [],
      loading:true,
      tableHeight:0,
      inited:true
    }
  },
  created(){
    if(this.tableOption.autoSize){
      this.tableHeight = null
    }
  },
  mounted(){
      this.getData()
  },
  updated() {
    if(this.inited){
    if(this.tableOption.autoSize){
      //this.tableHeight = null
    }
    else{
      let tempHeight = 0 
      let tempList =  this.$parent.$el.children
      let tempLen = tempList.length
      for(let i=0;i<tempLen;i++){
        if(tempList[i].classList[0] == 'hzh-table'){ continue}
        tempHeight = tempHeight + tempList[i].offsetHeight;
      }
      let clientHeight = window.innerHeight
      this.tableHeight =  clientHeight - tempHeight -300
      //this.$children[0].resizeState.height = this.tableHeight
      //this.$children[0].doLayout()
      this.inited = false
    }
    }
  },
  computed: {
    startIndex() {
      return (this.currentPage - 1) * this.currentPageSize
    },
    endIndex() {
      return (this.currentPage - 1) * this.currentPageSize + this.currentPageSize
    }
  },
  methods: {
		getDataCount(){
			this.$emit('listenToChildEvent',this.dataCount)
		},
    getData(){
      this.currentPage = 1
      this.thisgetData()
    },
    thisgetData(){
      this.loading = true
      let databody = this.postBody
      databody.pageSize = this.currentPageSize
      databody.pageIndex = this.currentPage - 1
      this.$ajax
        .post(this.tableOption.url,qs.stringify(databody))
        .then(response => {
          let res = response.data
          if (res.code) {
            this.dataCount = res.count
            this.tableData = res.data
          } else {
            console.log(res.msg)
          }
          this.loading = false
					this.getDataCount()
        })
        .catch(response => {
          console.log(response.data)
          this.loading = false
        });
    },
    handleSizeChange(obj) {
      this.currentPageSize = obj
      this.currentPage = 1
      this.thisgetData()
    },
    handleCurrentChange(obj) {
      this.currentPage = obj
      this.thisgetData()
    },
    handleSelectionChange(val) {
        this.multipleSelection = val
    },
    getSelectedItems(){
      return this.multipleSelection
    },
    toolbarHandle(event,row){
      this.$emit(event,row)
    }
  }
}
</script>
<style>

</style>
