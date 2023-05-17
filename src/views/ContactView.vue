<script setup>
import store from '../storage/index'
import { ref } from 'vue'
// let count = store.state.count

const incre = () => {
  store.commit('increment')
}
const decre = () => {
  store.commit('decrement')
}

let skills = ref(['Vue.js', 'React.js', 'Angular.js'])
const newSkill = ref('')

const handleSkillChange = (value) => {
  newSkill.value = value
}

const addSkill = () => {
  const skill = newSkill.value
  skills.value.push(skill)
  newSkill.value = ''
}

const deleteSkill = (i) => {
  skills.value.splice(i, 1)
}

const boxToggle = ref(true)

const toggle = () => {
  boxToggle.value = !boxToggle.value
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

      <div class="">
        <input
          type="text"
          placeholder="Enter a skill"
          :value="newSkill"
          @input="handleSkillChange($event.target.value)"
        />
        <button @click="addSkill">Add</button>
        <br />
        <ol>
          <li v-for="(skill, i) of skills" :key="skill">
            {{ skill }}
            <button @click="deleteSkill(i)">x</button>
          </li>
        </ol>
      </div>
      <div>
        <button @click="toggle">Toggle</button>
        <div class="box" v-if="boxToggle"></div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  height: 4rem;
  width: 4rem;
  background-color: aqua;
}
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
