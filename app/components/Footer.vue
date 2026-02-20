<template>
  <footer class="border-top border-secondary py-5" style="background: var(--bg-secondary);">
    <div class="container">
      <div class="row g-4">

        <!-- About -->
        <div class="col-12 col-md-4">
          <h3 class="fw-bold text-white mb-3">About</h3>
          <p class="text-secondary mb-0">
            A passionate full-stack developer building modern web applications with passion and precision.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-12 col-md-4">
          <h3 class="fw-bold text-white mb-3">Quick Links</h3>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li v-for="item in navItems" :key="item.name">
              <a
                :href="item.href"
                class="footer-link text-secondary text-decoration-none"
                @click.prevent="scrollToSection(item.section)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="col-12 col-md-4">
          <h3 class="fw-bold text-white mb-3">Connect</h3>
          <div class="d-flex gap-3 flex-wrap">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="social-icon" />
            </a>
          </div>
        </div>

      </div>

      <!-- Copyright -->
      <div class="mt-5 pt-4 border-top border-secondary text-center">
        <p class="text-secondary mb-0">
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
  { name: 'Home',       href: '#hero',       section: 'hero' },
  { name: 'About',      href: '#about',      section: 'about' },
  { name: 'Skills',     href: '#skills',     section: 'skills' },
  { name: 'Experience', href: '#experience', section: 'experience' },
  { name: 'Projects',   href: '#projects',   section: 'projects' },
  { name: 'Contact',    href: '#contact',    section: 'contact' },
]

const socialLinks = [
  { name: 'GitHub',    icon: 'mdi:github',    url: portfolioData.social.github },
  { name: 'LinkedIn',  icon: 'mdi:linkedin',  url: portfolioData.social.linkedin  || '#' },
  { name: 'Instagram', icon: 'mdi:instagram', url: portfolioData.social.instagram || '#' },
  { name: 'WhatsApp',  icon: 'mdi:whatsapp',  url: portfolioData.social.whatsapp },
  { name: 'YouTube',   icon: 'mdi:youtube',   url: portfolioData.social.youtube   || '#' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
</script>