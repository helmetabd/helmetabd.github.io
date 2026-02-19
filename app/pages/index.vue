<template>
  <div>
    <!-- Hero Section -->
    <section id="hero"
      class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10 text-center">
        <div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="text-gradient">Hi, I'm</span>
            <br />
            <span class="text-white">{{ portfolioData.name }}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-8">
            {{ portfolioData.title }}
          </p>
          <p class="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {{ portfolioData.tagline }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" class="btn-primary">
              View My Work
            </a>
            <a href="#contact" class="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span class="text-gray-400 text-2xl">↓</span>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div v-if="portfolioData.design.show_photos && portfolioData.gallery.length > 0">
              <div class="relative">
                <img :src="portfolioData.gallery[0]?.image" :alt="portfolioData.gallery[0]?.alt"
                  class="rounded-2xl shadow-2xl w-full max-w-md mx-auto cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  @click="showGallery = true" />
                <div class="absolute inset-0 rounded-2xl border-4 border-blue-500/20"></div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="section-title">About Me</h2>
            <p class="text-gray-400 text-lg mb-8">
              {{ portfolioData.about }}
            </p>

            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="card">
                <span class="text-2xl mb-2">🎂</span>
                <p class="text-gray-400 text-sm">Age</p>
                <p class="text-white font-semibold">{{ portfolioData.age }} years old</p>
              </div>
              <div class="card">
                <span class="text-2xl mb-2">📍</span>
                <p class="text-gray-400 text-sm">Location</p>
                <p class="text-white font-semibold">{{ portfolioData.location }}</p>
              </div>
              <div class="card">
                <span class="text-2xl mb-2">✉️</span>
                <p class="text-gray-400 text-sm">Email</p>
                <p class="text-white font-semibold text-sm">{{ portfolioData.email }}</p>
              </div>
              <div class="card">
                <span class="text-2xl mb-2">💼</span>
                <p class="text-gray-400 text-sm">Experience</p>
                <p class="text-white font-semibold">2+ years</p>
              </div>
            </div>

            <a href="#contact" class="btn-primary inline-block">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-padding bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Backend -->
          <div class="card">
            <div class="flex items-center mb-6">
              <span class="text-2xl mr-3">⚙️</span>
              <h3 class="text-xl font-bold text-white">Backend</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in portfolioData.skills.backend" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-400 text-sm">{{ skill.level }}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: getSkillWidth(skill.level) }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="card">
            <div class="flex items-center mb-6">
              <span class="text-2xl mr-3">💻</span>
              <h3 class="text-xl font-bold text-white">Frontend</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in portfolioData.skills.frontend" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-400 text-sm">{{ skill.level }}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: getSkillWidth(skill.level) }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="card">
            <div class="flex items-center mb-6">
              <span class="text-2xl mr-3">🔧</span>
              <h3 class="text-xl font-bold text-white">Tools</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in portfolioData.skills.tools" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-400 text-sm">{{ skill.level }}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: getSkillWidth(skill.level) }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other -->
          <div class="card">
            <div class="flex items-center mb-6">
              <span class="text-2xl mr-3">✨</span>
              <h3 class="text-xl font-bold text-white">Other</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in portfolioData.skills.other" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-400 text-sm">{{ skill.level }}</span>
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

    <!-- Experience Section -->
    <section id="experience" class="section-padding bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title">Experience & Education</h2>
          <p class="section-subtitle">My professional journey</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <!-- Experience -->
          <div class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-8">Work Experience</h3>
            <div class="space-y-8">
              <div v-for="(exp, index) in portfolioData.experience" :key="index" class="timeline-item">
                <div class="timeline-dot"></div>
                <p class="timeline-date">{{ exp.period }}</p>
                <h4 class="timeline-title">{{ exp.position }}</h4>
                <p class="text-blue-500 font-semibold mb-2">{{ exp.company }}</p>
                <p class="timeline-description mb-4">{{ exp.description }}</p>
                <ul class="list-disc list-inside text-gray-400 space-y-1">
                  <li v-for="achievement in exp.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-8">Education</h3>
            <div class="space-y-8">
              <div v-for="(edu, index) in portfolioData.education" :key="index" class="timeline-item">
                <div class="timeline-dot"></div>
                <p class="timeline-date">{{ edu.year }}</p>
                <h4 class="timeline-title">{{ edu.degree }}</h4>
                <p class="text-blue-500 font-semibold mb-2">{{ edu.institution }}</p>
                <p class="timeline-description">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Some of my recent work</p>
        </div>

        <!-- Major Projects -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
           <div v-for="(project, index) in portfolioData.major_projects" :key="project.name" class="project-card">
             <div class="project-content">
               <div v-if="project.image" class="mb-4">
                 <img :src="project.image" :alt="project.name" class="project-image w-full h-48 object-cover rounded-lg" />
               </div>
               <div class="flex items-start justify-between mb-4">
                 <div>
                   <h3 class="project-title">{{ project.name }}</h3>
                   <p class="text-blue-500 font-semibold">{{ project.type }}</p>
                 </div>
                 <span class="px-3 py-1 rounded-full text-sm font-semibold" :class="getStatusClass(project.status)">
                   {{ project.status }}
                 </span>
               </div>

               <p class="project-description">
                 {{ project.description }}
               </p>

               <div class="mb-4">
                 <h4 class="text-white font-semibold mb-2">Technologies</h4>
                 <div class="flex flex-wrap gap-2">
                   <span
                     v-for="tech in [...(project.technologies as TechnologyStack).backend, ...(project.technologies as TechnologyStack).frontend, ...(project.technologies as TechnologyStack).tools]"
                     :key="tech" class="project-tech-badge">
                     {{ tech }}
                   </span>
                 </div>
               </div>

               <div class="flex gap-4">
                 <a v-if="project.github_backend" :href="project.github_backend" target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                   <span class="mr-2">📦</span>
                   Backend
                 </a>
                 <a v-if="project.github_frontend" :href="project.github_frontend" target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                   <span class="mr-2">📦</span>
                   Frontend
                 </a>
                 <a v-if="project.github && !project.github_backend && !project.github_frontend" :href="project.github"
                   target="_blank" rel="noopener noreferrer"
                   class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                   <span class="mr-2">📦</span>
                   GitHub
                 </a>
                 <a v-if="project.live_demo" :href="project.live_demo" target="_blank" rel="noopener noreferrer"
                   class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                   <span class="mr-2">🔗</span>
                   Live Demo
                 </a>
               </div>
             </div>
           </div>
        </div>

        <!-- Other Projects -->
        <div>
          <h3 class="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(project, index) in portfolioData.other_projects" :key="project.name"
              class="card hover:-translate-y-1 transition-transform duration-300">
              <h4 class="text-lg font-bold text-white mb-2">{{ project.name }}</h4>
              <p class="text-blue-500 text-sm font-semibold mb-2">{{ project.type }}</p>
              <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1 mb-4">
                <span v-for="tech in (project.technologies as string[]).slice(0, 3)" :key="tech"
                  class="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.github" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <span class="mr-2">📦</span>
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's work together</p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="card">
            <form @submit.prevent="handleSubmit">
              <div class="mb-6">
                <label for="name" class="block text-white font-semibold mb-2">Name</label>
                <input id="name" v-model="form.name" type="text" class="input-field" placeholder="Your name" required />
              </div>

              <div class="mb-6">
                <label for="email" class="block text-white font-semibold mb-2">Email</label>
                <input id="email" v-model="form.email" type="email" class="input-field" placeholder="your@email.com"
                  required />
              </div>

              <div class="mb-6">
                <label for="message" class="block text-white font-semibold mb-2">Message</label>
                <textarea id="message" v-model="form.message" rows="5" class="input-field" placeholder="Your message..."
                  required></textarea>
              </div>

              <button type="submit" class="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div class="mt-12 text-center">
            <p class="text-gray-400 mb-6">Or reach out directly</p>
            <div class="flex justify-center gap-6">
              <a :href="`mailto:${portfolioData.contact.email}`"
                class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <span class="mr-2 text-xl">✉️</span>
                Email
              </a>
              <a :href="portfolioData.social.whatsapp" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <span class="mr-2 text-xl">💬</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery Modal -->
    <div v-if="showGallery" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="showGallery = false">
      <div class="relative max-w-4xl max-h-screen overflow-auto" @click.stop>
        <button @click="showGallery = false"
          class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors">
          ×
        </button>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(photo, index) in portfolioData.gallery" :key="index" class="gallery-item">
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

const form = ref({
  name: '',
  email: '',
  message: ''
})

const getSkillWidth = (level: string) => {
  const levelMap: Record<string, number> = {
    'Beginner': 25,
    'Intermediate': 50,
    'Advanced': 75,
    'Expert': 100
  }
  return `${levelMap[level] || 50}%`
}

const getStatusClass = (status: string) => {
  const statusMap: Record<string, string> = {
    'In Progress': 'bg-yellow-500 text-white',
    'Completed': 'bg-green-500 text-white',
    'On Hold': 'bg-red-500 text-white'
  }
  return statusMap[status] || 'bg-gray-500 text-white'
}

const handleSubmit = () => {
  alert('Thank you for your message! This is a demo form.')
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>
