# Cloud/DevOps Engineer Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Linear's typography precision, Stripe's restraint, and modern developer portfolios (GitHub, Vercel). Focus on technical sophistication through clean layouts and purposeful white space.

## Layout Strategy
**Creative Alternative to Traditional Hero**: Lead with a bold typographic introduction paired with a side image, not centered hero. Asymmetric layout that feels dynamic and modern.

**Sections** (6-7 total):
1. Introduction Split (60/40 layout - text/image)
2. Experience Timeline (vertical, left-aligned)
3. Technical Skills Grid (4-column on desktop)
4. Featured Projects Showcase (2-column cards)
5. Certifications/Tech Stack
6. Contact Section (centered, minimal)
7. Footer (slim, social links only)

## Typography
- **Headings**: Inter (700-800 weight)
  - H1: text-6xl md:text-7xl
  - H2: text-4xl md:text-5xl
  - H3: text-2xl md:text-3xl
- **Body**: Inter (400-500 weight)
  - Base: text-base md:text-lg
  - Small: text-sm
- **Code/Technical**: JetBrains Mono for tech stack labels

## Spacing System
**Tailwind units**: 4, 6, 8, 12, 16, 24 for consistency
- Section padding: py-16 md:py-24
- Component spacing: gap-6 to gap-8
- Container: max-w-6xl mx-auto px-6

## Component Library

### Introduction Section
- Large name display with animated gradient effect
- Role subtitle with tech stack tags
- Professional headshot (right side, rounded-2xl, shadow-2xl)
- Quick stats: "2+ years | Full Stack | Cloud/DevOps"
- CTA buttons: LinkedIn (primary) + Email (secondary) with backdrop blur when over image

### Experience Timeline
- Vertical line connector
- Cards with company logo placeholder (80x80px circle)
- Role title, duration, key achievements (3-4 bullets max)
- Tech stack tags for each role

### Skills Grid
- Icon placeholders + skill name
- 4 columns on lg, 2 on md, 1 on mobile
- Categories: Cloud, DevOps, Development, Tools
- Hover state: subtle lift effect

### Projects Showcase
- 2-column grid (stack on mobile)
- Project thumbnail placeholder (16:9 ratio)
- Title, brief description, tech stack
- GitHub/Demo link icons
- Border with subtle gradient

### Contact Section
- Centered layout, generous spacing
- Email + LinkedIn as primary options
- Download resume button
- Social icons: GitHub, LinkedIn, Twitter/X

## Images

**Hero Image**: Professional headshot or workspace setup
- Position: Right side of introduction split (40% width)
- Treatment: Rounded corners (rounded-2xl), subtle shadow
- Mobile: Full width, positioned before text

**Project Thumbnails**: 
- 4-6 project cards with placeholder images
- Screenshots or abstract tech visuals
- Aspect ratio: 16:9
- Treatment: Rounded corners (rounded-lg)

**Company Logos** (optional):
- Small circular placeholders in timeline
- Greyscale treatment for cohesion

## Navigation
- Sticky top bar with blur background
- Logo/Name (left) + Navigation links (right)
- Mobile: Hamburger menu
- Links: About, Experience, Projects, Contact
- Smooth scroll behavior

## Responsive Breakpoints
- Mobile: < 768px (stack all, full width)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Premium Touch Points
- Subtle gradient accents on buttons/borders
- Smooth micro-interactions (0.2s ease transitions)
- Card hover: translateY(-4px) with shadow increase
- Focus states: 2px ring offset
- Loading states for contact form
- Clean iconography from Heroicons (outline style)

## Key Principles
- **Technical Precision**: Aligned layouts, consistent spacing
- **Professional Restraint**: Limited animation, focus on content
- **Scannable Hierarchy**: Clear information architecture
- **Mobile-First**: Fully responsive, touch-friendly targets (min 44px)