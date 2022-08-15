<template>
  <div style="font-size: 20px">
    <div>
      <el-row :gutter="60">
        <el-col :span="2">
          <el-button type="primary">新增</el-button>
        </el-col>
        <el-col :span="48"> </el-col>
      </el-row>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <!--margin top right bottom left-->
          <div style="margin: 0px 2% 10px 2%">
            <el-tabs
              v-model="firstTab"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane label="匹配规则" name="first">
                <!--
                <el-icon :size="30" :color="color" style="padding-right: 10px;">
                  <Plus @click="addRule" />
                </el-icon> -->

                <el-space wrap>
                  <el-card
                    v-for="(element, index) in elementList"
                    :key="element.id"
                    class="box-card"
                    style="width: 250px;height: 300px;"
                  >
                    <template #header>
                      <div class="card-header" style="width: 230px">
                        <!-- <span> {{ i }}</span> -->
                        <el-select
                          v-model="element.elementCode"
                          filterable
                          placeholder="选择要素"
                          style="width: 120px"
                          @change="eleSelectChange(element)"
                        >
                          <el-option
                            v-for="item in elementOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>

                        <!-- <div class="my-2 flex items-center text-sm">
                          <el-radio-group v-model="radio3" disabled class="ml-4">
                            <el-radio label="1" size="small">AND</el-radio>
                            <el-radio label="2" size="small">OR</el-radio>
                          </el-radio-group>
                        </div> -->

                        <el-icon
                          @click="dialogTableVisible = true"
                          style="padding-left: 15px"
                        >
                          <Setting />
                        </el-icon>
                        <el-icon
                          @click="addRule(index)"
                          style="padding-left: 10px"
                        >
                          <Plus />
                        </el-icon>
                        <el-icon
                          @click="removeRule(index)"
                          style="padding-left: 10px"
                        >
                          <Close />
                        </el-icon>

                        <el-select
                          v-model="element.operator"
                          filterable
                          placeholder="运算符"
                          style="width: 100px; padding-top: 5px"
                        >
                          <el-option
                            v-for="item in operatorOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                        <el-radio-group
                          style="margin-left: 10px"
                          v-model="element.andOr"
                          class="ml-4"
                          @change="andOrRadio(element.andOr)"
                        >
                          <el-radio style="margin-right: 10px" label="AND">AND</el-radio>
                          <el-radio label="OR">OR</el-radio>

                        </el-radio-group>

                        <!--  <el-radio style="padding-left: 5px" :label="AND"
                          >AND</el-radio
                        >
                        <el-radio style="padding-left: -30px" :label="OR"
                          >OR</el-radio
                        > -->

                        <!-- <el-input v-model="input2" style="width:auto" size="small" class="w-50 m-2" placeholder="" /> -->

                        <!-- <el-dialog v-model="dialogTableVisible" :append-to-body="true" title="Shipping address">
                          <el-table :data="tableData">
                            <el-table-column property="date" label="Date" width="150" />
                            <el-table-column property="name" label="Name" width="200" />
                            <el-table-column property="address" label="Address" />
                          </el-table>
                        </el-dialog> -->
                      </div>
                    </template>
                    <el-tree
                        :data="element.treeData"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[]"
                        :default-checked-keys="[]"
                        :props="defaultProps"
                      />
                    <!-- <div v-for="o in 3" :key="o" class="text item">
                      {{ '要素...' }}
                    </div> -->
                  </el-card>
                </el-space>
              </el-tab-pane>
              <el-tab-pane label="Config" name="second">Config</el-tab-pane>
              <el-tab-pane label="Role" name="third">Role</el-tab-pane>
              <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
          </div>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="name" label="风险名称" width="180" />
        <el-table-column prop="date" label="时间" width="180" />
        <el-table-column prop="address" label="内容详情" width="280" />
        <el-table-column prop="hitCount" label="击中次数" width="150" />
        <el-table-column prop="isOpen" label="开启/关闭">
          <template #default="scope">
            <el-switch v-model="scope.row.isOpen" />
          </template>
        </el-table-column>
      </el-table>
      <el-button class="mt-4" style="width: 100%" @click="onAddItem"
        >Add Item</el-button
      >
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import opt from "../js/const.js";

export default {
  data() {
    return {
      firstTab: "first",

      elementList: [
        {
          id: "",
          elementCode: "",
          operator: "",
          andOr: "AND",
          treeData:[]
        },
      ],

      operatorOptions: opt.operatorOptions,

      elementOptions: opt.elementOptions,

      tableData: [
        {
          id: 1,
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          hitCount: 10,
          isOpen: true,
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          hitCount: 12,
          isOpen: true,
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          isOpen: false,
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          isOpen: false,
        },
      ],
      data: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onAddItem() {
      this.tableData.push({
        date: dayjs(new Date()).format("YYYY-MM-DD"),
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    addRule(index) {
      this.elementList.splice(index + 1, 0, {});
    },
    removeRule(index) {
      this.elementList.splice(index, 1);
    },

    andOrRadio(andOr) {
      console.log(andOr);
    },

    eleSelectChange(element) {
      this.$http
        .post("http://localhost:8080/dictionary/tree", { eleCode: element.elementCode })
        .then((res) => {
          console.log(res);
          if(res.data.code == 200){
            element.treeData = res.data.data;
          }
        });
    },
  },
};
</script>


<style>
@import "../css/MyStyle.css";
</style>