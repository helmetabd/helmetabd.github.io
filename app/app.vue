<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import '~/app.css'

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
