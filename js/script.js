/**
 * MIRAJ MIAH — ULTRA-MODERN DEVELOPER PORTFOLIO ENGINE
 * Dynamic Spotlight, Interactive Terminal, Bento Grids, Theme Engine & Validations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC MOUSE SPOTLIGHT SYSTEM
  const initSpotlightCards = () => {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  };
  initSpotlightCards();

  // 2. THEME SYSTEM (Dark Mode Default + LocalStorage)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('miraj_portfolio_theme') || (prefersDark ? 'dark' : 'dark'); // dark default

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('miraj_portfolio_theme', theme);
    themeToggleBtns.forEach((btn) => {
      btn.innerHTML =
        theme === 'dark'
          ? '<i class="bi bi-sun"></i>'
          : '<i class="bi bi-moon-stars"></i>';
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  };
  setTheme(savedTheme);

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  });

  // 3. READING PROGRESS BAR & STICKY NAVBAR
  const progressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('mainNav');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (navbar) {
      if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. ACTIVE SECTION OBSERVER
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 150;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // 5. MOBILE MENU DRAWER
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggleBtn.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
      });
    });
  }

  // 6. HERO INTERACTIVE CODE TERMINAL TABS
  const terminalTabs = document.querySelectorAll('.terminal-tab-btn');
  const terminalBody = document.getElementById('terminalContent');

  const terminalSnippets = {
    profile: `
<span class="token-keyword">const</span> developer: <span class="token-property">DeveloperProfile</span> = {
  <span class="token-property">name</span>: <span class="token-string">"Miraj Miah"</span>,
  <span class="token-property">title</span>: <span class="token-string">"Aspiring Software Developer"</span>,
  <span class="token-property">degree</span>: <span class="token-string">"B.Tech Computer Science & Eng"</span>,
  <span class="token-property">institution</span>: <span class="token-string">"Siliguri Institute of Technology"</span>,
  <span class="token-property">gradYear</span>: <span class="token-keyword">2027</span>,
  <span class="token-property">passion</span>: <span class="token-string">"Transforming ideas into resilient digital solutions"</span>
};
`,
    stack: `
<span class="token-keyword">const</span> coreTechStack = {
  <span class="token-property">languages</span>: [<span class="token-string">"Java"</span>, <span class="token-string">"C"</span>, <span class="token-string">"Python"</span>, <span class="token-string">"JavaScript"</span>],
  <span class="token-property">frontend</span>: [<span class="token-string">"HTML5"</span>, <span class="token-string">"CSS3"</span>, <span class="token-string">"Tailwind CSS"</span>, <span class="token-string">"React"</span>],
  <span class="token-property">backend</span>: [<span class="token-string">"Node.js"</span>, <span class="token-string">"Express.js"</span>, <span class="token-string">"REST APIs"</span>],
  <span class="token-property">databases</span>: [<span class="token-string">"MongoDB"</span>, <span class="token-string">"MySQL"</span>, <span class="token-string">"SQLite"</span>],
  <span class="token-property">tools</span>: [<span class="token-string">"Git"</span>, <span class="token-string">"GitHub"</span>, <span class="token-string">"VS Code"</span>, <span class="token-string">"Render"</span>]
};
`,
    internship: `
<span class="token-keyword">const</span> internshipExperience = {
  <span class="token-property">role</span>: <span class="token-string">"CNS Trainee"</span>,
  <span class="token-property">organization</span>: <span class="token-string">"Airports Authority of India (AAI)"</span>,
  <span class="token-property">facility</span>: <span class="token-string">"Bagdogra Airport"</span>,
  <span class="token-property">tenure</span>: <span class="token-string">"7 Sep 2026 – 6 Oct 2026"</span>,
  <span class="token-property">domains</span>: [
    <span class="token-string">"VHF Comm & GAGAN CNS Systems"</span>,
    <span class="token-string">"IP Networking, TCP/IP & Ethernet"</span>,
    <span class="token-string">"FIDS, CIDS, CCTV, EPABX & UPS"</span>,
    <span class="token-string">"Passenger Announcement & Screening"</span>
  ]
};
`
  };

  if (terminalTabs.length && terminalBody) {
    terminalTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        terminalTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const key = tab.getAttribute('data-tab');
        if (terminalSnippets[key]) {
          terminalBody.innerHTML = terminalSnippets[key].trim();
        }
      });
    });
  }

  // 7. TOAST NOTIFICATION UTILITY
  const showToast = (message) => {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast-container';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="bi bi-check2-circle text-emerald-400"></i> <span>${message}</span>`;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  };

  // 8. CLIPBOARD COPY (Email)
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mirajmiah964@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: mirajmiah964@gmail.com');
      }).catch(() => {
        showToast('Contact: mirajmiah964@gmail.com');
      });
    });
  });

  // 9. PROJECT FILTERING SYSTEM
  const projectFilters = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      projectFilters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });

  // 10. PROJECT FEATURE DETAILS MODAL
  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalTagline = document.getElementById('modalProjectTagline');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalFeatures = document.getElementById('modalProjectFeatures');
  const modalTechStack = document.getElementById('modalProjectTech');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalGithubLink = document.getElementById('modalGithubLink');

  const projectData = {
    talksy: {
      title: 'Talksy',
      tagline: 'Real-Time Communication Platform',
      description: 'Talksy is a modern communication platform designed to connect people seamlessly through username discovery, bilateral connection requests, and real-time messaging.',
      features: [
        'Secure user authentication and custom username profile handling',
        'Direct username-based user search & discovery mechanism',
        'Send, accept, and reject connection requests',
        'Active connections management dashboard',
        'Low-latency messaging interface with state synchronization',
        'Clean responsive layout engineered for desktop, tablet, and mobile'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/mirajmiah'
    },
    ecommerce: {
      title: 'E-Commerce Web Application',
      tagline: 'Full-Stack Shopping Solution',
      description: 'A full-stack e-commerce web application engineered to deliver a fluid online shopping experience with robust cart management and transaction workflows.',
      features: [
        'Dynamic product catalog with filtering and category browsing',
        'Rich product detail views with multi-image previews',
        'Interactive shopping cart with real-time total computation',
        'User authentication and protected order management views',
        'Robust MongoDB database integration for records persistence',
        'Modern responsive UI with intuitive checkout flow'
      ],
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/mirajmiah'
    },
    medicine: {
      title: 'Medicine Reminder Application',
      tagline: 'Healthcare Medication Tracker',
      description: 'A practical healthcare application concept engineered to assist patients in organizing complex medication schedules and never missing timely dosage intervals.',
      features: [
        'Intuitive medicine profile registry with dosage and timing metadata',
        'Customizable recurring schedule alarms and notification triggers',
        'Historical medication logs and adherence tracking',
        'Compact embedded database using SQLite for fast local retrieval',
        'Clean, accessible interface designed for all age demographics'
      ],
      technologies: ['Java', 'SQLite', 'OOP Design Patterns'],
      github: 'https://github.com/mirajmiah'
    }
  };

  const openProjectModal = (key) => {
    const data = projectData[key];
    if (!data || !modalOverlay) return;

    modalTitle.textContent = data.title;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.description;
    modalGithubLink.href = data.github;

    modalFeatures.innerHTML = data.features
      .map((f) => `<li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;font-size:0.875rem;"><i class="bi bi-check2-circle" style="color:var(--accent-emerald);margin-top:0.15rem;"></i><span>${f}</span></li>`)
      .join('');

    modalTechStack.innerHTML = data.technologies
      .map((t) => `<span class="project-tag" style="font-size:0.75rem;">${t}</span>`)
      .join('');

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.btn-view-features').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      openProjectModal(key);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // 11. CONTACT FORM STRICT EMAIL VALIDATION & DIRECT EMAIL CLIENT LAUNCH
  const contactForm = document.getElementById('contactForm');
  const contactSuccessMsg = document.getElementById('contactSuccess');
  const emailInput = document.getElementById('contactEmail');
  const emailErrorEl = document.getElementById('contactEmailError');
  const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmailStrict = () => {
    if (!emailInput) return false;
    const value = emailInput.value.trim();

    if (!value) {
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
      if (emailErrorEl) emailErrorEl.innerHTML = '<i class="bi bi-exclamation-circle"></i> Email address is required to submit.';
      return false;
    }

    if (!strictEmailRegex.test(value)) {
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
      if (emailErrorEl) emailErrorEl.innerHTML = '<i class="bi bi-exclamation-circle"></i> Please enter a valid email address (e.g. name@domain.com).';
      return false;
    }

    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    if (emailErrorEl) emailErrorEl.innerHTML = '<span style="color:var(--accent-emerald);"><i class="bi bi-check-circle"></i> Valid email address</span>';
    return true;
  };

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailInput.value.trim().length > 2) {
        validateEmailStrict();
      } else {
        emailInput.classList.remove('is-valid', 'is-invalid');
        if (emailErrorEl) emailErrorEl.textContent = '';
      }
    });

    emailInput.addEventListener('blur', () => {
      validateEmailStrict();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');
      const submitBtn = document.getElementById('contactSubmitBtn');

      let isValid = true;

      // Helper validator
      const validateField = (input, condition, errorText) => {
        const errorEl = document.getElementById(`${input.id}Error`);
        if (!condition) {
          input.classList.add('is-invalid');
          if (errorEl) errorEl.textContent = errorText;
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          if (errorEl) errorEl.textContent = '';
        }
      };

      validateField(nameInput, nameInput.value.trim().length > 0, 'Full name is required.');
      
      // Strict email check
      const isEmailValid = validateEmailStrict();
      if (!isEmailValid) {
        isValid = false;
        emailInput.focus();
        showToast('Valid email required! Form cannot be submitted with an invalid email.');
      }

      validateField(subjectInput, subjectInput.value.trim().length > 0, 'Subject is required.');
      validateField(
        messageInput,
        messageInput.value.trim().length >= 10,
        'Please enter a message with at least 10 characters.'
      );

      // Strict block: if any field (especially email) is invalid, abort immediately
      if (!isValid || !isEmailValid) {
        return false;
      }

      // Loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat animate-spin"></i> Preparing Email...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Prefill user email client with mailto
        const mailtoUrl = `mailto:mirajmiah964@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Inquiry] ${subjectInput.value.trim()}`
        )}&body=${encodeURIComponent(
          `Hi Miraj,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
        )}`;

        window.location.href = mailtoUrl;

        // Display success confirmation card
        contactForm.style.display = 'none';
        if (contactSuccessMsg) contactSuccessMsg.style.display = 'block';
        showToast('Draft prepared! Your mail application has opened.');
      }, 700);
    });
  }

  // 12. DYNAMIC COPYRIGHT YEAR
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
