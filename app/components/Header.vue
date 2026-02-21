<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container" style="justify-content:stretch">
      <div class="navbar-inner" style="justify-content: space-between;">
        <NuxtLink to="/" class="navbar-logo">HA</NuxtLink>

        <!-- Desktop -->
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name">
            <a :href="item.href" class="nav-link" :class="{ active: activeSection === item.section }"
              @click.prevent="scrollToSection(item.section)">{{ item.name }}</a>
          </li>
        </ul>

        <!-- Mobile toggle -->
        <button class="nav-mobile-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
          {{ isMobileMenuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile menu -->
      <nav class="nav-mobile-menu" :class="{ open: isMobileMenuOpen }">
        <a v-for="item in navItems" :key="item.name" :href="item.href" class="nav-link"
          :class="{ active: activeSection === item.section }"
          @click.prevent="scrollToSection(item.section); isMobileMenuOpen = false">{{ item.name }}</a>
      </nav>
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
  { name: 'Contact', href: '#contact', section: 'contact' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  for (const item of navItems) {
    const el = document.getElementById(item.section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) { activeSection.value = item.section; break }
    }
  }
}

const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>