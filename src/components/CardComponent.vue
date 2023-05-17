<script>
export default {
  props: ['cardData'],
  methods: {
    footerClick() {
      this.$emit('footer-click', this.cardData)
    }
  }
}
</script>

<template>
  <div class="card-body">
    <div class="card-header">{{ cardData }}</div>
    <div class="card-details">
      <slot>Default slot value</slot>
    </div>
    <div @click="footerClick" class="card-footer">
      <slot name="footer">Default footer</slot>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  min-height: 200px;
  max-width: 150px;
  background-color: rgb(117, 172, 153);
  color: black;
}
.card-header {
  background-color: blueviolet;
  text-align: center;
  color: black;
}
.card-details {
  padding: 0.5rem;
  height: 80%;
}
.card-footer {
  background-color: darkgray;
  text-align: center;
}
</style>
