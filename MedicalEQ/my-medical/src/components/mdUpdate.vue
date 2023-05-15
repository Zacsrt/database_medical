<template>
  <body>
  <form>
    <div class="form-control">
      <label for="medical-name">ชื่อเครื่องมือแพทย์ </label>
      <input type="text" v-model.trim="medical.name" />
    </div>
    <div class="form-control">
      <label for="medical-department">แผนก</label>
      <select v-model="medical.department">
        <option value="อายุรกรรม">อายุรกรรม</option>
        <option value="หู คอ จมูก">หู คอ จมูก</option>
        <option value="กุมารเวชกรรม">กุมารเวชกรรม</option>
        <option value="ศัลยกรรม">ศัลยกรรม</option>
        <option value="กระดูกและข้อ">กระดูกและข้อ</option>
        <option value="ผิวหนัง">ผิวหนัง</option>
      </select>
    </div>
    <div class="form-control">
      <label for="medical-price">ราคา </label>
      <input type="number" v-model="medical.price" />
      <label>บาท</label>
    </div>
    <div class="form-control">
      <label for="medical-guarantee">ระยะประกัน </label>
      <input type="number" v-model="medical.guarantee" />
      <label>ปี</label>
    </div>
    <div class="form-control">
      <p>ระดับความเสี่ยง</p>
      <div>
        <input type="radio" value="สูง" v-model="medical.risk" />
        <label for="medical-risk">สูง</label>
      </div>
      <div>
        <input type="radio" value="กลาง" v-model="medical.risk" />
        <label for="medical-risk">กลาง</label>
      </div>
      <div>
        <input type="radio" value="ต่ำ" v-model="medical.risk" />
        <label for="medical-risk">ต่ำ</label>
      </div>
    </div>
    <div class="form-control">
      <label for="medical-date">วันที่ติดตั้ง</label>
      <VueDatePicker
        v-model="medical.date"
        :enable-time-picker="false"
        model-type="dd.MM.yyyy"
      ></VueDatePicker>
    </div>
    <div class="form-control">
      <label for="medical-image">รูปภาพเครื่องมือแพทย์</label>
      <div class="img-control">
        <input type="file" class="image-control" @change="onImageSelect" />
        <img :src="medical.image" alt="" />
      </div>
    </div>
    <div>
            <button @click.prevent="UpdateForm">บันทึกการแก้ไข</button>   
    </div>
  </form>
</body>
</template>

<script>
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
    name: "mdUpdate",
    components: {
    VueDatePicker,
  },
    data() {
    return {
      medical: {
        name: "",
        price: "",
        risk: "",
        department: "",
        guarantee: "",
        date: null,
        image: "",
      },
    };
  },
  methods:{
    async UpdateForm(){
console.log(this.medical)
const result = await axios.put("http://localhost:3000/medicals/" + this.$route.params.id, {
        name: this.medical.name,
        price: this.medical.price,
        risk: this.medical.risk,
        department: this.medical.department,
        guarantee: this.medical.guarantee,
        date: this.medical.date,
        image: this.medical.image,
      });
      console.log("result", result);
      alert("แก้ไขเรียบร้อย")

    },
    onImageSelect(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(files) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.medical.image = e.target.result;
      };
      reader.readAsDataURL(files);
    },
  },
  
    async mounted(){
        const result = await axios.get("http://localhost:3000/medicals/"+ this.$route.params.id)
        // console.log(this.$route.params.id)
        console.log(result.data)
        this.medical = result.data
    }
  }
</script>

<style scoped>
form {
  margin: 35px auto;
  max-width: 640px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  padding: 35px;
  background: whitesmoke;
}
.form-control {
  margin: 10px 0;
}
input {
  display: block;
  width: 630px;
  font: inherit;
  margin-top: 10px;
  height: 20px;
}
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 15px;
}
input[type="radio"] + label {
  font-weight: normal;
}
.form-control select{
  width:638px;
  height: 26px;
}
.img-control img {
  border: 1px solid black;
  height: 200px;
  width: 200px;
  margin: auto;
  display: block;
}
body{
  margin-top: 100px;
}
button {
  border-radius: 10px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  background: whitesmoke;
  color: black;
  padding: 5px 5px;
  font-size: 15px;
}
</style>
    