<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="hero-section d-flex align-items-center justify-content-center">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>

      <div class="container position-relative text-center">
        <h1 class="hero-title mb-3">
          <span class="text-gradient">Hi, I'm</span><br />
          <span class="text-white">{{ portfolioData.name }}</span>
        </h1>
        <p class="fs-4 text-secondary mb-2">{{ portfolioData.title }}</p>
        <p class="text-muted mb-5 mx-auto" style="max-width: 540px;">{{ portfolioData.tagline }}</p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <a href="#projects" class="btn-primary">View My Work</a>
          <a href="#contact" class="btn-secondary">Get In Touch</a>
        </div>
      </div>

      <div class="hero-scroll-hint">↓</div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-dark-1">
      <div class="container">
        <div class="row g-5 align-items-center">

          <div class="col-12 col-lg-5" v-if="portfolioData.design.show_photos && portfolioData.gallery.length > 0">
            <div class="about-photo-wrapper" @click="showGallery = true">
              <img :src="portfolioData.gallery[0]?.image" :alt="portfolioData.gallery[0]?.alt" class="about-photo" />
              <div class="about-photo-border"></div>
            </div>
          </div>

          <div class="col-12 col-lg-7">
            <h2 class="section-title text-start mb-3">About Me</h2>
            <p class="text-secondary mb-4">{{ portfolioData.about }}</p>

            <div class="row g-3 mb-4">
              <div class="col-6">
                <div class="card h-100">
                  <span class="info-icon">🎂</span>
                  <p class="info-label">Age</p>
                  <p class="info-value">{{ portfolioData.age }} years old</p>
                </div>
              </div>
              <div class="col-6">
                <div class="card h-100">
                  <span class="info-icon">📍</span>
                  <p class="info-label">Location</p>
                  <p class="info-value">{{ portfolioData.location }}</p>
                </div>
              </div>
              <div class="col-6">
                <div class="card h-100">
                  <span class="info-icon">✉️</span>
                  <p class="info-label">Email</p>
                  <p class="info-value small">{{ portfolioData.email }}</p>
                </div>
              </div>
              <div class="col-6">
                <div class="card h-100">
                  <span class="info-icon">💼</span>
                  <p class="info-label">Experience</p>
                  <p class="info-value">2+ years</p>
                </div>
              </div>
            </div>

            <a href="#contact" class="btn-primary">Let's Work Together</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-padding bg-dark-2">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Technologies I work with</p>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-3" v-for="(category, key) in skillCategories" :key="key">
            <div class="card h-100">
              <div class="d-flex align-items-center mb-4">
                <span class="fs-4 me-2">{{ category.icon }}</span>
                <h3 class="fw-bold text-white mb-0 fs-5">{{ category.label }}</h3>
              </div>
              <div class="d-flex flex-column gap-3">
                <div v-for="skill in portfolioData.skills[key]" :key="skill.name">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="text-secondary small">{{ skill.name }}</span>
                    <span class="text-muted small">{{ skill.level }}</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" :style="{ width: getSkillWidth(skill.level) }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section-padding bg-dark-1">
      <div class="container">
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-subtitle">My professional journey</p>

        <div class="row g-5">
          <div class="col-12 col-lg-6">
            <h3 class="fw-bold text-white mb-4">Work Experience</h3>
            <div v-for="(exp, index) in portfolioData.experience" :key="index" class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-date">{{ exp.period }}</p>
              <h4 class="timeline-title">{{ exp.position }}</h4>
              <p class="fw-semibold mb-2" style="color: var(--primary);">{{ exp.company }}</p>
              <p class="timeline-description mb-3">{{ exp.description }}</p>
              <ul class="ps-3 text-muted small">
                <li v-for="achievement in exp.achievements" :key="achievement" class="mb-1">{{ achievement }}</li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <h3 class="fw-bold text-white mb-4">Education</h3>
            <div v-for="(edu, index) in portfolioData.education" :key="index" class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-date">{{ edu.year }}</p>
              <h4 class="timeline-title">{{ edu.degree }}</h4>
              <p class="fw-semibold mb-2" style="color: var(--primary);">{{ edu.institution }}</p>
              <p class="timeline-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding bg-dark-2">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>

        <div class="row g-4 mb-5">
          <div class="col-12 col-lg-6" v-for="project in portfolioData.major_projects" :key="project.name">
            <div class="project-card h-100">
              <div v-if="project.image">
                <img :src="project.image" :alt="project.name" class="project-image" />
              </div>
              <div class="project-content">
                <div class="d-flex align-items-start justify-content-between mb-3">
                  <div>
                    <h3 class="project-title mb-1">{{ project.name }}</h3>
                    <p class="fw-semibold mb-0" style="color: var(--primary);">{{ project.type }}</p>
                  </div>
                  <span class="project-status-badge" :class="getStatusClass(project.status)">{{ project.status }}</span>
                </div>

                <p class="project-description">{{ project.description }}</p>

                <p class="fw-semibold text-white small mb-2">Technologies</p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in [...(project.technologies as TechnologyStack).backend, ...(project.technologies as TechnologyStack).frontend, ...(project.technologies as TechnologyStack).tools]"
                    :key="tech" class="project-tech-badge">
                    {{ tech }}
                  </span>
                </div>

                <div class="d-flex gap-3">
                  <a v-if="project.github_backend" :href="project.github_backend" target="_blank" rel="noopener noreferrer" class="project-link">📦 Backend</a>
                  <a v-if="project.github_frontend" :href="project.github_frontend" target="_blank" rel="noopener noreferrer" class="project-link">📦 Frontend</a>
                  <a v-if="project.github && !project.github_backend && !project.github_frontend" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">📦 GitHub</a>
                  <a v-if="project.live_demo" :href="project.live_demo" target="_blank" rel="noopener noreferrer" class="project-link">🔗 Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="fw-bold text-white mb-4">Other Projects</h3>
        <div class="row g-4">
          <div class="col-12 col-sm-6 col-lg-3" v-for="project in portfolioData.other_projects" :key="project.name">
            <div class="card h-100 d-flex flex-column">
              <h4 class="fw-bold text-white mb-1 fs-6">{{ project.name }}</h4>
              <p class="fw-semibold small mb-2" style="color: var(--primary);">{{ project.type }}</p>
              <p class="text-secondary small mb-3">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-1 mb-3">
                <span v-for="tech in (project.technologies as string[]).slice(0, 3)" :key="tech" class="project-tech-badge">{{ tech }}</span>
              </div>
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link mt-auto">📦 View</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-dark-1">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's work together</p>

        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card">
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label for="name" class="form-label fw-semibold text-white mb-2">Name</label>
                  <input id="name" v-model="form.name" type="text" class="input-field" placeholder="Your name" required />
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label fw-semibold text-white mb-2">Email</label>
                  <input id="email" v-model="form.email" type="email" class="input-field" placeholder="your@email.com" required />
                </div>
                <div class="mb-4">
                  <label for="message" class="form-label fw-semibold text-white mb-2">Message</label>
                  <textarea id="message" v-model="form.message" rows="5" class="input-field" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" class="btn-primary w-100">Send Message</button>
              </form>
            </div>

            <div class="mt-5 text-center">
              <p class="text-muted mb-3">Or reach out directly</p>
              <div class="d-flex justify-content-center gap-4">
                <a :href="`mailto:${portfolioData.contact.email}`" class="project-link">✉️ Email</a>
                <a :href="portfolioData.social.whatsapp" target="_blank" rel="noopener noreferrer" class="project-link">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Modal -->
    <div v-if="showGallery" class="gallery-modal" @click="showGallery = false">
      <div class="gallery-modal-inner" @click.stop>
        <button @click="showGallery = false" class="gallery-close">×</button>
        <div class="row g-3">
          <div v-for="(photo, index) in portfolioData.gallery" :key="index" class="col-12 col-md-6 col-lg-4">
            <div class="gallery-item">
              <img :src="photo.image" :alt="photo.alt" class="gallery-image" />
              <div class="gallery-overlay">
                <p class="gallery-caption">{{ photo.alt }}</p>
              </div>
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
  backend:  { icon: '⚙️', label: 'Backend' },
  frontend: { icon: '💻', label: 'Frontend' },
  tools:    { icon: '🔧', label: 'Tools' },
  other:    { icon: '✨', label: 'Other' },
}

const getSkillWidth = (level: string) => {
  const map: Record<string, number> = { Beginner: 25, Intermediate: 50, Advanced: 75, Expert: 100 }
  return `${map[level] || 50}%`
}

const getStatusClass = (status: string) => {
  const map: Record<string, string> = {
    'In Progress': 'status-progress',
    'Completed':   'status-completed',
    'On Hold':     'status-hold',
  }
  return map[status] || 'status-hold'
}

const handleSubmit = () => {
  alert('Thank you for your message! This is a demo form.')
  form.value = { name: '', email: '', message: '' }
}
</script>