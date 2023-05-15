<script setup>
import store from '../storage/index'
// let count = store.state.count

const incre = () => {
  store.commit('increment')
}
const decre = () => {
  store.commit('decrement')
}
</script>

<template>
  <div class="contact">
    <div class="">
      <h1>This is contact page</h1>
      <p><span class="name">Name: </span>Md. Hasanuzzaman</p>
      <p>Count: {{ store.state.count }}</p>
      <div class="count">
        <button @click="decre">-</button>
        <button @click="incre">+</button>
      </div>
    </div>
  </div>
</template>

<style>
.name {
  font-weight: bold;
}
.count {
  display: flex;
}
button {
  cursor: pointer;
  margin: 0 2px;
}
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
