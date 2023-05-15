<template>
  <mdSlot v-for="item in medicalins" :key="item.id">
    <template v-slot:plate-header>
      <img :src="item.image" alt="Medical Equipment Image" />
      <h1>ชื่อเครื่องมือแพทย์:{{ item.name }}</h1>
    </template>
    <template v-slot:plate-content>
      <p>แผนก:{{ item.department }}</p>
       <p>วันที่ติดตั้ง:{{ item.date}}</p>  
       <p>ระดับความเสี่ยง:{{ item.risk }}</p> 
      <p>ราคา:{{ item.price }}  บาท </p>
      <p>ระยะประกัน: {{ item.guarantee }} ปี</p>
      <router-link :to="`/md-Update/${item.id}`">
        <button class="btn1">แก้ไขข้อมูล</button>
      </router-link>
      <button class="btn2" @click="deleteMedical(item.id)">ลบข้อมูล</button>
    </template>   
  </mdSlot>
</template>

<script>
import axios from "axios";
import mdSlot from "./mdSlot.vue";
export default {
  name: "mdList",
  components: {
    mdSlot,
  },
  data() {
    return {
      medicalins: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/medicals");
    console.log(result);
    this.medicalins = result.data;
  },
  methods: {
    async deleteMedical(id) {
      try {
        await axios.delete(`http://localhost:3000/medicals/${id}`);
        this.medicalins = this.medicalins.filter((item) => item.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
  },

};
</script>

<style scoped>
button {
  border-radius: 10px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  background: whitesmoke;
  color: black;
  padding: 8px 16px;
}
img {
  border: 1px solid black;
  height: 200px;
  width: 200px;
  display: block;
margin: auto;
}
h1{
  font-size: 20px;
}
p{
  font-size: 15px;
}
.btn2{
margin-left: 9px;
}
</style>


