<template>
  <div>
    <el-menu :default-active="'risk'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="risk">风控预警</el-menu-item>
      <el-menu-item index="cost">费用标准控制</el-menu-item>
      <el-menu-item index="valueSet">数据集</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>


</template>

<script>

export default {
  data() {


  },
  created() {
    this.$router.push("risk");
  },
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    }
  }
};


</script>


<style scoped>
</style>
