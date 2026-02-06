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
