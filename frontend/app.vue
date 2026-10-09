<template>
  <div class="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
    <!-- Ambient Background Glows -->
    <div class="glow-effect top-[-100px] left-[10%] animate-pulse-slow"></div>
    <div class="glow-effect top-[40%] right-[-100px] animate-pulse-slow" style="animation-delay: 2s;"></div>

    <!-- Header -->
    <header class="glass-panel border-b border-slate-800/80 sticky top-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-3.5 cursor-pointer group" @click="currentTab = 'landing'">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center font-extrabold text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition duration-300">
            VD
          </div>
          <div>
            <span class="text-xl font-bold tracking-tight text-white flex items-center space-x-1.5">
              <span>VectraDocs</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </span>
            <span class="block text-[11px] font-semibold text-emerald-400 tracking-wider uppercase">Zero-Leak AI Engine</span>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-1 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
          <button @click="currentTab = 'landing'" :class="currentTab === 'landing' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'" class="px-4 py-2 rounded-xl text-xs font-semibold transition">Overview</button>
          <button @click="currentTab = 'dashboard'" :class="currentTab === 'dashboard' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'" class="px-4 py-2 rounded-xl text-xs font-semibold transition">Dashboard</button>
          <button @click="currentTab = 'documents'" :class="currentTab === 'documents' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'" class="px-4 py-2 rounded-xl text-xs font-semibold transition">Documents</button>
          <button @click="currentTab = 'ai-chat'" :class="currentTab === 'ai-chat' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'" class="px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AI RAG Assistant</span>
          </button>
          <button @click="currentTab = 'settings'" :class="currentTab === 'settings' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'" class="px-4 py-2 rounded-xl text-xs font-semibold transition">Settings</button>
        </nav>

        <div class="flex items-center space-x-4">
          <button @click="currentTab = 'dashboard'" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-emerald-600/20 text-xs tracking-wide">
            Workspace Console
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 relative z-10">
      <!-- 1. LANDING VIEW -->
      <div v-if="currentTab === 'landing'" class="space-y-32 py-16">
        <!-- Hero Section -->
        <section class="max-w-7xl mx-auto px-6 pt-10 pb-6">
          <div class="corp-hero">
            <div class="corp-copy">
              <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase shadow-lg shadow-slate-950/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Strategy • Design • Technology
              </div>

              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.06em] text-white leading-[0.94] mt-8">
                We build <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400">clarity</span>
                for ambitious brands.
              </h1>

              <p class="text-lg text-slate-300 max-w-xl mt-6 leading-relaxed">
                We help growing companies turn complex ideas into elegant digital experiences, sharper positioning, and higher-converting customer journeys.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 mt-8">
                <button @click="currentTab = 'dashboard'" class="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-xl shadow-emerald-500/20 transition duration-300">
                  Start a project
                </button>
                <button @click="currentTab = 'documents'" class="bg-slate-900/70 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-7 py-3.5 rounded-2xl transition duration-300">
                  View our work
                </button>
              </div>

              <div class="brand-row mt-10">
                <span>Trusted by</span>
                <div class="brand-logos">
                  <span>Northstar</span>
                  <span>Velora</span>
                  <span>Omnia</span>
                  <span>NovaPeak</span>
                </div>
              </div>
            </div>

            <div class="corp-visual">
              <div class="visual-frame">
                <div class="visual-grid"></div>

                <div class="floating-window left-window">
                  <div class="window-header">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="window-body">
                    <div class="chart-bars">
                      <i style="height: 38%"></i>
                      <i style="height: 56%"></i>
                      <i style="height: 72%"></i>
                      <i style="height: 64%"></i>
                      <i style="height: 90%"></i>
                    </div>
                  </div>
                </div>

                <div class="floating-window center-window">
                  <div class="project-card">
                    <div class="project-thumb"></div>
                    <div class="project-meta">
                      <p>Brand system</p>
                      <strong>Elara Labs</strong>
                    </div>
                  </div>
                </div>

                <div class="insight-card">
                  <small>Performance</small>
                  <strong>+184%</strong>
                  <span>Qualified pipeline growth</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left">
            <div class="glass-card p-8 rounded-3xl transition duration-300 group">
              <div class="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21V7m8 14V3m-6 18v-8M4 21h16"/></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Brand Strategy</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Clear positioning, sharper value narratives, and messaging systems built to move decision-makers forward.</p>
            </div>

            <div class="glass-card p-8 rounded-3xl transition duration-300 group">
              <div class="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Product Experience</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Interface systems designed to feel premium, intuitive, and conversion-ready from the first touchpoint.</p>
            </div>

            <div class="glass-card p-8 rounded-3xl transition duration-300 group">
              <div class="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Growth Systems</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Measurement-driven launches built with storytelling, performance data, and a scalable design foundation.</p>
            </div>
          </div>
        </section>
      </div>

      <!-- 2. DASHBOARD VIEW -->
      <div v-if="currentTab === 'dashboard'" class="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-fadeIn">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <h1 class="text-3xl font-extrabold text-white tracking-tight">Organization Dashboard</h1>
            <p class="text-sm text-slate-400 mt-1">Real-time overview of secure document pipelines, indexing status, and storage utilization.</p>
          </div>
          <div class="flex items-center space-x-3">
            <button @click="currentTab = 'documents'" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition shadow-lg shadow-emerald-600/20 flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Upload Document</span>
            </button>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Total Documents</p>
            <p class="text-4xl font-black text-white mt-3">142</p>
            <div class="flex items-center space-x-1.5 text-xs text-emerald-400 mt-3 font-medium">
              <span>↑ 12 uploaded this week</span>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Indexed for RAG</p>
            <p class="text-4xl font-black text-white mt-3">138</p>
            <div class="flex items-center space-x-1.5 text-xs text-cyan-400 mt-3 font-medium">
              <span>97.1% success rate</span>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Storage Used</p>
            <p class="text-4xl font-black text-white mt-3">1.2 GB</p>
            <div class="flex items-center space-x-1.5 text-xs text-slate-400 mt-3 font-medium">
              <span>of 50 GB Secure Quota</span>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Active Tenant</p>
            <p class="text-lg font-bold text-emerald-400 mt-3 truncate">Acme Corporation</p>
            <div class="flex items-center space-x-1.5 text-xs text-slate-400 mt-3 font-medium">
              <span>Role: Organization Owner</span>
            </div>
          </div>
        </div>

        <!-- Recent Uploads & System Status -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          <div class="lg:col-span-2 glass-card rounded-2xl p-6 space-y-6">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-white">Recent Documents</h3>
              <button @click="currentTab = 'documents'" class="text-xs text-emerald-400 hover:underline font-semibold">View All Repository</button>
            </div>

            <div class="space-y-3">
              <div v-for="doc in recentDocs" :key="doc.name" class="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/80 rounded-xl hover:border-emerald-500/40 transition duration-300">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-emerald-400 uppercase shadow-inner">
                    {{ doc.ext }}
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold text-white">{{ doc.name }}</h4>
                    <p class="text-xs text-slate-400 mt-0.5">{{ doc.size }} • Uploaded {{ doc.date || 'Today' }}</p>
                  </div>
                </div>
                <span :class="doc.status === 'Indexed' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60' : 'bg-amber-950/80 text-amber-400 border-amber-800/60'" class="text-xs px-3 py-1 rounded-full border font-medium">
                  {{ doc.status }}
                </span>
              </div>
            </div>
          </div>

          <!-- Security & AI Health -->
          <div class="glass-card rounded-2xl p-6 space-y-6">
            <h3 class="text-base font-bold text-white">Security & AI Health</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span class="text-slate-300 font-medium">Tenant Isolation</span>
                <span class="text-emerald-400 font-semibold text-xs bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">Strict</span>
              </div>
              <div class="flex items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span class="text-slate-300 font-medium">Qdrant Vector DB</span>
                <span class="text-emerald-400 font-semibold text-xs bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">Connected</span>
              </div>
              <div class="flex items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span class="text-slate-300 font-medium">Local LLM Engine</span>
                <span class="text-cyan-400 font-semibold text-xs bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/60">Ollama Ready</span>
              </div>
              <div class="flex items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span class="text-slate-300 font-medium">OCR Engine</span>
                <span class="text-teal-400 font-semibold text-xs bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">Tesseract</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. DOCUMENTS MANAGEMENT VIEW -->
      <div v-if="currentTab === 'documents'" class="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-fadeIn">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <h1 class="text-3xl font-extrabold text-white tracking-tight">Secure Document Repository</h1>
            <p class="text-sm text-slate-400 mt-1">Upload, classify, index, and securely manage all your organization files.</p>
          </div>
          <div class="flex items-center space-x-3">
            <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" multiple />
            <button @click="$refs.fileInput.click()" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition shadow-lg shadow-emerald-600/20 flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Upload Files</span>
            </button>
          </div>
        </div>

        <!-- Upload Dropzone Simulation -->
        <div class="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 bg-slate-900/40 rounded-3xl p-10 text-center transition duration-300 cursor-pointer group" @click="$refs.fileInput.click()">
          <div class="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center mx-auto text-emerald-400 mb-4 group-hover:scale-110 transition duration-300 shadow-lg">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
          </div>
          <h3 class="text-base font-semibold text-white">Drag and drop documents here, or click to browse</h3>
          <p class="text-xs text-slate-400 mt-1.5">PDF, TXT, Markdown, DOCX, XLSX, PPTX, CSV, PNG, JPEG supported (Max 50MB)</p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1 relative">
            <span class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <input v-model="searchQuery" type="text" placeholder="Search by title, classification, or content..." class="w-full bg-slate-900/80 border border-slate-800 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition shadow-inner" />
          </div>
          <select class="bg-slate-900/80 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm text-slate-300 focus:outline-none focus:border-emerald-500 transition shadow-inner">
            <option>All Categories</option>
            <option>Invoices</option>
            <option>Contracts</option>
            <option>Technical Docs</option>
            <option>HR / Payroll</option>
          </select>
        </div>

        <!-- Documents Table -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-2xl">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-950/80">
                <th class="p-4 pl-6">Document Name</th>
                <th class="p-4">Type</th>
                <th class="p-4">Classification</th>
                <th class="p-4">Size</th>
                <th class="p-4">Status</th>
                <th class="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/80 text-sm">
              <tr v-for="doc in filteredDocs" :key="doc.name" class="hover:bg-slate-800/40 transition duration-200">
                <td class="p-4 pl-6 font-medium text-white flex items-center space-x-3.5">
                  <span class="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-emerald-400 uppercase shadow-inner">
                    {{ doc.ext }}
                  </span>
                  <span>{{ doc.name }}</span>
                </td>
                <td class="p-4 text-slate-300 text-xs">{{ doc.type }}</td>
                <td class="p-4">
                  <span class="bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium">{{ doc.classification }}</span>
                </td>
                <td class="p-4 text-slate-400 text-xs">{{ doc.size }}</td>
                <td class="p-4">
                  <span :class="doc.status === 'Indexed' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60' : 'bg-amber-950/80 text-amber-400 border-amber-800/60'" class="text-xs px-3 py-1 rounded-full border font-medium">
                    {{ doc.status }}
                  </span>
                </td>
                <td class="p-4 pr-6 text-right space-x-3">
                  <button @click="currentTab = 'ai-chat'" class="text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition">Ask AI</button>
                  <button class="text-slate-400 hover:text-white text-xs font-semibold transition">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 4. AI RAG ASSISTANT VIEW -->
      <div v-if="currentTab === 'ai-chat'" class="max-w-7xl mx-auto px-6 py-10 h-[calc(100vh-5rem)] flex flex-col space-y-6 animate-fadeIn">
        <div class="border-b border-slate-800/80 pb-4 flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-extrabold text-white flex items-center space-x-3 tracking-tight">
              <span>AI Document Assistant & RAG</span>
              <span class="text-[11px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-3 py-0.5 rounded-full font-medium">Secure Context Only</span>
            </h1>
            <p class="text-xs text-slate-400 mt-0.5">Queries are answered strictly using authorized vector chunks from your document repository.</p>
          </div>
          <div class="flex items-center space-x-2 text-xs text-slate-300 glass-card px-3.5 py-1.5 rounded-xl border border-slate-800">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-medium">Model: Ollama (Mistral-7B Local)</span>
          </div>
        </div>

        <!-- Chat Container -->
        <div class="flex-1 glass-card rounded-2xl p-6 overflow-y-auto space-y-6 flex flex-col shadow-2xl">
          <div v-for="(msg, index) in chatMessages" :key="index" :class="msg.role === 'user' ? 'self-end bg-gradient-to-r from-emerald-600 to-teal-600 text-white' : 'self-start bg-slate-950/80 border border-slate-800 text-slate-100'" class="max-w-2xl rounded-2xl p-5 space-y-3.5 shadow-xl">
            <p class="text-sm leading-relaxed">{{ msg.text }}</p>

            <!-- Citations / Sources if AI response -->
            <div v-if="msg.sources && msg.sources.length" class="border-t border-slate-800/80 pt-3 space-y-2">
              <p class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Verified Source Citations:</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="src in msg.sources" :key="src" class="text-xs bg-slate-900 border border-slate-700/80 px-3 py-1.5 rounded-xl text-slate-300 flex items-center space-x-1.5 shadow-sm">
                  <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>{{ src }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Prompt Input Bar -->
        <div class="flex items-center space-x-3 glass-card p-2 rounded-2xl shadow-2xl border border-slate-800">
          <input v-model="userInput" @keyup.enter="sendChatMessage" type="text" placeholder="Ask anything about your documents (e.g., 'What is the total amount on my last invoice?')..." class="flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none" />
          <button @click="sendChatMessage" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-7 py-3.5 rounded-xl font-semibold text-xs tracking-wide transition duration-300 shadow-lg shadow-emerald-600/30">
            Send Prompt
          </button>
        </div>
      </div>

      <!-- 5. SETTINGS VIEW -->
      <div v-if="currentTab === 'settings'" class="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-fadeIn">
        <div class="border-b border-slate-800/80 pb-6">
          <h1 class="text-3xl font-extrabold text-white tracking-tight">Settings & Storage</h1>
          <p class="text-sm text-slate-400 mt-1">Configure tenant profiles, storage backends, and security governance rules.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card rounded-2xl p-6 space-y-5">
            <h3 class="text-base font-bold text-white">Organization Profile</h3>
            <div class="space-y-4 text-sm">
              <div>
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Organization Name</label>
                <input type="text" value="Acme Corporation" class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Organization Slug</label>
                <input type="text" value="acme-corp" class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition" />
              </div>
              <button class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 rounded-xl transition text-xs tracking-wide shadow-lg shadow-emerald-600/20">Save Changes</button>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-6 space-y-5">
            <h3 class="text-base font-bold text-white">Storage Provider</h3>
            <div class="space-y-4 text-sm">
              <div>
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Active Storage Backend</label>
                <select class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition">
                  <option>Local Secure Storage</option>
                  <option>MinIO (S3 Compatible)</option>
                  <option>AWS S3 Bucket (Custom IAM)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Encryption Standard</label>
                <input type="text" value="AES-256 Server-Side" disabled class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-slate-400 cursor-not-allowed" />
              </div>
              <button class="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-xs tracking-wide border border-slate-700">Test Storage Connection</button>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-6 space-y-5">
            <h3 class="text-base font-bold text-white">Security & Tenant Isolation</h3>
            <div class="space-y-4 text-sm">
              <div class="flex items-center justify-between p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                <span class="text-slate-300 font-medium">Strict Tenant Filters</span>
                <span class="text-emerald-400 font-bold text-xs bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">Enabled</span>
              </div>
              <div class="flex items-center justify-between p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                <span class="text-slate-300 font-medium">Prompt Injection Guard</span>
                <span class="text-emerald-400 font-bold text-xs bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">Active</span>
              </div>
              <button class="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-xs tracking-wide border border-slate-700">Download Audit Logs</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="glass-panel border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 relative z-10">
      <p>© 2026 VectraDocs (vectradocs.com / vectradocs.ch). Secure, Privacy-First AI Document Management Platform.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('landing')
const searchQuery = ref('')
const userInput = ref('')

const recentDocs = ref([
  { name: 'Q3_Financial_Invoice_2026.pdf', type: 'PDF Document', classification: 'Finance / Invoice', size: '2.4 MB', status: 'Indexed', ext: 'PDF', date: 'Today' },
  { name: 'Enterprise_Service_Agreement_Acme.docx', type: 'Word Document', classification: 'Legal / Contract', size: '1.1 MB', status: 'Indexed', ext: 'DOCX', date: 'Yesterday' },
  { name: 'Cloud_Architecture_Security_Policy.pdf', type: 'PDF Document', classification: 'Technical Doc', size: '4.8 MB', status: 'Indexed', ext: 'PDF', date: 'Oct 7' },
  { name: 'Employee_Payroll_Summary_Sept.xlsx', type: 'Spreadsheet', classification: 'HR / Payroll', size: '850 KB', status: 'Processing', ext: 'XLSX', date: 'Oct 6' }
])

const filteredDocs = computed(() => {
  if (!searchQuery.value) return recentDocs.value
  return recentDocs.value.filter(d => d.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || d.classification.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const chatMessages = ref([
  { role: 'assistant', text: 'Hello! I am your secure VectraDocs AI Assistant. How can I help you analyze your documents today?', sources: [] }
])

const sendChatMessage = () => {
  if (!userInput.value.trim()) return
  const query = userInput.value
  chatMessages.value.push({ role: 'user', text: query, sources: [] })
  userInput.value = ''

  setTimeout(() => {
    chatMessages.value.push({
      role: 'assistant',
      text: `Based on your authorized documents in Acme Corporation workspace, "${query}" is verified in the following record:`,
      sources: ['Q3_Financial_Invoice_2026.pdf (Page 2)', 'Enterprise_Service_Agreement_Acme.docx (Section 4)']
    })
  }, 800)
}

const handleFileUpload = (event) => {
  const files = event.target.files
  if (!files || !files.length) return
  for (let i = 0; i < files.length; i++) {
    recentDocs.value.unshift({
      name: files[i].name,
      type: files[i].type || 'Unknown Document',
      classification: 'Unclassified (Pending AI)',
      size: `${(files[i].size / (1024*1024)).toFixed(1)} MB`,
      status: 'Processing',
      ext: files[i].name.split('.').pop().toUpperCase(),
      date: 'Just now'
    })
  }
  currentTab.value = 'documents'
}
</script>
