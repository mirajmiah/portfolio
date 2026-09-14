/* ==========================================================================
   MightyCode Portfolio — script.js
   Vanilla JS only. Organized into small, independent features so any one
   of them can be removed or replaced without touching the others.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initNavScrollState();
  initMobileMenuAutoClose();
  initScrollReveal(prefersReducedMotion);
  initTypingEffect(prefersReducedMotion);
  initProjectFilter();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Navbar background/shadow on scroll
   -------------------------------------------------------------------------- */
function initNavScrollState() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  const toggleScrolled = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };

  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Close the mobile menu after a link is tapped
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
   3. Fade/slide-up reveal for sections as they enter the viewport
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
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   4. Typing animation for the hero kicker line
   -------------------------------------------------------------------------- */
function initTypingEffect(prefersReducedMotion) {
  const kicker = document.querySelector(".hero-kicker");
  if (!kicker || prefersReducedMotion) return;

  const roles = [
    "Full Stack Developer & CSE Student",
    "React.js Developer",
    "Backend Engineer",
    "Problem Solver",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  kicker.setAttribute("aria-live", "polite");

  function tick() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      kicker.textContent = currentRole.slice(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, 1600);
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

    const speed = isDeleting ? 35 : 65;
    setTimeout(tick, speed);
  }

  kicker.textContent = "";
  setTimeout(tick, 500);
}

/* --------------------------------------------------------------------------
   5. Project filtering (All / Web / Java / C / Other)
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const emptyState = document.getElementById("projectsEmpty");
  if (!filterButtons.length || !projectItems.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const filter = button.dataset.filter;
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
   6. Contact form
   --------------------------------------------------------------------------
   Sends form data through FormSubmit's AJAX endpoint and shows a success
   modal without navigating away from the portfolio page.
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const modal = document.getElementById("contactSuccessModal");
  const closeModalButton = document.getElementById("contactSuccessClose");
  const homeButton = document.getElementById("contactSuccessButton");
  if (!form) return;

  const openModal = () => {
    if (!modal) return;
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
  };

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  if (homeButton) {
    homeButton.addEventListener("click", () => {
      closeModal();
      window.location.hash = "home";
      window.location.href = "#home";
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");

      if (status) {
        status.textContent = "Please complete all fields before sending.";
      }
      return;
    }

    form.classList.add("was-validated");

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    fetch(form.action, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString()
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("FormSubmit failed");
        }

        if (status) {
          status.textContent = "Your message was sent successfully!";
        }

        openModal();
        form.reset();
      })
      .catch(() => {
        if (status) {
          status.textContent = "The message could not be sent. Please try again.";
        }
      });
  });
}

/* --------------------------------------------------------------------------
   7. Back-to-top button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  const toggleVisibility = () => {
    button.classList.toggle("visible", window.scrollY > 500);
  };

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}
