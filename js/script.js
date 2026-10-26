/* ==========================================================================
   Miraj Miah — Portfolio JavaScript Engine
   Vanilla JS • Zero Dependencies • Clean Modular Architecture
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initNavbarScrollAndSpy();
  initMobileMenuAutoClose();
  initMouseSpotlight(prefersReducedMotion);
  initScrollReveal(prefersReducedMotion);
  initTypingEffect(prefersReducedMotion);
  initTerminalStudio();
  initLiveClock();
  initSkillsFilter();
  initProjectFilter();
  initProjectModals();
  initJourneySwitcher();
  initContactForm();
  initClipboardHelpers();
  initBackToTopWithProgress();
  initCurrentYear();
});

/* --------------------------------------------------------------------------
   1. Dynamic Navbar: Scroll blur, shadow, and Active Section Spy
   -------------------------------------------------------------------------- */
function initNavbarScrollAndSpy() {
  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (!nav) return;

  const handleScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 25);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // ScrollSpy using IntersectionObserver
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${currentId}`) {
                navLinks.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: "-70px 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Auto-close on Navigation
   -------------------------------------------------------------------------- */
function initMobileMenuAutoClose() {
  const navMenu = document.getElementById("navMenu");
  if (!navMenu) return;

  const links = navMenu.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show") && window.bootstrap) {
        const collapse = window.bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Desktop Mouse Spotlight
   -------------------------------------------------------------------------- */
function initMouseSpotlight(prefersReducedMotion) {
  const spotlight = document.getElementById("mouseSpotlight");
  if (!spotlight || prefersReducedMotion || window.innerWidth < 992) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      spotlight.style.opacity = "1";
      isVisible = true;
    }
  });

  window.addEventListener("mouseleave", () => {
    spotlight.style.opacity = "0";
    isVisible = false;
  });

  const animate = () => {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    spotlight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}

/* --------------------------------------------------------------------------
   4. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal(prefersReducedMotion) {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. Hero Typing Effect
   -------------------------------------------------------------------------- */
function initTypingEffect(prefersReducedMotion) {
  const kicker = document.getElementById("heroTypingText");
  if (!kicker || prefersReducedMotion) return;

  const roles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Real-Time Systems Builder",
    "Django & SQL Architect",
    "B.Tech CSE Student",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      kicker.textContent = currentRole.slice(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      charIndex--;
      kicker.textContent = currentRole.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = isDeleting ? 30 : 65;
    setTimeout(tick, speed);
  }

  kicker.textContent = "";
  setTimeout(tick, 400);
}

/* --------------------------------------------------------------------------
   6. Interactive Code Terminal Studio
   -------------------------------------------------------------------------- */
function initTerminalStudio() {
  const tabs = document.querySelectorAll(".terminal-tab");
  const panes = {
    config: document.getElementById("pane-config"),
    stack: document.getElementById("pane-stack"),
    terminal: document.getElementById("pane-terminal"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      Object.keys(panes).forEach((key) => {
        if (panes[key]) {
          panes[key].classList.toggle("d-none", key !== target);
        }
      });
    });
  });

  // Copy code snippet button
  const copyBtn = document.getElementById("copyCodeSnippetBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const activePane = document.querySelector(".terminal-body:not(.d-none)");
      if (!activePane) return;

      const codeText = activePane.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        showToast("Code snippet copied to clipboard!");
        copyBtn.innerHTML = `<i class="bi bi-check2 text-success"></i>`;
        setTimeout(() => {
          copyBtn.innerHTML = `<i class="bi bi-clipboard"></i>`;
        }, 2000);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   7. Live IST Clock in About Bento
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.getElementById("istClock");
  if (!clockEl) return;

  const updateClock = () => {
    try {
      const now = new Date();
      // Formatted in Asia/Kolkata timezone
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      clockEl.textContent = `${istTime} IST`;
    } catch {
      clockEl.textContent = "UTC+5:30";
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   8. Skills Category Filter
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll(".skills-tab-btn");
  const skillTiles = document.querySelectorAll(".skill-tile");
  if (!filterBtns.length || !skillTiles.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.skillFilter;

      skillTiles.forEach((tile) => {
        const matches = filter === "all" || tile.dataset.cat === filter;
        if (matches) {
          tile.style.display = "flex";
          tile.style.opacity = "0";
          setTimeout(() => {
            tile.style.opacity = "1";
          }, 30);
        } else {
          tile.style.display = "none";
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. Projects Filter
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const emptyState = document.getElementById("projectsEmpty");
  if (!filterBtns.length || !projectItems.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      projectItems.forEach((item) => {
        const matches = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("d-none", !matches);
        if (matches) visibleCount++;
      });

      if (emptyState) {
        emptyState.classList.toggle("d-none", visibleCount !== 0);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Project Details Modal
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  talksy: {
    badge: "Full Stack • Real-Time",
    title: "Talksy — Real-Time Chat Application",
    image: "assets/images/talksy.jpg",
    description:
      "Talksy is a full-stack real-time chat application engineered with React, Node.js, Express, MongoDB, and Socket.IO to deliver instantaneous one-to-one communication, user presence tracking, and dynamic media sharing.",
    highlights: [
      "Developed a full-stack real-time chat application with user authentication, one-to-one messaging, online presence, and a responsive user interface.",
      "Implemented secure authentication using JWT, HTTP-only cookies, and bcrypt password hashing.",
      "Built RESTful APIs using Express.js and Mongoose for user management, message persistence, profile updates, and conversation history.",
      "Integrated Socket.IO for real-time messaging and online-user tracking; utilized Cloudinary for image uploads.",
      "Applied input validation, rate limiting, CORS configuration, protected routes, and Zustand client state management."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary", "Zustand", "JWT"],
    demo: "https://github.com/mirajmiah",
    github: "https://github.com/mirajmiah",
  },
  student: {
    badge: "Backend & Database",
    title: "Student Management System — Django & SQL",
    image: "assets/images/student-system.jpg",
    description:
      "A database-driven academic portal that streamlines record management, enrollment pipelines, course assignments, and administrative workflows with Django and SQL-based logic.",
    highlights: [
      "Developed a database-driven web application to manage and organize student information.",
      "Implemented CRUD operations using Django ORM and SQL for structured data management.",
      "Structured normalized relational schemas with foreign key constraints, indexing, and transactional integrity.",
      "Built interactive user interfaces using HTML5, CSS3, and JavaScript with role-based access control."
    ],
    tech: ["Python", "Django", "SQL", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    demo: "https://github.com/mirajmiah",
    github: "https://github.com/mirajmiah",
  },
  grammar: {
    badge: "AI Utility • Google Gemini",
    title: "Grammar Assistant — AI-Powered Writing Companion",
    image: "assets/images/grammar-assistant.jpg",
    description:
      "A web-based intelligent writing application that analyzes input text in real-time, providing contextual grammar fixes, tone assessments, and clarity suggestions via the Google Gemini API.",
    highlights: [
      "Developed a web application that identifies grammatical errors and generates corrections and feedback.",
      "Integrated the Gemini API and implemented JavaScript-based asynchronous API requests and dynamic content updates.",
      "Created a responsive interface using HTML5, CSS3, and JavaScript with real-time text diffing and clarity scoring.",
      "Implemented client-side debounce and local caching to minimize API rate-limits and optimize response times."
    ],
    tech: ["JavaScript (ES6+)", "Google Gemini API", "REST APIs", "CSS3", "HTML5", "Local Storage"],
    demo: "https://github.com/mirajmiah",
    github: "https://github.com/mirajmiah",
  },
};
// Backward compatibility alias
PROJECT_DETAILS.nexus = PROJECT_DETAILS.talksy;

function initProjectModals() {
  const modal = document.getElementById("projectDetailsModal");
  const backdrop = document.getElementById("projectModalBackdrop");
  const closeBtn = document.getElementById("projectModalClose");
  const triggers = document.querySelectorAll(".project-detail-trigger");

  if (!modal) return;

  const openModal = (projectId) => {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    document.getElementById("modalProjectBadge").textContent = data.badge;
    document.getElementById("projectModalTitle").textContent = data.title;
    document.getElementById("modalProjectImg").src = data.image;
    document.getElementById("modalProjectImg").alt = data.title;
    document.getElementById("modalProjectDescription").textContent = data.description;

    const highlightsList = document.getElementById("modalProjectHighlights");
    highlightsList.innerHTML = data.highlights
      .map((h) => `<li>${h}</li>`)
      .join("");

    const techContainer = document.getElementById("modalProjectTech");
    techContainer.innerHTML = data.tech
      .map((t) => `<span>${t}</span>`)
      .join("");

    const demoLink = document.getElementById("modalProjectDemo");
    if (demoLink) demoLink.href = data.demo || "https://github.com/mirajmiah";

    const githubLink = document.getElementById("modalProjectGithub");
    if (githubLink) githubLink.href = data.github || "https://github.com/mirajmiah";

    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.project;
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("visible")) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   11. Experience & Education Journey Switcher
   -------------------------------------------------------------------------- */
function initJourneySwitcher() {
  const tabExpBtn = document.getElementById("tabExpBtn");
  const tabEduBtn = document.getElementById("tabEduBtn");
  const expPane = document.getElementById("expPane");
  const eduPane = document.getElementById("eduPane");

  if (!tabExpBtn || !tabEduBtn || !expPane || !eduPane) return;

  tabExpBtn.addEventListener("click", () => {
    tabExpBtn.classList.add("active");
    tabExpBtn.setAttribute("aria-selected", "true");
    tabEduBtn.classList.remove("active");
    tabEduBtn.setAttribute("aria-selected", "false");

    expPane.classList.remove("d-none");
    eduPane.classList.add("d-none");
  });

  tabEduBtn.addEventListener("click", () => {
    tabEduBtn.classList.add("active");
    tabEduBtn.setAttribute("aria-selected", "true");
    tabExpBtn.classList.remove("active");
    tabExpBtn.setAttribute("aria-selected", "false");

    eduPane.classList.remove("d-none");
    expPane.classList.add("d-none");
  });
}

/* --------------------------------------------------------------------------
   12. Modern Contact Form with Validation & FormSubmit AJAX
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitFormBtn");
  const subjectInput = document.getElementById("contactSubject");
  const hiddenSubject = document.getElementById("hiddenFormSubject");
  const subjectChips = document.querySelectorAll(".subject-chip");
  const messageInput = document.getElementById("contactMessage");
  const charCounter = document.getElementById("charCounter");

  // Modal elements
  const modal = document.getElementById("contactSuccessModal");
  const closeModalBtn = document.getElementById("contactSuccessClose");
  const homeBtn = document.getElementById("contactSuccessButton");
  const senderNameSpan = document.getElementById("successSenderName");

  // Subject quick chips
  subjectChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      subjectChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const val = chip.dataset.subject;
      if (subjectInput) subjectInput.value = val;
      if (hiddenSubject) hiddenSubject.value = `New portfolio contact message: ${val}`;
    });
  });

  // Message character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 800`;
    });
  }

  // Modal controls
  const openModal = (name) => {
    if (!modal) return;
    if (senderNameSpan) senderNameSpan.textContent = name || "there";
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
  };

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      closeModal();
      window.location.hash = "home";
    });
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      if (status) {
        status.textContent = "Please fill out all required fields.";
        status.style.color = "#f87171";
      }
      return;
    }

    form.classList.add("was-validated");

    // Button loading state
    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");
    if (btnText && btnSpinner) {
      btnText.classList.add("d-none");
      btnSpinner.classList.remove("d-none");
      submitBtn.disabled = true;
    }

    if (status) {
      status.textContent = "Sending your message...";
      status.style.color = "var(--accent)";
    }

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const senderName = form.querySelector("#contactName")?.value || "";

    fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        if (status) {
          status.textContent = "Message sent successfully!";
          status.style.color = "#34d399";
        }
        openModal(senderName);
        form.reset();
        form.classList.remove("was-validated");
        if (charCounter) charCounter.textContent = "0 / 800";
      })
      .catch(() => {
        if (status) {
          status.textContent = "Failed to send message. Please email directly at mirajmiah322173@gmail.com";
          status.style.color = "#f87171";
        }
      })
      .finally(() => {
        if (btnText && btnSpinner) {
          btnText.classList.remove("d-none");
          btnSpinner.classList.add("d-none");
          submitBtn.disabled = false;
        }
      });
  });
}

/* --------------------------------------------------------------------------
   13. Clipboard Helpers (Email copy) & Toast Notification
   -------------------------------------------------------------------------- */
function initClipboardHelpers() {
  const quickEmailBtn = document.getElementById("quickCopyEmailBtn");
  const contactCopyEmailBtn = document.getElementById("contactCopyEmailBtn");
  const email = "mirajmiah322173@gmail.com";
  const phone = "+91 8167742375";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone).then(() => {
      showToast(`Copied ${phone} to clipboard!`);
    });
  };

  if (quickEmailBtn) quickEmailBtn.addEventListener("click", copyEmail);
  if (contactCopyEmailBtn) contactCopyEmailBtn.addEventListener("click", copyEmail);

  const contactCopyPhoneBtn = document.getElementById("contactCopyPhoneBtn");
  if (contactCopyPhoneBtn) contactCopyPhoneBtn.addEventListener("click", copyPhone);
}

function showToast(message) {
  const toast = document.getElementById("copyToast");
  const msgEl = document.getElementById("toastMessage");
  if (!toast) return;

  if (msgEl) msgEl.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* --------------------------------------------------------------------------
   14. Back to Top Button with Circular Progress Ring
   -------------------------------------------------------------------------- */
function initBackToTopWithProgress() {
  const btn = document.getElementById("backToTop");
  const circle = document.getElementById("progressRingCircle");
  if (!btn || !circle) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const setProgress = (percent) => {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    btn.classList.toggle("visible", scrollTop > 400);
    setProgress(scrollPercent);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   15. Current Year
   -------------------------------------------------------------------------- */
function initCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
