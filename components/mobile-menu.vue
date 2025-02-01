<script lang="ts" setup>
defineProps<{
  planets: PlanetSummery[]
}>()

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <div class="mobile-menu">
    <nuxt-icon
        :class="{'mobile-menu__trigger--active': isMobileMenuOpen}"
        class="mobile-menu__trigger"
        filled
        name="hamburger"
        @click="toggleMobileMenu"/>
    <transition
        enter-active-class="animate__animated animate__faster animate__slideInRight"
        leave-active-class="animate__animated animate__faster animate__slideOutRight">
      <div v-if="isMobileMenuOpen" class="mobile-menu__container">
        <nav class="p-6">
          <ul>
            <li v-for="(planet, index) in planets" :key="index" class="py-5 border-b border-line-color">
              <NuxtLink class="flex justify-between items-center">
                <div class="flex items-center gap-6">
                  <div :style="{backgroundColor: planet.colors.menu}" class="w-5 h-5 rounded-full"/>
                  <p class="uppercase font-bold text-[15px]/[25px] tracking-[1.36px]">{{ planet.name }}</p>
                </div>
                <NuxtIcon class="text-[#D8D8D8]" filled name="chevron-right"/>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  &__trigger {
    cursor: pointer;

    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  &__container {
    $header-breather: 70px;

    position: fixed;
    top: $header-breather;
    right: 0;
    width: 100vw;
    height: calc(100vh - $header-breather);
    background-color: $bg-color;
  }
}

</style>