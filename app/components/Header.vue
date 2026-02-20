<template>
  <header
    class="fixed-top border-bottom border-secondary"
    :class="isScrolled ? 'py-1' : 'py-3'"
    style="background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); transition: padding 0.3s ease; z-index: 1030;"
  >
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-decoration-none fw-bold fs-4 text-gradient">
          HA
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="d-none d-md-flex align-items-center gap-4 list-unstyled mb-0">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              class="nav-link py-2 px-1"
              :class="{ 'nav-link-active': activeSection === item.section }"
              @click.prevent="scrollToSection(item.section)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          class="d-md-none btn btn-link text-white p-0 border-0"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span class="fs-4">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="d-md-none mt-3 pt-3 border-top border-secondary">
        <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              class="nav-link d-block"
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
  { name: 'Home',       href: '#hero',       section: 'hero' },
  { name: 'About',      href: '#about',      section: 'about' },
  { name: 'Skills',     href: '#skills',     section: 'skills' },
  { name: 'Experience', href: '#experience', section: 'experience' },
  { name: 'Projects',   href: '#projects',   section: 'projects' },
  { name: 'Contact',    href: '#contact',    section: 'contact' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  for (const item of navItems) {
    const el = document.getElementById(item.section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = item.section
        break
      }
    }
  }
}

const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>