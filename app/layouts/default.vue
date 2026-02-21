<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <Header />
    <main style="flex: 1;">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>