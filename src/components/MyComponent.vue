<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
defineProps({
  title: String
})
</script>

<template>
  <h1 class="text-amber-600">Component {{title}}</h1>
  <h2>{{ count }}</h2>
  <button @click="increment">+</button>
  <slot/>
</template>

<style scoped>

</style>