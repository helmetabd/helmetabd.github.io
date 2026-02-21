<template>
  <div>
    <!-- Hero -->
    <section id="hero" class="hero-section">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>
      <div class="container" style="justify-content: center; display: flex;">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="text-gradient">Hi, I'm</span><br />
            <span>{{ portfolioData.name }}</span>
          </h1>
          <p class="hero-subtitle">{{ portfolioData.title }}</p>
          <p class="hero-tagline">{{ portfolioData.tagline }}</p>
          <div class="hero-btns">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
      <div class="hero-scroll">↓</div>
    </section>

    <!-- About -->
    <section id="about" class="section bg-dark-1">
      <div class="container">
        <div class="about-grid">

          <div v-if="portfolioData.design.show_photos && portfolioData.gallery.length > 0">
            <div class="about-photo-wrapper" @click="showGallery = true">
              <img :src="portfolioData.gallery[0]?.image" :alt="portfolioData.gallery[0]?.alt" class="about-photo" />
              <div class="about-photo-border"></div>
            </div>
          </div>

          <div>
            <h2 class="section-title align-left mb-3">About Me</h2>
            <p class="text-secondary-color mb-5">{{ portfolioData.about }}</p>

            <div class="info-grid">
              <div class="card">
                <span class="info-icon">🎂</span>
                <p class="info-label">Age</p>
                <p class="info-value">{{ portfolioData.age }} years old</p>
              </div>
              <div class="card">
                <span class="info-icon">📍</span>
                <p class="info-label">Location</p>
                <p class="info-value">{{ portfolioData.location }}</p>
              </div>
              <div class="card">
                <span class="info-icon">✉️</span>
                <p class="info-label">Email</p>
                <p class="info-value text-xs">{{ portfolioData.email }}</p>
              </div>
              <div class="card">
                <span class="info-icon">💼</span>
                <p class="info-label">Experience</p>
                <p class="info-value">2+ years</p>
              </div>
            </div>

            <a href="#contact" class="btn-primary">Let's Work Together</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section bg-dark-2">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Technologies I work with</p>

        <div class="skills-grid">
          <div class="card" v-for="(category, key) in skillCategories" :key="key">
            <div class="skill-category-header">
              <span class="skill-category-icon">{{ category.icon }}</span>
              <h3 class="skill-category-title">{{ category.label }}</h3>
            </div>
            <div class="flex flex-col gap-3">
              <div class="skill-item" v-for="skill in portfolioData.skills[key]" :key="skill.name">
                <div class="skill-meta">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: getSkillWidth(skill.level) }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="section bg-dark-1">
      <div class="container">
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-subtitle">My professional journey</p>

        <div class="experience-grid">
          <div>
            <h3 class="experience-col-title">Work Experience</h3>
            <div v-for="(exp, i) in portfolioData.experience" :key="i" class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-date">{{ exp.period }}</p>
              <h4 class="timeline-title">{{ exp.position }}</h4>
              <p class="timeline-company">{{ exp.company }}</p>
              <p class="timeline-description">{{ exp.description }}</p>
              <ul class="timeline-list">
                <li v-for="a in exp.achievements" :key="a">{{ a }}</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="experience-col-title">Education</h3>
            <div v-for="(edu, i) in portfolioData.education" :key="i" class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-date">{{ edu.year }}</p>
              <h4 class="timeline-title">{{ edu.degree }}</h4>
              <p class="timeline-company">{{ edu.institution }}</p>
              <p class="timeline-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section bg-dark-2">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>

        <div class="projects-grid">
          <div class="project-card" v-for="project in portfolioData.major_projects" :key="project.name">
            <img v-if="project.image" :src="project.image" :alt="project.name" class="project-image" />
            <div class="project-content">
              <div class="project-header">
                <div>
                  <h3 class="project-title">{{ project.name }}</h3>
                  <p class="project-type">{{ project.type }}</p>
                </div>
                <span class="project-status" :class="getStatusClass(project.status)">{{ project.status }}</span>
              </div>

              <p class="project-description">{{ project.description }}</p>

              <p class="tech-label">Technologies</p>
              <div class="tech-badges">
                <span
                  v-for="tech in [...(project.technologies as TechnologyStack).backend, ...(project.technologies as TechnologyStack).frontend, ...(project.technologies as TechnologyStack).tools]"
                  :key="tech" class="tech-badge">{{ tech }}</span>
              </div>

              <div class="project-links">
                <a v-if="project.github_backend" :href="project.github_backend" target="_blank"
                  rel="noopener noreferrer" class="project-link">📦 Backend</a>
                <a v-if="project.github_frontend" :href="project.github_frontend" target="_blank"
                  rel="noopener noreferrer" class="project-link">📦 Frontend</a>
                <a v-if="project.github && !project.github_backend && !project.github_frontend" :href="project.github"
                  target="_blank" rel="noopener noreferrer" class="project-link">📦 GitHub</a>
                <a v-if="project.live_demo" :href="project.live_demo" target="_blank" rel="noopener noreferrer"
                  class="project-link">🔗 Live Demo</a>
              </div>
            </div>
          </div>
        </div>

        <h3 class="other-projects-title">Other Projects</h3>
        <div class="other-projects-grid">
          <div class="card flex flex-col" v-for="project in portfolioData.other_projects" :key="project.name">
            <h4 class="fw-bold mb-1" style="font-size: 0.95rem; color: var(--text-primary);">{{ project.name }}</h4>
            <p class="mb-2 text-xs fw-semibold text-primary-color">{{ project.type }}</p>
            <p class="mb-3 text-sm text-secondary-color">{{ project.description }}</p>
            <div class="tech-badges mb-3">
              <span v-for="tech in (project.technologies as string[]).slice(0, 3)" :key="tech" class="tech-badge">{{
                tech }}</span>
            </div>
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link mt-auto">📦 View</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section bg-dark-1">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's work together</p>

        <div class="contact-wrapper">
          <div class="card">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input id="name" v-model="form.name" type="text" class="input-field" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input id="email" v-model="form.email" type="email" class="input-field" placeholder="your@email.com"
                  required />
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model="form.message" rows="5" class="input-field" placeholder="Your message..."
                  required></textarea>
              </div>
              <button type="submit" class="btn-primary btn-full">Send Message</button>
            </form>
          </div>

          <div class="contact-alts">
            <p class="contact-alts-text">Or reach out directly</p>
            <div class="contact-alts-links">
              <a :href="`mailto:${portfolioData.contact.email}`" class="project-link">✉️ Email</a>
              <a :href="portfolioData.social.whatsapp" target="_blank" rel="noopener noreferrer" class="project-link">💬
                WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Modal -->
    <div v-if="showGallery" class="gallery-modal" @click="showGallery = false">
      <div class="gallery-modal-inner" @click.stop>
        <button class="gallery-close" @click="showGallery = false">×</button>
        <div class="gallery-grid">
          <div v-for="(photo, i) in portfolioData.gallery" :key="i" class="gallery-item">
            <img :src="photo.image" :alt="photo.alt" class="gallery-image" />
            <div class="gallery-overlay">
              <p class="gallery-caption">{{ photo.alt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData, type TechnologyStack } from '../data/portfolio'

const showGallery = ref(false)
const form = ref({ name: '', email: '', message: '' })

const skillCategories = {
  backend: { icon: '⚙️', label: 'Backend' },
  frontend: { icon: '💻', label: 'Frontend' },
  tools: { icon: '🔧', label: 'Tools' },
  other: { icon: '✨', label: 'Other' },
}

const getSkillWidth = (level: string) => {
  const map: Record<string, number> = { Beginner: 25, Intermediate: 50, Advanced: 75, Expert: 100 }
  return `${map[level] || 50}%`
}

const getStatusClass = (status: string) => {
  const map: Record<string, string> = {
    'In Progress': 'status-progress',
    'Completed': 'status-completed',
    'On Hold': 'status-hold',
  }
  return map[status] || 'status-hold'
}

const handleSubmit = () => {
  alert('Thank you for your message! This is a demo form.')
  form.value = { name: '', email: '', message: '' }
}
</script>