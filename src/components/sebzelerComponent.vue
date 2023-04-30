<template>
  <div v-if="product.attributes[0].maximum_price > 0" class="card">
    <div class="imgContainer">
      <i @click="addItem" id="addicon" class="bi bi-plus-circle"></i>
      <img class="card-img-top"
        src="https://static.vecteezy.com/system/resources/previews/008/325/517/original/shopping-cart-or-basket-illustration-grocery-store-icon-free-vector.jpg"
        alt="Card image cap">
    </div>

    <div class="card-body">
      <p class="card-title"> <strong> {{ product.attributes[0].vegetable }}</strong></p>
      <p class="card-text">{{ product.attributes[0].maximum_price }} ₺</p>
      <!-- <a href="#" id="cardButton" class="btn btn-primary">Ekle</a> -->

    </div>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from "vue";
const { product } = defineProps({
  product: Object
});
const emit = defineEmits(['buyFromId']);
const addItem = () => {
  emit("buyFromId", product)
}
</script>

<style scoped>
.card {
  width: 10%;
  margin-right: 10px;
  margin-bottom: 10px;
}


@media only screen and (max-width: 1200px) {
  .card {
    width: 30%;
  }
}

.card-body {
  height: 100px;
  word-wrap: initial;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: cursive;
}

.card-title {
  text-align: center;
  font-family: cursive;
}

#cardButton {
  position: absolute;
  bottom: 10px;
}

.imgContainer {
  position: relative;
}

#addicon {
  font-size: 20px;
  color: #0c0ca9;
  /* display: flex;
  flex-direction: row-reverse;*/
  margin: 5px;
  cursor: pointer;
  position: absolute;
  background: white;
  top: 0;
  right: 0;
  z-index: 999;
  background: transparent;
}

#addicon:hover {
  color: #b0b0f2;

}</style>
