<script lang="ts" setup>
import {usePlanets} from "~/composables/usePlanets";

const {$apolloClient} = useNuxtApp()
const {fetchPlanets} = usePlanets()

const planets = ref([])

onMounted(async () => {
  try {
    planets.value = await fetchPlanets($apolloClient)
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div>
    <div>
      Home
    </div>
  </div>
</template>

<style scoped>

</style>