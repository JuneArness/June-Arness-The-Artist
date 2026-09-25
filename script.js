/* ==========================================================================
   June Arness Official | Site script
   Navigation, content rendering from content.js, filters, gallery viewer,
   forms and the press kit tools. No libraries, no build step.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var DATA = window.SITE_CONTENT || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (same set used in the HTML pages) ---------- */
  var ICONS = {
    "music": "<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
    "play": "<polygon points=\"6 3 20 12 6 21 6 3\"/>",
    "arrowRight": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
    "external": "<path d=\"M15 3h6v6\"/><path d=\"M10 14 21 3\"/><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>",
    "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M6 12c0-1.7.7-3.2 1.8-4.2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M18 12c0 1.7-.7 3.2-1.8 4.2\"/>",
    "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>",
    "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
    "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
    "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
    "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/>",
    "chevronRight": "<path d=\"m9 18 6-6-6-6\"/>",
    "chevronLeft": "<path d=\"m15 18-6-6 6-6\"/>",
    "imagePlus": "<path d=\"M16 5h6\"/><path d=\"M19 2v6\"/><path d=\"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/>",
    "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"/><path d=\"m21.854 2.147-10.94 10.939\"/>",
    "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\"/>",
    "checkCircle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/>",
    "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>",
    "pin": "<line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"22\"/><path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z\"/>",
    "fileText": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/>",
    "megaphone": "<path d=\"m3 11 18-5v12L3 14v-3z\"/><path d=\"M11.6 16.8a3 3 0 1 1-5.8-1.6\"/>",
    "newspaper": "<path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2\"/><path d=\"M18 14h-8\"/><path d=\"M15 18h-5\"/><path d=\"M10 6h8v4h-8V6Z\"/>",
    "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>",
    "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/>",
    "check": "<path d=\"M20 6 9 17l-5-5\"/>",
    "video": "<path d=\"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\"/><rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"/>",
    "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"/><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"/>"
};
  function icon(name, cls) {
    return '<svg class="' + (cls || "icon") + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- Small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function safeUrl(url) {
    url = String(url || "").trim();
    if (!url) return "";
    if (/^(https?:|mailto:|tel:)/i.test(url)) return url;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return ""; /* block javascript: and similar */
    return url; /* relative file name */
  }
  function list(name) { return Array.isArray(DATA[name]) ? DATA[name] : []; }

  /* ---------- Footer year ---------- */
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Navigation ---------- */
  var nav = $(".site-nav");
  var toggle = $(".nav-toggle");
  var menu = $("#mobile-menu");

  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
    $all("a", menu).forEach(function (a) { a.tabIndex = open ? 0 : -1; });
  }
  if (toggle && menu) {
    setMenu(false);
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !nav.contains(e.target)) setMenu(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1280) setMenu(false); });
  }

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  if ("IntersectionObserver" in window && !reduceMotion) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0.05 });
  }
  function observe(root) {
    $all(".reveal:not(.is-visible)", root).forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-visible");
    });
  }

  /* ---------- Filter tabs (music, videos, gallery) ---------- */
  function setupTabs(container, onChange) {
    if (!container) return;
    var tabs = $all(".tab", container);
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-pressed", t === tab ? "true" : "false"); });
        onChange(tab.getAttribute("data-filter"));
      });
    });
  }

  /* ---------- Music ---------- */
  var PLATFORMS = [
    { key: "appleMusic", label: "Apple Music", cls: "btn-apple" },
    { key: "spotify", label: "Spotify", cls: "btn-spotify" },
    { key: "youtube", label: "YouTube", cls: "btn-youtube" },
    { key: "tidal", label: "Tidal", cls: "btn-tidal" },
    { key: "soundcloud", label: "SoundCloud", cls: "btn-soundcloud" },
    { key: "iheart", label: "iHeart", cls: "btn-other" },
    { key: "pandora", label: "Pandora", cls: "btn-other" },
    { key: "iheartPandora", label: "iHeart / Pandora", cls: "btn-other" } /* older combined field */
  ];

  function platformLinks(release) {
    var links = release.links || {};
    var html = PLATFORMS.filter(function (p) { return safeUrl(links[p.key]); }).map(function (p) {
      return '<a class="btn btn-sm btn-platform ' + p.cls + '" href="' + esc(safeUrl(links[p.key])) +
        '" target="_blank" rel="noopener noreferrer">' + p.label + icon("external") +
        '<span class="sr-only"> (' + esc(release.title) + ", opens in a new tab)</span></a>";
    }).join("");
    return html ? '<div class="platform-links">' + html + "</div>" : "";
  }

  function cover(release) {
    var src = safeUrl(release.cover);
    if (src) {
      return '<img src="' + esc(src) + '" alt="' + esc(release.coverAlt || release.title + " cover art") +
        '" loading="lazy" decoding="async">';
    }
    return '<div class="placeholder-media">' + icon("disc") + "<span>Artwork coming soon</span></div>";
  }

  function renderFeaturedReleases() {
    var el = $("#featured-releases");
    if (!el) return;
    var featured = list("releases").filter(function (r) { return r.featured; }).slice(0, 3);
    if (!featured.length) { var s = el.closest("section"); if (s) s.hidden = true; return; }
    el.innerHTML = featured.map(function (r, i) {
      return '<article class="group release-feature reveal" style="--delay:' + (i * 0.15) + 's">' +
        '<div class="media-frame aspect-square">' + cover(r) +
        '<div class="release-overlay">' + icon("disc") + "</div></div>" +
        '<span class="release-type">' + esc(r.type) + (r.comingSoon ? " \u00b7 Coming soon" : "") + "</span>" +
        '<h3 class="release-title">' + esc(r.title) + "</h3>" +
        platformLinks(r) + "</article>";
    }).join("");
    observe(el);
  }

  function renderMusic(filter) {
    var el = $("#music-grid");
    if (!el) return;
    var items = list("releases").filter(function (r) { return filter === "all" || r.type === filter; });
    if (!items.length) { el.innerHTML = '<p class="empty-state">No releases yet. Check back soon!</p>'; return; }
    el.innerHTML = '<div class="grid grid-sm-2 grid-lg-3">' + items.map(function (r, i) {
      var audio = safeUrl(r.audio) ?
        '<audio controls preload="none" src="' + esc(safeUrl(r.audio)) + '" aria-label="Play ' + esc(r.title) + '"></audio>' : "";
      return '<article class="group card card-hover reveal" style="--delay:' + (i * 0.1) + 's">' +
        '<div class="media-frame aspect-square">' + cover(r) + "</div>" +
        '<div class="card-body"><div class="card-meta"><span class="chip">' + esc(r.type) + "</span>" +
        (r.comingSoon ? '<span class="chip chip-soon">Coming soon</span>' : "") +
        (r.year ? '<span class="card-year">' + esc(r.year) + "</span>" : "") + "</div>" +
        '<h2 class="release-title">' + esc(r.title) + "</h2>" +
        (r.description ? '<p class="card-desc">' + esc(r.description) + "</p>" : "") +
        platformLinks(r) + audio + "</div></article>";
    }).join("") + "</div>";
    observe(el);
  }

  /* ---------- Videos ---------- */
  function youtubeId(url) {
    var m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  }
  function videoMedia(v) {
    var file = safeUrl(v.file);
    var thumb = safeUrl(v.thumbnail);
    if (file) {
      return '<video src="' + esc(file) + '"' + (thumb ? ' poster="' + esc(thumb) + '"' : "") +
        ' controls preload="metadata" aria-label="' + esc(v.title) + '"></video>';
    }
    var yt = safeUrl(v.youtube);
    var id = youtubeId(yt);
    if (yt) {
      var img = thumb || (id ? "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg" : "");
      return '<a class="video-link" href="' + esc(yt) + '" target="_blank" rel="noopener noreferrer">' +
        (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" data-ytid="' + esc(id) + '">' : "") +
        '<span class="video-shade"><span class="play-disc">' + icon("play") + "</span></span>" +
        '<span class="video-badge">' + icon("external") + " Watch on YouTube</span>" +
        '<span class="sr-only">Watch ' + esc(v.title) + " on YouTube (opens in a new tab)</span></a>";
    }
    return '<div class="placeholder-media">' + icon("video") + "</div>";
  }
  function videoCard(v, i, headingTag) {
    return '<article class="group reveal" style="--delay:' + (i * 0.1) + 's">' +
      '<div class="media-frame aspect-video video-frame">' + videoMedia(v) + "</div>" +
      '<div class="video-info">' +
      (v.category ? '<span class="video-cat">' + esc(String(v.category).replace(/_/g, " ")) + "</span>" : "") +
      "<" + headingTag + ' class="video-title">' + esc(v.title) + "</" + headingTag + ">" +
      (v.description ? '<p class="card-desc">' + esc(v.description) + "</p>" : "") +
      "</div></article>";
  }
  function fixThumbs(root) {
    /* Not every YouTube video has a max-resolution thumbnail; fall back quietly. */
    $all("img[data-ytid]", root).forEach(function (img) {
      img.addEventListener("error", function () {
        var id = img.getAttribute("data-ytid");
        if (id && img.src.indexOf("hqdefault") === -1) img.src = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
        else img.style.visibility = "hidden"; /* no thumbnail at all: show the plain frame + play button */
      });
    });
  }
  function renderVideos(filter) {
    var el = $("#video-grid");
    if (!el) return;
    var items = list("videos").filter(function (v) { return filter === "all" || v.category === filter; });
    if (!items.length) { el.innerHTML = '<p class="empty-state">No videos yet. Stay tuned!</p>'; return; }
    el.innerHTML = '<div class="grid grid-md-2">' + items.map(function (v, i) { return videoCard(v, i, "h2"); }).join("") + "</div>";
    fixThumbs(el); observe(el);
  }
  function renderFeaturedVideos() {
    var el = $("#featured-videos");
    if (!el) return;
    var items = list("videos").filter(function (v) { return v.featured; }).slice(0, 2);
    var section = el.closest("section");
    if (!items.length) { if (section) section.hidden = true; return; }
    if (section) section.hidden = false;
    el.innerHTML = items.map(function (v, i) { return videoCard(v, i, "h3"); }).join("");
    fixThumbs(el); observe(el);
  }

  /* ---------- Gallery + lightbox ---------- */
  var galleryItems = [];
  var lb = $("#lightbox");
  var lbIndex = 0;
  var lbReturn = null;

  function renderGallery(filter) {
    var el = $("#gallery-grid");
    if (!el) return;
    galleryItems = list("gallery").filter(function (g) { return filter === "all" || g.category === filter; });
    if (!galleryItems.length) { el.innerHTML = '<p class="empty-state">No images yet.</p>'; return; }
    el.innerHTML = '<ul class="masonry">' + galleryItems.map(function (g, i) {
      return '<li class="masonry-item reveal" style="--delay:' + (Math.min(i, 12) * 0.05) + 's">' +
        '<button type="button" class="gallery-btn" data-index="' + i + '" aria-label="View larger: ' + esc(g.alt || g.caption || "Gallery image") + '">' +
        '<img src="' + esc(safeUrl(g.image)) + '" alt="' + esc(g.alt || "") + '" loading="lazy" decoding="async">' +
        (g.caption ? '<span class="gallery-caption">' + esc(g.caption) + "</span>" : "") +
        "</button></li>";
    }).join("") + "</ul>";
    $all(".gallery-btn", el).forEach(function (btn) {
      btn.addEventListener("click", function () { openLightbox(+btn.getAttribute("data-index"), btn); });
    });
    observe(el);
  }

  function showSlide(i) {
    if (!galleryItems.length) return;
    lbIndex = (i + galleryItems.length) % galleryItems.length;
    var g = galleryItems[lbIndex];
    var img = $("img", lb);
    img.src = safeUrl(g.image);
    img.alt = g.alt || g.caption || "Gallery image";
    $("figcaption", lb).textContent = g.caption || "";
    $(".lightbox-count", lb).textContent = (lbIndex + 1) + " / " + galleryItems.length;
    var multi = galleryItems.length > 1;
    $(".lightbox-prev", lb).hidden = !multi;
    $(".lightbox-next", lb).hidden = !multi;
  }
  function openLightbox(i, from) {
    if (!lb) return;
    lbReturn = from || null;
    showSlide(i);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    $(".lightbox-close", lb).focus();
  }
  function closeLightbox() {
    if (!lb || !lb.classList.contains("is-open")) return;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lbReturn) lbReturn.focus();
  }
  if (lb) {
    $(".lightbox-close", lb).addEventListener("click", closeLightbox);
    $(".lightbox-prev", lb).addEventListener("click", function (e) { e.stopPropagation(); showSlide(lbIndex - 1); });
    $(".lightbox-next", lb).addEventListener("click", function (e) { e.stopPropagation(); showSlide(lbIndex + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showSlide(lbIndex - 1);
      else if (e.key === "ArrowRight") showSlide(lbIndex + 1);
      else if (e.key === "Tab") {
        /* keep keyboard focus inside the viewer */
        var focusables = $all("button:not([hidden])", lb);
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    /* swipe on phones */
    var startX = null;
    lb.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) showSlide(lbIndex + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  /* ---------- Partners ---------- */
  var TIER_ORDER = { platinum: 0, gold: 1, silver: 2, partner: 3 };
  function renderPartners() {
    var el = $("#partner-list");
    if (!el) return;
    var items = list("partners");
    if (!items.length) { el.innerHTML = '<p class="empty-state">Partner announcements coming soon.</p>'; return; }
    var groups = {};
    items.forEach(function (p) { var t = TIER_ORDER.hasOwnProperty(p.tier) ? p.tier : "partner"; (groups[t] = groups[t] || []).push(p); });
    el.innerHTML = Object.keys(groups).sort(function (a, b) { return TIER_ORDER[a] - TIER_ORDER[b]; }).map(function (tier) {
      var title = tier === "partner" ? "Partners" : tier.charAt(0).toUpperCase() + tier.slice(1) + " Tier";
      return '<section class="tier" aria-label="' + title + '"><h2 class="tier-title">' + title + "</h2>" +
        '<div class="tier-grid ' + tier + '">' + groups[tier].map(function (p, i) {
          var url = safeUrl(p.website);
          var tag = url ? "a" : "div";
          var attrs = url ? ' href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"' : "";
          var logo = safeUrl(p.logo) ?
            '<div class="partner-logo"><img src="' + esc(safeUrl(p.logo)) + '" alt="' + esc(p.name) + ' logo" loading="lazy"></div>' :
            '<div class="partner-initial" aria-hidden="true">' + esc(String(p.name || "?").charAt(0)) + "</div>";
          return "<" + tag + ' class="partner-card ' + tier + ' reveal" style="--delay:' + (i * 0.1) + 's"' + attrs + ">" + logo +
            "<h3>" + esc(p.name) + "</h3>" + (p.description ? "<p>" + esc(p.description) + "</p>" : "") +
            (url ? icon("external") + '<span class="sr-only"> (opens in a new tab)</span>' : "") + "</" + tag + ">";
        }).join("") + "</div></section>";
    }).join("");
    observe(el);
  }

  /* ---------- Community posts ---------- */
  function renderPosts() {
    var el = $("#post-list");
    if (!el) return;
    var posts = list("communityPosts").slice().sort(function (a, b) { return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0); });
    if (!posts.length) { el.innerHTML = '<p class="empty-state">Be the first to post!</p>'; return; }
    el.innerHTML = posts.map(function (p, i) {
      var name = p.author || "Anonymous";
      var date = p.date ? new Date(p.date + "T12:00:00") : null;
      return '<article class="panel reveal" style="--delay:' + (i * 0.05) + 's">' +
        '<div class="post-head"><div class="post-author"><div class="avatar" aria-hidden="true">' + esc(name.charAt(0).toUpperCase()) + "</div>" +
        '<div><p class="post-name">' + esc(name) + "</p>" +
        (date && !isNaN(date) ? '<p class="post-date"><time datetime="' + esc(p.date) + '">' + date.toLocaleDateString() + "</time></p>" : "") +
        "</div></div>" + (p.pinned ? '<span class="post-pin" title="Pinned">' + icon("pin") + '<span class="sr-only">Pinned post</span></span>' : "") + "</div>" +
        '<p class="post-body">' + esc(p.content) + "</p>" +
        (safeUrl(p.image) ? '<img class="post-img" src="' + esc(safeUrl(p.image)) + '" alt="' + esc(p.imageAlt || "") + '" loading="lazy">' : "") +
        "</article>";
    }).join("");
    observe(el);
  }

  /* ---------- Forms: shared helpers ---------- */
  function endpointOf(form) {
    var a = (form.getAttribute("action") || "").trim();
    return a && a !== "#" ? a : "";
  }
  function setNotice(el, kind, html) {
    if (!el) return;
    el.className = "notice" + (kind ? " notice-" + kind : "");
    el.innerHTML = html || "";
  }
  function instagramLink() {
    var ig = DATA.site && safeUrl(DATA.site.instagram);
    return ig ? ' For now, connect with June on <a href="' + esc(ig) + '" target="_blank" rel="noopener noreferrer">Instagram</a>.' : "";
  }
  function sendForm(form) {
    return fetch(endpointOf(form), {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (res) { if (!res.ok) throw new Error("Request failed"); return res; });
  }

  /* ---------- Community composer ---------- */
  var composer = $("#community-form");
  if (composer) {
    var text = $("#post-content", composer);
    var postBtn = $("button[type=submit]", composer);
    var fileInput = $("#post-image", composer);
    var preview = $("#attach-preview");
    var cNotice = $("#community-notice");
    var sync = function () { postBtn.disabled = !text.value.trim(); };
    text.addEventListener("input", sync); sync();

    fileInput.addEventListener("change", function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) { preview.hidden = true; return; }
      $("img", preview).src = URL.createObjectURL(f);
      preview.hidden = false;
    });
    $(".attach-remove", preview).addEventListener("click", function () {
      fileInput.value = ""; preview.hidden = true; fileInput.focus();
    });

    composer.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!text.value.trim()) return;
      if (!endpointOf(composer)) {
        setNotice(cNotice, "info", "Posting isn't connected yet, so your message wasn't sent." + instagramLink());
        return;
      }
      postBtn.disabled = true;
      sendForm(composer).then(function () {
        composer.reset(); preview.hidden = true; sync();
        setNotice(cNotice, "info", "Thanks! Your post was sent to June's team and will appear here once it's approved.");
      }).catch(function () {
        sync();
        setNotice(cNotice, "error", "Something went wrong and your post wasn't sent. Please try again.");
      });
    });
  }

  /* ---------- Music submission form ---------- */
  var subForm = $("#submission-form");
  if (subForm) {
    var sNotice = $("#submission-notice");
    var dz = $(".dropzone", subForm);
    var audioInput = $("#audio-file", subForm);
    var dzText = $(".dropzone-text", subForm);
    audioInput.addEventListener("change", function () {
      var f = audioInput.files && audioInput.files[0];
      dz.classList.toggle("has-file", !!f);
      dzText.textContent = f ? "Selected: " + f.name : "Click to upload audio";
    });

    var rules = {
      "artist-name": function (v) { return v ? "" : "Enter your artist name."; },
      "song-title": function (v) { return v ? "" : "Enter the song title."; },
      "sub-email": function (v) { return !v || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email, like name@example.com."; },
      "track-link": function (v) { return !v || /^https?:\/\/\S+\.\S+/.test(v) ? "" : "Enter a full link starting with https://"; }
    };
    function check(id) {
      var input = document.getElementById(id);
      var msg = rules[id](input.value.trim());
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      document.getElementById(id + "-error").textContent = msg;
      return msg;
    }
    Object.keys(rules).forEach(function (id) {
      var input = document.getElementById(id);
      input.addEventListener("blur", function () { if (input.value.trim() || input.getAttribute("aria-invalid") === "true") check(id); });
      input.addEventListener("input", function () { if (input.getAttribute("aria-invalid") === "true") check(id); });
    });

    subForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var first = null;
      Object.keys(rules).forEach(function (id) { if (check(id) && !first) first = id; });
      if (first) {
        setNotice(sNotice, "error", "Not submitted yet. Fix the highlighted fields and try again.");
        document.getElementById(first).focus();
        return;
      }
      if (!endpointOf(subForm)) {
        setNotice(sNotice, "info", "Not submitted. This form isn't connected to a delivery service yet, so nothing was sent." + instagramLink());
        return;
      }
      var btn = $("button[type=submit]", subForm);
      btn.disabled = true;
      setNotice(sNotice, "", "");
      sendForm(subForm).then(function () {
        subForm.hidden = true;
        $("#submission-success").hidden = false;
        $("#submission-success .btn").focus();
      }).catch(function () {
        setNotice(sNotice, "error", "Something went wrong and your music wasn't sent. Please try again in a moment.");
      }).then(function () { btn.disabled = false; });
    });

    var again = $("#submission-success .btn");
    if (again) again.addEventListener("click", function () {
      subForm.reset(); dz.classList.remove("has-file"); dzText.textContent = "Click to upload audio";
      $("#submission-success").hidden = true; subForm.hidden = false; $("#artist-name").focus();
    });
  }

  /* ---------- Xreative Xloud subscribe ---------- */
  $all("[data-subscribe]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var url = DATA.site && safeUrl(DATA.site.subscribeUrl);
      if (url) { window.location.href = url; return; }
      setNotice($("#subscribe-notice"), "info", "Subscriptions aren't open yet. Payment is coming soon, so check back shortly.");
    });
  });

  /* ---------- Press materials ---------- */
  var pressRoot = $("#press-app");
  if (pressRoot && DATA.press) {
    var press = JSON.parse(JSON.stringify(DATA.press));
    var current = "bio";
    var editing = false;
    var tabs = $all(".press-tab", pressRoot);
    var head = $("#press-head-text");
    var body = $("#press-body");
    var actions = $("#press-actions");

    function drawPress() {
      var s = press[current];
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-section") === current;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
      });
      if (editing) {
        head.innerHTML = '<label class="sr-only" for="edit-title">Title</label><input class="input" id="edit-title" value="' + esc(s.title) + '">' +
          '<label class="sr-only" for="edit-tagline">Tagline</label><input class="input" id="edit-tagline" value="' + esc(s.tagline) + '">';
        body.innerHTML = '<div class="press-edit"><label class="sr-only" for="edit-content">Content</label><textarea class="textarea" id="edit-content">' + esc(s.content) + "</textarea></div>";
        actions.innerHTML = '<button type="button" class="btn btn-sm btn-primary btn-display btn-xs" data-act="save">' + icon("check") + " Apply</button>" +
          '<button type="button" class="btn btn-sm btn-outline btn-display btn-xs" data-act="cancel">Cancel</button>';
        head.parentNode.classList.add("press-edit");
        $("#edit-content").focus();
      } else {
        head.innerHTML = "<h2>" + esc(s.title) + "</h2><p>" + esc(s.tagline) + "</p>";
        body.innerHTML = "<pre>" + esc(s.content) + "</pre>";
        actions.innerHTML = '<button type="button" class="btn btn-sm btn-outline btn-display btn-xs" data-act="edit">' + icon("pencil") + " Edit</button>" +
          '<button type="button" class="btn btn-sm btn-primary btn-display btn-xs" data-act="download">' + icon("download") + " Download</button>";
        head.parentNode.classList.remove("press-edit");
      }
      $("#press-panel").setAttribute("aria-labelledby", "press-tab-" + current);
    }

    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { current = t.getAttribute("data-section"); editing = false; drawPress(); });
      t.addEventListener("keydown", function (e) {
        var dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!dir) return;
        var next = tabs[(i + dir + tabs.length) % tabs.length];
        next.click(); next.focus();
      });
    });

    actions.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      var act = b.getAttribute("data-act");
      if (act === "edit") { editing = true; drawPress(); }
      else if (act === "cancel") { editing = false; drawPress(); }
      else if (act === "save") {
        press[current] = {
          label: press[current].label,
          title: $("#edit-title").value,
          tagline: $("#edit-tagline").value,
          content: $("#edit-content").value
        };
        editing = false; drawPress();
      } else if (act === "download") {
        var s = press[current];
        var txt = (s.title || "") + "\n" + (s.tagline || "") + "\n\n" + new Array(51).join("\u2550") + "\n\n" + (s.content || "");
        var blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "June_Arness_" + current + "_" + new Date().toISOString().slice(0, 10) + ".txt";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }
    });
    drawPress();
  }

  /* ---------- Social links (footer + Videos page) ---------- */
  function renderSocial() {
    var site = DATA.site || {};
    var social = [
      { url: safeUrl(site.instagram), label: "Instagram", icon: "instagram" },
      { url: safeUrl(site.youtubeChannel), label: "YouTube", icon: "play" },
      { url: safeUrl(site.youtubeMusic), label: "YouTube Music", icon: "music" }
    ].filter(function (s) { return s.url; });

    var connect = $("#connect-links");
    if (connect) {
      connect.insertAdjacentHTML("beforeend", social.map(function (s) {
        return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + s.label +
          '<span class="sr-only"> (opens in a new tab)</span></a></li>';
      }).join(""));
    }

    var channels = $("#channel-links");
    if (channels) {
      var yt = social.filter(function (s) { return s.icon !== "instagram"; });
      if (!yt.length) { channels.hidden = true; return; }
      channels.innerHTML = '<p class="channel-note">More on YouTube</p><div class="hero-actions">' + yt.map(function (s, i) {
        return '<a class="btn btn-lg ' + (i === 0 ? "btn-primary" : "btn-outline") + ' btn-display" href="' + esc(s.url) +
          '" target="_blank" rel="noopener noreferrer">' + icon(s.icon) + " " + (i === 0 ? "YouTube Channel" : s.label) +
          '<span class="sr-only"> (opens in a new tab)</span></a>';
      }).join("") + "</div>";
    }
  }

  /* ---------- Page setup ---------- */
  renderSocial();
  renderFeaturedReleases();
  renderFeaturedVideos();
  renderMusic("all");
  renderVideos("all");
  renderGallery("all");
  renderPartners();
  renderPosts();
  setupTabs($("#music-tabs"), renderMusic);
  setupTabs($("#video-tabs"), renderVideos);
  setupTabs($("#gallery-tabs"), renderGallery);
  observe(document);
})();
