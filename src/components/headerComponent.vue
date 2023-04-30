<template>
  <div class="head">
    <div class="left">
      <img id="econmyImg" src="https://cdn-icons-png.flaticon.com/512/3310/3310624.png">
    </div>
    <h3 class="main-title">Alış-Veriş Sepeti Uygulaması</h3>
    <div class="right">
      <i @click="getList()" id="sepet" class="bi bi-cart">
        <span id="badge" class="badge badge-light">{{ veri.length }}</span>
      </i>
      <div style="margin-left: 5px;"> Sepet Tutarı {{ totalcost }} ₺ 
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { toRef } from "@vue/reactivity";
import { visible } from '../data/visible.js'
const { veri } = defineProps({
  veri: Array,
  totalcost: Number,
});


const getList = () => {
  visible.value = !visible.value
  console.log("fsg", visible)
}

</script>

<style scoped>
.head {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: whitesmoke;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
}


#sepet {
  font-size: 30px;
  cursor: pointer;
}

#sepet:hover {
  color: gray;
}

#econmyImg {
  width: 60px;
  height: 60px;
}

#badge {
  font-size: 12px;
  color: black;
}

.main-title {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: cursive;
}
</style>
  