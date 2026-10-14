# 🧠 Workspace Rules for Antigravity

## 1. Mandatory First Step: Read Project Memory
At the very beginning of **every new conversation**, before taking any action or answering any user request, you **MUST** read the file `PROJECT_MEMORY.md` using the `view_file` tool.
This file contains the critical context, roadmap, and live server deployment rules for the "AUREON" project. 

Do not proceed with any implementation until you have fully internalized the contents of `PROJECT_MEMORY.md`.

## 2. Deployment Protocol
Always remember that the user has a live Oracle VM Server. Deployments must be done automatically by you (the AI Agent) using SSH/SCP as documented in `PROJECT_MEMORY.md`. Never ask the user to manually copy files to the live server.

## 3. Frontend UI/UX Design Constraints
When building or modifying web application interfaces, you MUST strictly adhere to the following modern frontend principles:

### Avoid (Anti-patterns):
- **AI slop:** Do not use generic or overly conversational placeholder text; avoid default unstructured outputs.
- **Generic SaaS looks:** Do not default to plain, uninspired dashboard layouts.
- **Purple gradients:** Avoid overused default purple/blue gradients; stick to curated palettes.
- **Repetitive cards:** Avoid boring grids of identical cards without variation in layout or typography.
- **Generic buttons:** Avoid standard default browser buttons.
- **Excessive glassmorphism:** Use blur and transparency sparingly and purposefully, not everywhere.

### Must Have (Requirements):
- **Custom color system:** Implement a cohesive, premium color palette tailored to the brand (e.g., AUREON's monochromatic black/white).
- **Custom button interactions:** Include dynamic hover, active, and disabled states.
- **Purposeful animations:** Use micro-interactions and smooth transitions that enhance UX (e.g., add to cart animations, hover reveals).
- **Responsive layout:** Ensure flawless rendering on mobile, tablet, and desktop viewports.
- **High performance:** Optimize code and assets for fast loading.
- **Semantic HTML:** Use proper HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<button>`).
- **Strong SEO:** Ensure meta tags, proper heading hierarchies, and accessible content are present.
- **Accessible interactions:** Maintain proper contrast, ARIA labels, and keyboard navigability.
- **Clean maintainable code:** Write modular, well-structured code without bloated ad-hoc utilities.
