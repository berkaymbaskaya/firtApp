<script setup>
import { products } from './data/sebzeler.js';
import sebzelerComponent from './components/sebzelerComponent.vue'
import headerComponent from './components/headerComponent.vue';
import { ref } from 'vue'
import { visible } from './data/visible.js'
visible.value = !visible.value

console.log("vsb value", visible.value)
var totalcost = 0;
const myBag = ref([]);
const buyFromId = (param) => {
  totalcost += Number(param.attributes[0].maximum_price)
  myBag.value.push(param);
  console.log(myBag)
  visible.value = !visible.value
  setTimeout(() => {
    visible.value = !visible.value
  }, 900);

}
const deleteAll=()=>{
  myBag.value=[];
  totalcost = 0;
  console.log(  myBag.value)
}

</script>

<template>
  <div id="container">
    <headerComponent :totalcost="totalcost" :veri="JSON.parse(JSON.stringify(myBag))"> </headerComponent>
    <div style="position: ;relative">
      <div v-show="visible" id="sepetList">
        <ul class="list-group list-group">
          <li v-for="item in myBag" class="list-group-item list-group">{{ item.attributes[0].vegetable }} - {{
            item.attributes[0].maximum_price }} ₺</li>
          <li id="totalCostShow" class="list-group-item list-group-item-secondary"> <strong>Sepet Tuarı: {{ totalcost }}
              ₺</strong>
          </li>
          <li v-show="myBag.length>0" @click="deleteAll()" id="DeleteCost" class="list-group-item list-group-item-danger"> <strong>Sepeti Temizle</strong>
            <i id="clearBag" class="bi bi-trash3"></i>
          </li>
        </ul>
      </div>
      <div class="product-list">
        <sebzelerComponent v-for="product in products[0].data" :key="product.id" :product="product"
          @buyFromId="buyFromId">
        </sebzelerComponent>
      </div>
    </div>

  </div>
</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  width: 100%;
  height: 100%;
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.product-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

#sepetList {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
}

#totalCostShow {
  display: flex;
  justify-content: space-evenly;
}
#DeleteCost {
  display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
#clearBag{
  cursor: pointer;
  margin-left: 5px;
}
#clearBag:hover{
color: rgb(181, 181, 181);
}
</style>
