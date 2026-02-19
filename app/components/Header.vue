<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300" :class="{ 'py-2': isScrolled, 'py-4': !isScrolled }">
    <div class="container-custom">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-gradient">
          HA
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              class="nav-link"
              :class="{ 'nav-link-active': activeSection === item.section }"
              @click.prevent="scrollToSection(item.section)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white focus:outline-none"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span v-if="!isMobileMenuOpen" class="text-2xl">☰</span>
          <span v-else class="text-2xl">✕</span>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-800"
      >
        <ul class="flex flex-col space-y-4 pt-4">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              class="nav-link block"
              :class="{ 'nav-link-active': activeSection === item.section }"
              @click.prevent="scrollToSection(item.section); isMobileMenuOpen = false"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { name: 'Home', href: '#hero', section: 'hero' },
  { name: 'About', href: '#about', section: 'about' },
  { name: 'Skills', href: '#skills', section: 'skills' },
  { name: 'Experience', href: '#experience', section: 'experience' },
  { name: 'Projects', href: '#projects', section: 'projects' },
  { name: 'Contact', href: '#contact', section: 'contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = navItems.map(item => item.section)
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
