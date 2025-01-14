<template>
  <div>
    <NuxtRouteAnnouncer/>
    <div>
      <pre>
{{ planets }}
      </pre>
    </div>
  </div>
</template>

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