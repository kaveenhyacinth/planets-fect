<script lang="ts" setup>
import MobileMenu from "~/components/mobile-menu.vue";

const {$apolloClient} = useNuxtApp()
const {fetchPlanets} = usePlanets()

const planetSummery = ref([])

const fetchPlanetData = async () => {
  try {
    planetSummery.value = await fetchPlanets($apolloClient)
  } catch {
  }
}

await fetchPlanetData()
</script>

<template>
  <div>
    <header class="py-4 px-6 border-b border-line-color">
      <div class="flex justify-between items-center">
        <h1 class="font-antonio font-medium text-[28px]/9 uppercase">The Planets</h1>
        <mobile-menu :planets="planetSummery"/>
      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer/>
  </div>
</template>

<style lang="scss" scoped>
</style>