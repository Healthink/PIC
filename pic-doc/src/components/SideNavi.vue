<template>
<div>
<el-menu
      class="el-menu-vertical-demo"
      active-text-color="#ad4067"
      unique-opened="True">
      <el-submenu :index="preitem.name" v-for="preitem of menuItems" :key="preitem.name">
        <span slot="title">
        <i class="el-icon-menu"></i>
        <span>{{preitem.title}}</span>
        </span>

        
    <el-menu-item class="navibtn" :index="item.name" v-for="item in preitem.children" :key="item.name" @click="clickNavi(item)">{{item.title}}</el-menu-item>
    </el-submenu>
</el-menu>
</div>
</template>
<script>
export default {
    props:{
        menuItems:{
            type: Array
        }
    },
        
    methods:{
        clickNavi(item) {
            this.$emit('changeRoute',item)
        }
    }


}
</script>





