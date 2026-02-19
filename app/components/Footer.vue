<template>
  <footer class="bg-gray-800 border-t border-gray-700 py-12">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">About</h3>
          <p class="text-gray-400">
            A passionate full-stack developer building modern web applications with passion and precision.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.name">
              <a
                :href="item.href"
                class="text-gray-400 hover:text-white transition-colors duration-300"
                @click.prevent="scrollToSection(item.section)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-400">
          © {{ currentYear }} {{ portfolioData.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const currentYear = new Date().getFullYear()

const navItems = [
  { name: 'Home', href: '#hero', section: 'hero' },
  { name: 'About', href: '#about', section: 'about' },
  { name: 'Skills', href: '#skills', section: 'skills' },
  { name: 'Experience', href: '#experience', section: 'experience' },
  { name: 'Projects', href: '#projects', section: 'projects' },
  { name: 'Contact', href: '#contact', section: 'contact' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: portfolioData.social.github },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: portfolioData.social.linkedin || '#' },
  { name: 'Instagram', icon: 'mdi:instagram', url: portfolioData.social.instagram || '#' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: portfolioData.social.whatsapp },
  { name: 'YouTube', icon: 'mdi:youtube', url: portfolioData.social.youtube || '#' }
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
</script>
