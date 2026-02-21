<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div>
          <h3 class="footer-heading">About</h3>
          <p class="footer-text">A passionate full-stack developer building modern web applications with passion and
            precision.</p>
        </div>

        <div>
          <h3 class="footer-heading">Quick Links</h3>
          <nav class="footer-links">
            <a v-for="item in navItems" :key="item.name" :href="item.href" class="footer-link"
              @click.prevent="scrollToSection(item.section)">{{ item.name }}</a>
          </nav>
        </div>

        <div>
          <h3 class="footer-heading">Connect</h3>
          <div class="social-links">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
              rel="noopener noreferrer" class="social-link" :aria-label="social.name">
              <Icon :name="social.icon" />
            </a>
          </div>
        </div>

      </div>

      <div class="footer-copy">
        © {{ currentYear }} {{ portfolioData.name }}. All rights reserved.
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
  { name: 'Contact', href: '#contact', section: 'contact' },
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: portfolioData.social.github },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: portfolioData.social.linkedin || '#' },
  { name: 'Instagram', icon: 'mdi:instagram', url: portfolioData.social.instagram || '#' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: portfolioData.social.whatsapp },
  { name: 'YouTube', icon: 'mdi:youtube', url: portfolioData.social.youtube || '#' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>