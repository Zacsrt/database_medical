<template>
<ul>
  <li><a href="/">หน้าหลัก</a></li>
  <li><a href="/md-List">ข้อมูลเครื่องมือแพทย์</a></li>
</ul>
  <mainForm/>
</template>

<script>
import mainForm from './components/mainForm.vue';
export default {
  name: "App",
  components: {
    mainForm

  },
  methods:{
  }

};
</script>

<style>
ul {
  list-style-type: none;
  margin-left: -8px;
  margin-top: 0px;
  padding: 0;
  overflow: hidden;
  background-color: rgba(112, 107, 107, 0.932);
  position: fixed;
  top: 0;
  width: 100%;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-right: 5px;
  font-size: 17px; 
}
li a:hover {
  background-color: #dddddd48;
}
</style>