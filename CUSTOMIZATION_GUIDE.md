# Customization Guide

## Quick Start Checklist

### 1. Adding Your Art Gallery Images

1. Create the art folder:
   ```bash
   mkdir public/art
   ```

2. Add your images:
   - `public/art/art-1.jpg`
   - `public/art/art-2.jpg`
   - `public/art/art-3.jpg`
   - `public/art/art-4.jpg`
   - `public/art/art-5.jpg`
   - `public/art/art-6.jpg`

3. In `components/ArtGallery.tsx`, uncomment lines 30-37:
   ```tsx
   <Image
     src={artwork.src}
     alt={artwork.alt}
     fill
     className="object-cover transition-transform duration-700 group-hover:scale-105"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   />
   ```

4. Update artwork data (lines 6-42):
   ```tsx
   const artworks = [
     {
       id: 1,
       title: 'Your Artwork Title',
       src: '/art/art-1.jpg',
       alt: 'Description of artwork',
       year: '2025',
     },
     // ... add more artworks
   ]
   ```

### 2. Making Project Titles Link to Your Work

In `components/ProjectsSection.tsx`, update the `url` field for each project:

```tsx
const projects = [
  {
    id: '001',
    title: 'Vesper Protocol',
    // ... other fields
    url: 'https://behance.net/your-project', // Replace # with actual URL
  },
]
```

### 3. Customizing the Contact Form

In `components/ContactForm.tsx`, update the form submission handler (line 22):

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  // Option 1: Use a form service like Formspree
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formState),
  })

  // Option 2: Send to your own API
  // fetch('/api/contact', { ... })
}
```

### 4. Personalizing Content

#### Hero Section (`components/Hero.tsx`)
- Line 124: Change "Storm" to your name
- Lines 179-186: Update your roles

#### About Section (`components/AboutSection.tsx`)
- Line 48: Update name
- Lines 51-77: Replace bio text with your story
- Lines 81-92: Update role tags

#### Quick Actions (`components/QuickActions.tsx`)
- Lines 6-23: Update all URLs
  ```tsx
  const actions = [
    {
      label: 'Behance',
      href: 'https://behance.net/yourusername',
      description: 'Visual archive',
    },
    // ... update all links
  ]
  ```

### 5. Design Showcase

In `components/DesignShowcase.tsx`, replace the example designs (lines 6-30):

```tsx
const designs = [
  {
    id: 1,
    title: 'Your Design Project',
    category: 'Category',
    description: 'Project description',
    year: '2025',
    tools: ['Tool 1', 'Tool 2'],
    color: 'from-red-900/20 to-accent/10', // Tailwind gradient
  },
]
```

### 6. Adjusting the Symbiote Cursor

In `components/SymbioteCursor.tsx`:

**Change connection distance** (line 59):
```tsx
const maxDistance = 300 // Increase for wider connections
```

**Adjust number of anchor nodes** (line 24):
```tsx
const nodeCount = 12 // More nodes = denser web
```

**Modify opacity** (lines 50, 56):
```tsx
const opacity = (1 - distance / maxDistance) * 0.15 // Increase 0.15 for brighter web
```

### 7. Color Customization

#### Accent Color
In `tailwind.config.ts`:
```tsx
colors: {
  accent: '#8b0000', // Change to your color
}
```

#### Hero Color Orbs
In `components/Hero.tsx`:
- Lines 60-62: Mouse-reactive gradient colors
- Lines 70-71: Red/purple orb gradient
- Lines 89-90: Blue/cyan orb gradient

#### Contact Form Colors
In `components/ContactForm.tsx`:
- Line 38: Mars (red) color
- Line 41: Additional red accent
- Line 45: Mercury (blue) color
- Line 48: Mercury accent

### 8. Writing Fragments

In `app/page.tsx`, update the dystopian text between sections (lines 29-65):

```tsx
<WritingFragment
  text="Your custom text here."
  align="center" // "left", "center", "right"
  size="md" // "sm", "md", "lg"
/>
```

### 9. Footer

Update footer text in `app/page.tsx` (lines 87-97):
```tsx
<p className="font-grotesk text-sm text-bone/40">
  Your Name — Your Roles
</p>
```

## Testing Your Changes

After making changes:

```bash
# Development mode
npm run dev

# Production build (test for errors)
npm run build

# Preview production build
npm start
```

## Pro Tips

1. **Keep the dystopian tone**: Avoid marketing language, use declarative statements
2. **Maintain asymmetry**: Don't center everything, embrace broken layouts
3. **Slow motion**: Keep animations slow and deliberate (0.4s minimum)
4. **Subtle color**: Use color sparingly for maximum impact
5. **Typography hierarchy**: Let oversized type do the heavy lifting

## Need Help?

- All components are heavily commented
- Each section is modular - change one without affecting others
- The build will fail if there are TypeScript errors, making it safe to experiment
- Use `npm run dev` to see changes in real-time
