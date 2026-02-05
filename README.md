# Storm Portfolio

An experimental, dystopian personal portfolio showcasing the intersection of product design, software engineering, and horror writing.

## Design Philosophy

**Treat framework stability as non-negotiable. Prefer boring infrastructure and experimental experience.**

This portfolio eschews traditional portfolio conventions in favor of:
- Controlled, eerie atmosphere
- Asymmetric, broken layouts
- Slow, deliberate motion
- Typography-first design
- Quiet unease over aggressive aesthetics

## Technical Stack

### Core (Version Locked)
- **Next.js 16.1.6** with App Router (stable only)
- **React 19.0.0**
- **TypeScript 5**
- **Tailwind CSS 3.4.1**

### Animation & 3D
- **Framer Motion 12.33.0** (stable release)
- **Three.js 0.182.0** via React Three Fiber 9.5.0
- **@react-three/drei 10.7.7**

## Design System

### Typography
- **Serif**: Crimson Pro (old print / gothic influence)
- **Grotesk**: Inter (neutral system voice)
- **Distorted**: Bebas Neue (signal markers)

### Color Palette
- **Ink**: #0a0a0a (primary background)
- **Charcoal**: #1a1a1a (secondary surfaces)
- **Bone**: #f4f4f0 (primary text)
- **Accent**: #8b0000 (deep red, used sparingly)

### Motion Principles
- Slow easing functions (0.4s–2s minimum)
- Scroll-driven parallax layering
- Asymmetric timing for intentional discomfort
- Breathing animations over snappy interactions

## Structure

### Sections
1. **Threshold** - Entry state with calm declaration ("Nothing here is accidental")
2. **Hero** - Oversized name with chromatic aberration, glitch effects, and dynamic color orbs
3. **Projects** - Dossier-style case studies with clickable titles and offset layouts
4. **Art Gallery** - Eerie, layered image showcase with fluid, alienated positioning
5. **Design Showcase** - Interface and system design display with color-coded categories
6. **Techniques** - Methods and principles in broken grids
7. **About** - Controlled confession, not résumé
8. **Contact Form** - Mars vs Mercury clash aesthetic with dramatic color gradients
9. **Quick Actions** - Minimal contact channels

### Special Features
- **Symbiote Cursor** - Subtle web effect that follows the mouse, connecting to invisible nodes
- **Writing Fragments** - Dystopian text snippets between sections
- **Atmospheric Background** - Three.js particle field with fog layers
- **Navigation** - Non-linear discovery pattern, side-mounted dot navigation (desktop)
- **Parallax System** - Multi-layer scroll-driven depth throughout

### Navigation
- Non-linear discovery pattern
- Side-mounted dot navigation (desktop)
- Appears after scroll threshold
- No traditional header/footer
- Includes new sections: Visual, Systems, Signal

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Guidelines

### What This Is
- A designed artifact
- An experiment in controlled unease
- A demonstration of technical and aesthetic range

### What This Is Not
- A standard portfolio with cards and grids
- A playful or friendly experience
- A showcase of "best practices" UX patterns

### Copy Tone
All text follows these principles:
- Short declarative truths
- Calm language that implies threat
- Minimal explanation
- No marketing voice
- No emojis

Example fragments:
- "The system remembered first."
- "Sleep was rehearsal."
- "Nothing here is accidental."

## Customization

To adapt this portfolio for your own use:

1. **Update content** in component files:
   - `components/Hero.tsx` - Name and roles
   - `components/ProjectsSection.tsx` - Project data and URLs (replace `#` with actual project links)
   - `components/ArtGallery.tsx` - Artwork data and images
   - `components/DesignShowcase.tsx` - Design projects
   - `components/AboutSection.tsx` - Bio content
   - `components/QuickActions.tsx` - Contact links
   - `components/ContactForm.tsx` - Form submission handler

2. **Add images**:
   - Create `/public/art/` folder and add `art-1.jpg` through `art-6.jpg` for the gallery
   - Uncomment the `<Image>` component in `ArtGallery.tsx` (lines are marked in the code)
   - Add design preview images as needed

3. **Adjust colors** in `tailwind.config.ts`:
   - Change accent color from deep red to your preference
   - Maintain near-monochrome base for atmosphere
   - Hero now includes purple and cyan accents for visual interest

4. **Fine-tune motion** in component files:
   - Adjust timing in transition objects
   - Modify parallax ranges in useTransform calls
   - Customize symbiote cursor connection distance and opacity

5. **Replace fonts** in `app/layout.tsx`:
   - Choose alternative Google Fonts
   - Update CSS variables in `app/globals.css`

## Browser Support

Optimized for modern browsers with:
- WebGL support (for Three.js)
- CSS Grid and Flexbox
- Native font loading
- Smooth scrolling

## License

MIT - Use for your own portfolio, but make it your own.

## Acknowledgments

Built with stable, boring infrastructure.
Designed for atmospheric tension.
Written without compromise.
"# Storm-Portfolio" 
