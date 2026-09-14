# MightyCode — Personal Portfolio

A responsive, dark-themed developer portfolio built with HTML5, CSS3, vanilla JavaScript, and Bootstrap 5.

## Structure

```
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── resume.pdf        ← add your real resume here
└── README.md
```

## Running it locally

No build step is required. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a more realistic environment, e.g.:
  ```
  npx serve .
  ```
  or, with Python:
  ```
  python3 -m http.server
  ```

## Replacing placeholder content

Search the project for these placeholders and replace every instance:

| Placeholder          | Where it appears                              | Replace with |
|-----------------------|------------------------------------------------|--------------|
| `YOUR_EMAIL`          | Hero, Contact, Footer                          | Your real email address |
| `YOUR_GITHUB_URL`     | Hero, Contact, Footer                          | Your GitHub profile URL |
| `YOUR_LINKEDIN_URL`   | Hero, Contact, Footer                          | Your LinkedIn profile URL |
| `YOUR_PROJECT_LINK`   | Project cards                                  | Your repo / live demo URLs |
| `YOUR_COLLEGE_NAME`   | Education section                              | Your college/university name |
| `[Location]`, `[Start Year]`, `[Graduation Year]`, `[School Name]` | Education section | Your actual details |

### 1. Profile photo

Replace the placeholder image in the **About** section:

```html
<img src="https://via.placeholder.com/300x300/131b2e/5eead4?text=Your+Photo" alt="...">
```

with a local file, e.g. `assets/images/profile.jpg`, and update the `src` and `alt` text accordingly.

### 2. Resume

Add your actual resume PDF to `assets/resume.pdf` (same filename, so no other changes are needed — both the **Download Resume** and **View Resume** buttons already point there).

### 3. Projects

Each project lives inside `#projectGrid` in `index.html` as a `.project-item`. For each real project:

- Replace the placeholder thumbnail (`https://via.placeholder.com/...`) with a real screenshot, e.g. `assets/images/project-1.jpg`.
- Update the title, description, and technology tags.
- Update the `data-category` attribute (`web`, `java`, `c`, or `other`) so it works with the filter buttons.
- Replace `YOUR_PROJECT_LINK` with your GitHub repo and live demo URLs. If there's no live demo, remove that `<a>` button.
- Duplicate the `.project-item` block to add more projects.

### 4. GitHub / LinkedIn / Email

These appear in three places: the hero social icons, the Contact section, and the footer. Update all instances of `YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL`, and `YOUR_EMAIL`.

### 5. Education

Update the two `.timeline-item` blocks in the **Education** section with your actual degree, institution, location, dates, and coursework. Delete or duplicate blocks as needed.

### 6. Skills

Skills are grouped into three `.skill-group` cards (Programming Languages, Web Technologies, Computer Science) inside the **Skills** section. Add or remove `<li>` items as your skill set changes — each `<li>` pairs a Bootstrap Icon with a label.

### 7. Experience

The **Experience** section currently shows an "Open to Opportunities" message. Once you have an internship or job to list, replace the `.experience-panel` block with your own timeline of roles (you can reuse the `.timeline` / `.timeline-item` markup from the Education section as a starting point).

### 8. Contact form

The contact form in `#contact` is frontend-only: it validates input and shows a confirmation message, but doesn't send anything anywhere yet. To make it functional, pick a form backend such as:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) (if hosting on Netlify)
- Your own backend API endpoint

Then update the `TODO` block inside `initContactForm()` in `js/script.js` to send the form data to that service instead of only logging it to the console.

## Notes on customization

- All design tokens (colors, fonts, spacing, radius) live at the top of `css/style.css` inside `:root`. Changing a value there updates it everywhere.
- The site respects `prefers-reduced-motion`: animations and smooth scrolling are automatically disabled for users who request reduced motion at the OS level.
- Bootstrap 5 and Bootstrap Icons are loaded via CDN in `index.html`. If you need an offline build, download both and update the `<link>`/`<script>` tags to point to local files.
