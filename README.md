# June Arness Official | Static Website

A static HTML/CSS/JavaScript rebuild of the June Arness Official site originally made on
Base44 (https://june-arness-zone.base44.app). The design, text, and page layouts were
recreated from the original site's own code, so it looks and behaves like the Base44
version but needs no backend, no build step, and no paid platform.

## Technology

- HTML5, CSS3, vanilla JavaScript
- No frameworks, no npm, no server, no database
- Fonts: Oswald (headings) and Inter (body) from Google Fonts, same as the original
- Hosting: GitHub Pages (or any static host)

## Folder structure

Everything sits in one folder with no subfolders. That's deliberate: it makes uploading
through GitHub's website foolproof, since folders are easy to lose when uploading.

```text
june-arness/
├── index.html             Home
├── music.html             Music
├── videos.html            Videos
├── gallery.html           Gallery (with full-screen viewer)
├── xreative-xloud.html    The Xreative Xloud
├── community.html         Community
├── submissions.html       Submit Music
├── partners.html          Sponsors & Partners
├── press.html             Press Kit
├── content.js             ALL editable content: music, videos, photos, partners, posts, press text
├── script.js              Menu, rendering, filters, gallery viewer, forms, press tools
├── style.css              All styling (colors and fonts are variables at the top)
├── favicon.svg            Browser tab icon
├── hero-performance.jpg   Photos (add new ones to this same folder)
├── art-of-fact-cover.jpg
├── we-bosses-cover.jpg
├── capricorn-cover.jpg
├── anunnaki-cover.jpg
├── community-event.jpg
├── README.md
└── .gitignore
```

## Run it locally (Python 3.11)

```bash
cd june-arness
python -m http.server 8000
```

On some Macs and Linux machines use `python3` instead of `python`. Then open
http://localhost:8000. Press `Ctrl + C` to stop.

## Put it on GitHub

1. Create a new **public** repository on github.com (for example `june-arness`). Don't
   add a README, .gitignore, or license.
2. Either use the website (**Add file → Upload files**, drag in every file from this
   folder, **Commit changes**), or use Git:

```bash
cd june-arness
git init
git add .
git commit -m "Initial June Arness website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Turn on GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**,
   then click **Save**.
3. After 1 to 3 minutes the site is live at `https://YOUR-USERNAME.github.io/june-arness/`.
   All links are relative, so it works at that address as is.
4. After any update, hard-refresh (Ctrl+Shift+R) to see changes.

## Custom domain (later)

1. In **Settings → Pages → Custom domain**, enter the domain (e.g. `www.junearness.com`)
   and save.
2. At the domain registrar, add a **CNAME** record for `www` pointing to
   `YOUR-USERNAME.github.io`, and **A** records for the bare domain pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Once DNS updates (up to 24 hours), tick **Enforce HTTPS**.
4. Replace `https://junearness.github.io/June-Arness-The-Artist/` in the `<head>` of all
   nine pages with the new domain (canonical, og:url, og:image, twitter:image).

Current instructions: https://docs.github.com/pages

## Updating content

Almost everything is in **content.js**. Open it in any text editor (Notepad works, VS Code
is nicer). Each section has instructions and an example at the top.

- Keep the commas between items and the quotes around text. One missing comma stops
  every list on the site from showing. If a page suddenly goes blank, check the last
  edit in content.js.
- New images and audio go in the main folder, referenced by file name only
  (`"new-photo.jpg"`). File names are case-sensitive on GitHub: `Photo.JPG` and
  `photo.jpg` are different files.

### Social links

Instagram, the YouTube channel, and the YouTube Music (Topic) channel are set once in the
`site` settings at the top of `content.js`. They appear in the footer on every page, and the
two YouTube links also appear as buttons on the Videos page.

### Music

Add a block to `releases`. Set `type` to `album`, `ep`, or `single` (these drive the filter
tabs). `featured: true` puts it in Home's "Latest Releases" (first 3). Paste streaming links
into `links`; empty ones are hidden. For an on-page player, add an MP3 June owns to the
folder and set `audio: "file-name.mp3"`.

### Videos

Add a block to `videos` with the link to a single YouTube video (open the video, click
Share, copy the link). Channel links won't work here; those go in the site settings. Set `category` to
`music_video`, `official_audio`, `live_performance`, or `behind_the_scenes` (these drive the filter tabs). The thumbnail is fetched automatically
and clicking opens YouTube, same as the original. `featured: true` shows it on Home (first 2).
Self-hosted video files work too (`file:`), but keep them small: GitHub rejects files over
100 MB. YouTube is the better home for video.

### Gallery

Add a block to `gallery` with the image file, a short description for screen readers
(`alt`), an optional `caption`, and a `category` (`performance`, `studio`, `promo`, `press`).
Resize photos to about 1600px wide before adding them; phone photos straight off the camera
make the page slow.

### Partners

Add real, confirmed partners to `partners` with a `tier` (`platinum`, `gold`, `silver`,
`partner`). No logo? Leave `logo: ""` and the first letter of the name is shown.

### Press materials

The three tabs (Artist Bio, Artist Pitch, Press Kit) are in `press`. Fill in the
`[bracketed]` placeholders before sending anything to media. On the live page, visitors can
edit a copy and download it as a .txt file; those edits aren't saved to the site.

### Community posts

Add approved posts to `communityPosts`. `pinned: true` keeps a post on top.

## Connecting the forms

GitHub Pages can't receive form submissions or store files. Until a form service is
connected, the Submit Music form and the Community composer check what's typed, then say
plainly that nothing was sent. They never pretend to succeed.

**Formspree (recommended):**

1. Create a free account at https://formspree.io and make a form. Copy its ID.
2. In `submissions.html`, find the **FORM ENDPOINT** comment and change
   `action=""` to `action="https://formspree.io/f/YOUR_FORM_ID"`.
3. Do the same in `community.html` (the **COMMUNITY ENDPOINT** comment) with a second form.
   Posts get emailed to June's team for approval; add the good ones to `communityPosts`.

That's it. The success screen ("Submitted!") shows only after the service confirms receipt.

**Audio uploads:** Formspree's free plan doesn't accept file attachments. Options: a paid
Formspree plan, a service that accepts files, or asking artists to send a link instead
(the Link to Track field works on every plan).

## What a static site can't do (and what replaced it)

| Base44 feature | In this rebuild |
| --- | --- |
| Admin dashboard and admin pages | Not included. Content is edited in `content.js` instead. A fake admin screen on a public site would be insecure and misleading. |
| User accounts and "Sign in" | Not possible without a backend. The Sign in link shows the same "coming soon" message as Subscribe. |
| Xreative Xloud subscriptions and subscriber-only streams | Page and pricing recreated. To take payments, paste a Stripe Payment Link or Patreon URL into `site.subscribeUrl` in `content.js`. Truly subscriber-only content needs a platform that handles logins (Patreon, Memberful, etc.). |
| Community posts, comments, likes saved live | Moderated posting through Formspree (above). Live posting would need Supabase, Firebase, or similar. |
| File uploads | Need a form service that accepts files (above). |
| PIN-locked Press Kit | Made public. A PIN checked in the browser protects nothing on a static site, since anyone can read it in the code. Don't put confidential material in this repo. |

## Security notes

- There are no passwords, API keys, or tokens anywhere in this project. Keep it that way:
  everything in a public GitHub repo is visible to anyone.
- **Never upload the "Save as webpage" copies of the Base44 site** to this repo. That saved
  file contained a login token for the Base44 account.
- Links to outside sites open in a new tab with `rel="noopener noreferrer"`.
- `script.js` escapes all text from `content.js` before showing it, so a stray `<` in a
  caption can't break the page.

## Accessibility

Semantic landmarks, one H1 per page, a skip link, labeled form fields, keyboard-usable menu,
filters, tabs and photo viewer (arrow keys, Escape to close, focus returns to the photo),
visible focus rings, and reduced-motion support.

## Checked before delivery

- All nine pages load with no JavaScript errors, served from a subfolder the way GitHub
  Pages serves a repository
- No horizontal scrolling at 1920, 1440, 1280, 1024, 768, 480 and 375px wide
- Mobile menu, filters, photo viewer (arrows, Escape, swipe), form validation, "not
  connected" notices, press tabs, edit and .txt download all tested
- Every link, image and script path resolves; no absolute root paths
