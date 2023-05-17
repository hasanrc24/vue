<script>
import CardComponent from '../components/CardComponent.vue'

export default {
  components: { CardComponent },
  methods: {
    handleClick() {
      console.log('Clicked')
    },
    footerClicked(details) {
      console.log('You Clicked', details)
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>This is Card View with dynamic props</h1>
    <br />
    <div class="cards">
      <CardComponent cardData="Header 1" v-on:footer-click="footerClicked">
        <template v-slot:default>
          <p>This is details of first card</p>
        </template>

        <template v-slot:footer>
          <p>First footer</p>
        </template>
      </CardComponent>

      <CardComponent cardData="Header 2">
        <template v-slot:default>
          <p>Details of second card.</p>
        </template>

        <template v-slot:footer>
          <p>Second footer</p>
        </template>
      </CardComponent>

      <CardComponent cardData="Header 3">
        <template v-slot:footer>
          <button @click="handleClick">Click</button>
        </template>
      </CardComponent>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cards {
    display: flex;
    gap: 1rem;
  }
}
</style>
