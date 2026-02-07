# AGENT.md

## CUSTOMIZATION_GUIDE.md

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

## ENV_SETUP.md

# Environment Variables Setup

All your social/contact links are now controlled by environment variables for easy switching.

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your actual links:**
   ```bash
   # Replace these with your real URLs
   NEXT_PUBLIC_BEHANCE_URL=https://behance.net/yourusername
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/1234567890
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_BLOG_URL=https://yourblog.com
   NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

## What Uses These Variables?

### Floating Contact Button (Top-Right)
- **Behance**: `NEXT_PUBLIC_BEHANCE_URL`
- **GitHub**: `NEXT_PUBLIC_GITHUB_URL`
- **WhatsApp**: `NEXT_PUBLIC_WHATSAPP_URL` (replaced LinkedIn)
- **Twitter**: `NEXT_PUBLIC_TWITTER_URL`

### Quick Actions Section (Bottom)
- **Behance**: `NEXT_PUBLIC_BEHANCE_URL`
- **GitHub**: `NEXT_PUBLIC_GITHUB_URL`
- **Writing/Blog**: `NEXT_PUBLIC_BLOG_URL`
- **Contact**: `NEXT_PUBLIC_CONTACT_EMAIL`

### Projects Section
**NOT using env variables** - Edit URLs directly in:
- `components/ProjectsSection.tsx` (lines 6-38)

## WhatsApp URL Format

For WhatsApp, use this format:
```
https://wa.me/1234567890
```

Replace `1234567890` with your phone number (with country code, no + or spaces).

Example:
- USA: `https://wa.me/15551234567`
- UK: `https://wa.me/447700900123`

## Notes

- `.env.local` is gitignored (won't be committed)
- `.env.example` shows the template
- If you don't set a variable, it uses the fallback URL
- Changes require dev server restart

## MUSIC_OPTIONS.md

# Music Player Options

You asked about adding music. Here are your options:

## Option 1: Downloaded MP3 (EASY ✅)
**Complexity**: Low
**Time**: 5-10 minutes

### How it works:
1. Download your song as MP3
2. Place it in `/public/music/track.mp3`
3. Add a simple audio player component
4. Style it to match the dystopian aesthetic

### Pros:
- Works offline
- No external dependencies
- Full control over playback
- Fast loading
- No API limits

### Cons:
- Larger file size in your repo
- Only one song (unless you add multiple files)
- Manual updates required

---

## Option 2: Spotify Embed (MEDIUM ⚠️)
**Complexity**: Medium
**Time**: 20-30 minutes

### How it works:
1. Get Spotify track embed code
2. Add Spotify iframe player
3. Style the player to match your theme
4. Handle player state

### Pros:
- Professional look
- Links to Spotify
- Auto-updates if you change the track
- No file storage needed

### Cons:
- Requires internet connection
- User needs Spotify (even for preview)
- Less control over styling
- Iframe performance overhead
- Can't customize controls easily

---

## Option 3: Custom Audio Player with Playlist (HARD ❌)
**Complexity**: High
**Time**: 1-2 hours

### Features:
- Multiple songs
- Custom controls
- Visualizer
- Playlist management

### Why it's hard:
- Complex state management
- Audio API implementation
- Custom UI for all controls
- Handling edge cases

---

## My Recommendation

**Go with Option 1 (Downloaded MP3)** if:
- You want a simple, clean implementation
- One song/ambient track is enough
- You want it to work offline
- You want full control over the experience

**Skip the music feature** if:
- You want multiple songs with playlists
- You prefer Spotify integration but don't want the complexity
- You're not 100% sure about adding it

---

## If You Choose MP3 (Option 1):

I can add a **minimal, dystopian-styled music player**:
- Small button (top-right, under contact button)
- Play/pause control
- Volume slider (optional)
- Subtle waveform animation (optional)
- ~15 lines of code

Would take 10 minutes to implement.

Let me know if you want me to add it!

## MUSIC_SETUP.md

# Music Player Setup - "Live Evil" Lancey Foux Style

## What I Built

A **dystopian music player** that:
- Appears top-right (below contact button) after scrolling
- Starts **muted** by default
- **Loops infinitely** when playing
- Has play/pause and mute/unmute controls
- Shows "LIVE" indicator with audio bars when playing
- Glass aesthetic matching your portfolio
- Corner markers and scan lines

---

## About "Live Evil - Lancey Foux Intro"

### Copyright Issue ⚠️
- **Can't distribute the actual song** in your portfolio (copyright)
- Streaming from Spotify requires their embed (limited customization)
- **Best approach**: Use your own file or royalty-free alternative

### Your Options:

#### Option 1: Use the Actual Song (Personal Use Only) ✅
**For personal portfolio showcase:**

1. **Download/Convert the track** (for personal use only)
2. Save as: `/public/music/track.mp3`
3. Keep file under 5MB (compress if needed)
4. **DO NOT** deploy publicly if you don't own rights

**Tools to compress:**
- [freeconvert.com](https://www.freeconvert.com/mp3-compressor)
- Audacity (free software)
- ffmpeg: `ffmpeg -i input.mp3 -b:a 128k output.mp3`

---

#### Option 2: Create Similar Melodic Underground Vibe ✅ (RECOMMENDED)

Since "Live Evil" has that **dark, atmospheric, underground UK drill/trap** sound, here are legal alternatives:

**Royalty-Free Sites with Similar Vibes:**

1. **Epidemic Sound** ($15/month)
   - Search: "dark trap", "underground hip hop", "dystopian"
   - High quality, fully licensed

2. **Artlist** ($14.99/month)
   - "Cinematic dark beats"
   - Underground trap instrumentals

3. **Free Options:**
   - [Pixabay Music](https://pixabay.com/music/) - Search "dark trap beat"
   - [FreePD](https://freepd.com/) - Public domain
   - [Incompetech](https://incompetech.com/) - Kevin MacLeod (dark ambient)

4. **Make Your Own**
   - Use [Soundtrap](https://www.soundtrap.com/) (free)
   - Layer: Dark bass + atmospheric pads + minimal hi-hats
   - Export as MP3, done in 30 minutes

**Search Terms for Similar Sound:**
- "Dark UK drill instrumental"
- "Underground trap atmospheric"
- "Dystopian hip hop beat"
- "Melodic drill dark"
- "Cinematic trap minimal"

---

#### Option 3: Spotify Embed (Limited)
Use Spotify's official embed:
- Shows Spotify branding
- User needs Spotify account
- Can't auto-play muted
- Less control

---

## How to Add Your Music

### Method 1: Direct MP3 File (Easiest)

1. **Get your MP3 file** (compressed to ~3-5MB)

2. **Create folder:**
   ```bash
   mkdir public/music
   ```

3. **Add file:**
   ```
   /public/music/track.mp3
   ```

4. **Done!** The player will auto-detect it

### Method 2: Custom Path

1. Add to `.env.local`:
   ```
   NEXT_PUBLIC_MUSIC_URL=/music/your-custom-name.mp3
   ```

2. Place file at that path in `/public/`

---

## Player Controls

**Play/Pause Button** (top):
- Click to start/stop music
- First click auto-unmutes

**Mute Button** (bottom):
- Toggle sound on/off
- Shows speaker icon with slash when muted

**Live Indicator**:
- Appears when playing + unmuted
- Animated audio bars
- Shows "LIVE" text

---

## Recommended Approach

1. **Find a royalty-free track** that matches the vibe
2. Or **create a 30-60 second loop** yourself
3. Compress to 3-5MB
4. Name it `track.mp3`
5. Place in `/public/music/`

This way:
- ✅ Legal for public portfolio
- ✅ Perfect loop without awkward cuts
- ✅ Fast loading
- ✅ Professional

---

## File Specs

**Recommended:**
- Format: MP3
- Bitrate: 128-192 kbps
- Duration: 30-90 seconds (will loop)
- Size: 3-5 MB max
- Sample rate: 44.1 kHz

**How to compress:**
```bash
# Using ffmpeg
ffmpeg -i input.mp3 -b:a 128k -ar 44100 output.mp3
```

---

## Testing

1. Add your MP3 to `/public/music/track.mp3`
2. Run: `npm run dev`
3. Scroll down past 600px
4. Music player appears top-right
5. Click play → music starts looping

---

## Legal Note

If deploying publicly:
- Use only royalty-free or licensed music
- Or music you created yourself
- Don't use copyrighted tracks without permission

For personal showcase only, you can use any track.

## README.md

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

## UPDATES.md

# Latest Updates

## NEW: Hero Redesign (v2.1)

### Name with Dollar Sign + Enhanced Glitch
- **Changed**: "Storm" → "$torm"
- Dollar sign in red accent color
- **Glitch Effect**: Now affects THE WHOLE WORD "$torm"
  - 3 glitch layers: Red, Cyan, White
  - Stronger displacement (3px vs 2px)
  - Higher opacity for more visibility
- **Frequency**: Every 3-5 seconds (was 10-15 seconds)
- Creates that classic analog/VHS glitch aesthetic

### Old School Dystopian Roles Panel
**Location**: Right side of hero (frees up left space)

**Features**:
- Retro terminal aesthetic
- Glass panel with red left border
- Monospace font, uppercase text
- `>` prompt before each role
- Corner brackets (top-left, bottom-left)
- Repeating scan line overlay
- Pulsing "ONLINE" status indicator
- Roles split across lines for dramatic effect:
  ```
  > PRODUCT DESIGNER
    × SOFTWARE ENGINEER

  > DYSTOPIAN HORROR
    WRITER
  ```

### Layout Improvements
- **Grid System**: 7 columns (name/clock) + 5 columns (roles)
- Left side: Name and digital clock
- Right side: Roles panel (offset down for visual interest)
- More breathing room, less cramped

## Major Changes

### 🎯 Floating Contact Button (NEW)
- **Location**: Top-right corner, appears after scrolling 600px
- **Icon**: Phone icon (simple, universally recognized)
  - Rotates 135° on expand
  - Clean SVG outline style
- **Features**:
  - Liquid glass aesthetic with scan line effect
  - Click to expand radial menu with 5 social links
  - Behance, GitHub, Mail, LinkedIn, Twitter
  - Mail icon opens contact modal (not external link)
  - Smooth spring animations
  - Techie corner markers

**To customize links**: Edit `components/FloatingContact.tsx` lines 11-32

### ✉️ Contact Modal (NEW)
- **Trigger**: Click mail icon in floating contact button
- **Features**:
  - Full-screen backdrop with blur
  - Tech-inspired form with scan line animation
  - Corner markers for cyberpunk aesthetic
  - Red accent focus states
  - Floating close button
  - Minimalist, professional design

**To add form handler**: Edit `components/ContactModal.tsx` line 17

### 🕐 3D Digital Clock (NEW)
- **Location**: Hero section, replaces static manifesto
- **Features**:
  - Real-time clock display (HH:MM:SS)
  - 3D layered text effect with shadows
  - Rotating quotes every 4 seconds
  - 6 dystopian quotes in rotation
  - Progress dots indicator
  - Red glow pulse effect

**To customize quotes**: Edit `components/DigitalClock.tsx` lines 6-13

### 🧬 Venom Symbiote Cursor (UPDATED)
- **Previous**: Red web lines, on top of content (z-50)
- **Now**: Green/yellow gradient, in background (z-0)
- **Features**:
  - Slow, sticky movement (like Venom)
  - Organic curved connections
  - Pulsing blob at cursor center
  - Green-to-yellow gradient on strands
  - Moves behind all content
  - Very subtle background web between nodes

**Visual**: Green (100, 200, 50) → Yellow (200, 200, 50)

### 🎨 Hero Section (REDESIGNED)
**Before**: Too colorful with blue/purple/cyan orbs
**Now**: Minimal white text with subtle red accents

- **Text**: Mostly white/bone color
- **Glitch**: Only appears every 10-15 seconds (not constant)
- **Red accents**: Thin line under name, subtle atmospheric glow
- **Layout**: Asymmetric - content offset left, not centered
- **Clock**: Replaces static manifesto text

### 📂 Projects & Designs (TONED DOWN)
**Before**: Colorful hover effects, gradient backgrounds
**Now**: Subtle, professional

- **Hover**: No color change on title (was changing to accent)
- **Underline**: Minimal red accent at 30% opacity
- **Designs**: No gradient backgrounds on hover
- **Scan line**: Subtle tech effect instead of color overlays

## What Was Removed

- ❌ Mars vs Mercury contact form (full section)
- ❌ Colorful hero orbs (blue, purple, cyan)
- ❌ Gradient text on roles
- ❌ Color-coded design showcase backgrounds
- ❌ Static manifesto quotes

## File Structure

```
components/
├── FloatingContact.tsx    (NEW)
├── ContactModal.tsx       (NEW)
├── DigitalClock.tsx       (NEW)
├── Hero.tsx              (REDESIGNED)
├── SymbioteCursor.tsx    (UPDATED - Venom style)
├── ProjectsSection.tsx   (UPDATED - Less color)
├── DesignShowcase.tsx    (UPDATED - Less color)
└── ... (other components unchanged)
```

## Color Palette (Current)

### Primary
- `bone` (#f4f4f0) - Main text, 80-90% opacity
- `ink` (#0a0a0a) - Background
- `charcoal` (#1a1a1a) - Secondary surfaces

### Accents (Minimal Use)
- `accent` (#8b0000) - Deep red, very sparingly used
- Venom gradient: Green (rgba(100, 200, 50)) → Yellow (rgba(200, 200, 50))

## Next Steps to Personalize

1. **Update social links** in `FloatingContact.tsx`
2. **Add form submission handler** in `ContactModal.tsx`
3. **Customize clock quotes** in `DigitalClock.tsx`
4. **Add your name** in `Hero.tsx` line 75
5. **Update project URLs** in `ProjectsSection.tsx` (replace `#` symbols)

## Run the Project

```bash
npm run dev
```

Open http://localhost:3000

Build successful ✅ - Zero errors, zero warnings
