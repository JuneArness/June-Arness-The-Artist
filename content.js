/* ==========================================================================
   June Arness Official | CONTENT FILE
   --------------------------------------------------------------------------
   This is the one file to edit when adding music, videos, photos, partners,
   community posts or press text. The pages read from it automatically.

   Rules of thumb
   - Keep the commas between items. A missing comma breaks the whole file.
   - Images and audio live in the same folder as this file. Refer to them
     by file name only, e.g. "my-photo.jpg".
   - Leave a link as "" (empty) and its button simply won't show.
   - Items appear in the order they are listed here.
   ========================================================================== */

window.SITE_CONTENT = {

  /* ------------------------------------------------------------------------
     SITE-WIDE SETTINGS
     ------------------------------------------------------------------------ */
  site: {
    name: "June Arness Official",
    tagline: "Major Independent Recording Artist",
    footerBlurb: "Major Independent Recording Artist. Three projects released across all major streaming platforms.",

    /* Social links: shown in the footer on every page. Leave "" to hide one. */
    instagram: "https://www.instagram.com/june_arness_the_artist/",
    youtubeChannel: "https://www.youtube.com/@June_Arness",
    /* YouTube's auto-generated "Topic" channel: the official YouTube Music
       versions of the released songs. */
    youtubeMusic: "https://www.youtube.com/channel/UCN_RLqY7CeSD2Q8NrQhkHAg",

    /* Xreative Xloud subscription checkout link (e.g. a Stripe Payment Link
       or Patreon page). Leave "" and the Subscribe button shows a
       "coming soon" message, same as the current Base44 site. */
    subscribeUrl: ""
  },

  /* ------------------------------------------------------------------------
     MUSIC RELEASES
     type: "album" | "ep" | "single"   (drives the filter tabs on Music page)
     featured: true  shows the release in "Latest Releases" on the Home page
                     (the Home page shows the first 3 featured items)
     cover: image file name, or "" to show the disc placeholder
     year: shown on the Music page card, or "" to hide
     audio: optional MP3 file name for an on-page player, e.g. "we-bosses.mp3"
            (only add audio June has the right to publish)
     links: any platform left "" is hidden
     comingSoon: true shows a "Coming soon" tag (for unreleased music)
     ------------------------------------------------------------------------ */
  releases: [
    {
      title: "The Art-of-Fact (Un Earthed)",
      type: "album",
      featured: true,
      year: "2025",
      cover: "art-of-fact-cover.jpg",
      coverAlt: "June Arness in a green Ducks hockey jersey performing with a microphone",
      description: "",
      audio: "",
      links: {
        appleMusic: "https://music.apple.com/us/album/the-art-of-fact-un-earthed/1816589238",
        spotify: "",
        youtube: "",
        tidal: "",
        soundcloud: "",
        iheart: "https://www.iheart.com/artist/june-arness-42138078/albums/the-art-of-fact-un-earthed-330534712",
        pandora: ""
      }
    },
    {
      title: "We Bosses",
      type: "single",
      featured: true,
      year: "",          /* PLACEHOLDER: add release year */
      cover: "we-bosses-cover.jpg",
      coverAlt: "June Arness on stage in a black cowboy hat, arm raised, singing into a microphone",
      description: "",
      audio: "",
      links: {
        appleMusic: "https://music.apple.com/us/album/we-bosses/1816589238?i=1816589244",
        spotify: "",
        youtube: "",
        tidal: "",
        soundcloud: "",
        iheart: "",
        pandora: "https://pandora.app.link/nHWrsYPnZ2b"
      }
    },
    {
      title: "The Anunnaki",
      type: "single",
      featured: false,
      /* Not released yet. comingSoon: true shows a "Coming soon" tag.
         On release day: set it to false and add the streaming links. */
      comingSoon: true,
      year: "",
      cover: "anunnaki-cover.jpg",
      coverAlt: "The Anunnaki cover art: an armored warrior in a feathered golden headdress, with June Arness and Loona Laflair named on either side",
      description: "feat. Loona Laflair",
      audio: "",
      links: { appleMusic: "", spotify: "", youtube: "", tidal: "", soundcloud: "", iheart: "", pandora: "" }
    },
    {
      title: "Capricorn",
      type: "album",   /* multi-track project; change to "ep" if that fits better */
      featured: false,
      year: "",
      cover: "capricorn-cover.jpg",
      coverAlt: "Capricorn cover art: a smiling baby in a sailor outfit, with the title Capricorn in white script",
      description: "June Arness \u2014 Capricorn. Available on all platforms.",
      audio: "",
      links: {
        appleMusic: "",
        spotify: "",
        youtube: "",
        tidal: "",
        soundcloud: "",
        iheart: "https://www.iheart.com/artist/june-arness-42138078/albums/capricorn-359360229",
        pandora: "https://pandora.app.link/zsrw9xx4I6b"
      }
    }
  ],

  /* ------------------------------------------------------------------------
     VIDEOS
     category: "music_video" | "official_audio" | "live_performance" | "behind_the_scenes"
     youtube: a normal YouTube link (watch?v=... or youtu.be/...)
     file: OR a video file in this folder, e.g. "live-clip.mp4" (keep it small;
           GitHub rejects files over 100 MB and Pages works best under ~25 MB)
     thumbnail: optional image; YouTube thumbnails are fetched automatically
     featured: true shows it on the Home page (first 2 featured)

     Use the link of a single video (open the video on YouTube, click Share,
     copy the link). Channel links go in the site settings at the top instead.
     The live site's videos load from its database and were not in the saved
     files, so this list starts empty. Example:

     {
       title: "We Bosses (Official Video)",
       category: "music_video",
       youtube: "https://www.youtube.com/watch?v=VIDEO_ID",
       file: "",
       thumbnail: "",
       description: "",
       featured: true
     },
     ------------------------------------------------------------------------ */
  videos: [
    {
      title: "Feeling Like Jeezy",
      category: "music_video",
      youtube: "https://youtu.be/C_CxSpwobDo",
      file: "",
      thumbnail: "",
      description: "From The Art-of-Fact (Un Earthed)",
      featured: true
    },
    {
      title: "We Bosses (feat. Rob Ruler Cyph)",
      category: "official_audio",
      youtube: "https://youtu.be/YqV6lwKI4rA",
      file: "",
      thumbnail: "",
      description: "From The Art-of-Fact (Un Earthed)",
      featured: true
    },
    {
      title: "Hold Up (feat. Sunny Redd13)",
      category: "official_audio",
      youtube: "https://youtu.be/q0QpkvCvFVY",
      file: "",
      thumbnail: "",
      description: "From The Art-of-Fact (Un Earthed)",
      featured: false
    },
    {
      title: "I Need Your Love",
      category: "official_audio",
      youtube: "https://youtu.be/i_5Gifjw0G4",
      file: "",
      thumbnail: "",
      description: "From Capricorn",
      featured: false
    }
  ],

  /* ------------------------------------------------------------------------
     GALLERY
     category: "performance" | "studio" | "promo" | "press"
     caption: shown on hover and in the full-screen viewer (optional)

     These are the photos supplied with the rebuild. The live gallery's full
     set lives in the Base44 database; add the rest here.
     Two photos carry a "Raw Emotion Visuals" watermark. Confirm the
     photographer is fine with them being used on the site.
     ------------------------------------------------------------------------ */
  gallery: [
    {
      image: "hero-performance.jpg",
      alt: "June Arness singing into a microphone in a black cowboy hat, a DJ at a laptop behind him",
      caption: "Photo: Raw Emotion Visuals",
      category: "performance"
    },
    {
      image: "we-bosses-cover.jpg",
      alt: "June Arness on stage with one arm raised, performing under purple and blue lights",
      caption: "Photo: Raw Emotion Visuals",
      category: "performance"
    },
    {
      image: "art-of-fact-cover.jpg",
      alt: "June Arness in a green Ducks jersey and white cap performing at night in front of a lit Open sign",
      caption: "",
      category: "performance"
    },
    {
      image: "community-event.jpg",
      alt: "June Arness in a Padres jersey posing with three friends in front of a holographic backdrop",
      caption: "",
      category: "promo"
    }
  ],

  /* ------------------------------------------------------------------------
     SPONSORS & PARTNERS
     tier: "platinum" | "gold" | "silver" | "partner"
     logo: image file name, or "" to show the first letter of the name
     Only add real, confirmed partners. The list starts empty, so the page
     shows "Partner announcements coming soon." Example:

     {
       name: "Partner Name",
       tier: "partner",
       logo: "partner-logo.png",
       website: "https://partner-website.com",
       description: "One line about the partnership."
     },
     ------------------------------------------------------------------------ */
  partners: [
  ],

  /* ------------------------------------------------------------------------
     COMMUNITY POSTS
     A static site can't accept posts from visitors (see README). Posts added
     here display as the community feed. pinned: true keeps a post on top.
     Example:

     {
       author: "June Arness",
       date: "2026-05-08",
       content: "New music on the way. Stay locked in.",
       image: "",
       pinned: true
     },
     ------------------------------------------------------------------------ */
  communityPosts: [
  ],

  /* ------------------------------------------------------------------------
     PRESS MATERIALS
     Copied from the live site's Press Materials page. Anything in
     [square brackets] is a placeholder to fill in before sharing.
     Keep the backtick ` characters around each content block.
     ------------------------------------------------------------------------ */
  press: {
    bio: {
      label: "Artist Bio",
      title: "Artist Biography",
      tagline: "June Arness \u2014 Major Independent Recording Artist",
      content: `June Arness is a Major Independent Recording Artist from Grand Rapids, Michigan, signed to PSP Entertainment. With three full-length projects and a catalogue available on every major streaming platform \u2014 including Apple Music, Pandora, iHeartRadio, and YouTube Music \u2014 June has carved out a distinct lane in hip-hop that blends raw authenticity with cinematic energy.

His latest album, "The Art-of-Fact (Un Earthed)" (2025), stands as a 17-track, 59-minute statement of purpose \u2014 part autobiography, part manifesto. He has published music with major recording artist Rob Ruler Cyph of Cop Hevy Ent., cementing his credibility in the industry and proving he moves in elite circles.

Beyond the studio, June is the driving force behind Xreative Xloud, an exclusive fan platform where subscribers get behind-the-scenes access and exclusive content. His work with PSP Entertainment extends to talent discovery, artist development, and live event production across Michigan and beyond.

June Arness is an artist, a brand, and a movement. His music speaks to the grind, the glory, and the journey in between.`
    },
    pitch: {
      label: "Artist Pitch",
      title: "Artist Pitch",
      tagline: "Why June Arness \u2014 The Case for Partnership",
      content: `ARTIST: June Arness
LABEL: PSP Entertainment
GENRE: Hip-Hop / Rap
LOCATION: Grand Rapids, Michigan
PLATFORMS: Apple Music \u00b7 Pandora \u00b7 iHeartRadio \u00b7 YouTube Music \u00b7 Spotify

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

THE OPPORTUNITY

June Arness represents a rare breed of independent artist \u2014 fully self-sustaining, brand-ready, and with an established catalogue that proves consistent output and artistic range. With three studio projects and a growing fanbase that spans streaming platforms, live events, and community engagement, June is positioned for a strategic partnership that accelerates his trajectory.

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

KEY HIGHLIGHTS

\u2022 Catalogue: 3 full-length projects, multiple singles, available on all major platforms
\u2022 Latest Project: "The Art-of-Fact (Un Earthed)" \u2014 17 tracks, 59 minutes (2025)
\u2022 Collaborations: Published music with Rob Ruler Cyph of Cop Hevy Ent.
\u2022 Platform: Xreative Xloud \u2014 exclusive fan subscription content ($4.99/month)
\u2022 Label: PSP Entertainment \u2014 full production and management infrastructure
\u2022 Live Performance: Active touring and event presence across Michigan and the Midwest

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

WHAT WE'RE SEEKING

June Arness is open to sync licensing opportunities, brand partnerships, booking inquiries, feature collaborations, and media coverage. We believe in aligned partnerships \u2014 if your brand speaks to culture, creativity, and ambition, let's connect.

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

CONTACT

PSP Entertainment
[Your Contact Email]
[Your Phone Number]
[Website / Social Links]`
    },
    presskit: {
      label: "Press Kit",
      title: "Press Kit",
      tagline: "Official Media & Press Information \u2014 June Arness",
      content: `JUNE ARNESS \u2014 OFFICIAL PRESS KIT
PSP Entertainment | Grand Rapids, Michigan
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

QUICK FACTS

Full Name: June Arness
Label: PSP Entertainment
Genre: Hip-Hop / Rap
Based In: Grand Rapids, Michigan
Years Active: [Year] \u2013 Present
Latest Release: The Art-of-Fact (Un Earthed) (2025)
Streaming: Apple Music \u00b7 Pandora \u00b7 iHeartRadio \u00b7 YouTube Music

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

DISCOGRAPHY

1. The Art-of-Fact (Un Earthed) \u2014 Album (2025) | 17 Tracks \u00b7 59 Minutes
2. We Bosses \u2014 Single
3. The Anunnaki \u2014 Single | feat. Loona Laflair
4. Capricorn \u2014 Album

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

NOTABLE ACHIEVEMENTS

\u2022 Published music with Rob Ruler Cyph of Cop Hevy Ent.
\u2022 Performed at Goldyn Night \u2014 Muse Art Gallery, Grand Rapids
\u2022 Featured on Rap Fiend Radio (RFR)
\u2022 Open Mic 72 Grand Rapids Performer
\u2022 VS Battle League \u2014 Girls Night Out Event Headliner
\u2022 Founder: Xreative Xloud \u2014 Exclusive Fan Subscription Platform
\u2022 Signed to PSP Entertainment

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

BIOGRAPHY SUMMARY

June Arness is a Major Independent Recording Artist from Grand Rapids, Michigan. His latest album "The Art-of-Fact (Un Earthed)" is a 17-track project available on all major streaming platforms. He has collaborated with major recording artist Rob Ruler Cyph of Cop Hevy Ent. Known for his bold stage presence and authentic lyrical storytelling, June has built a devoted following through consistent releases, live performances, and his Xreative Xloud exclusive fan platform.

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

MEDIA ASSETS

High-resolution photos, album artwork, and logos are available upon request or via the Gallery page of this website.

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

BOOKING & PRESS INQUIRIES

PSP Entertainment
[Your Contact Email]
[Your Phone Number]
Instagram: @june_arness_the_artist
[Additional Social Links]

All press materials are available for editorial use with credit to PSP Entertainment / June Arness.`
    }
  }
};
