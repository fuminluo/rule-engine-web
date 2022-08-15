<template>
  <div style="font-size: 20px">
    <div>
      <el-button type="primary">值集</el-button>
    </div>

    <div>
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column type="expand">
          <template #default="props">
            <div class="expandCls" @click="expandClick(props.row)"
              v-if="!props.row.children || props.row.children.length == 0">
              查看替代产品
              <span class="more-yuan ml5" style="text-indent: 0px;"><i class="dowm-icon"></i></span>
            </div>
          </template>

        </el-table-column>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-button class="mt-4" style="width: 100%" @click="onAddItem">Add Item</el-button>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'

export default {

  data() {
    return {
      tableData: [
        {
          id: 123,
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]

    }
  },
  methods: {
    onAddItem() {
      this.tableData.push({
        date: dayjs(new Date()).format('YYYY-MM-DD'),
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      })
    }
  }
};

</script>


<style scoped>
</style>
