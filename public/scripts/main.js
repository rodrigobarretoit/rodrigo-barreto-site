/*
 * Interactive behavior for the site.
 *
 * Runs after the HTML parses (script is loaded with `defer`).
 * Everything here is optional enhancement — the site works with JS off.
 *
 * What it does, in order:
 *   1. Theme toggle (dark <-> light) with localStorage persistence.
 *   2. Language link handler (remembers "en"/"es" pick in localStorage).
 *   3. Mobile hamburger open/close.
 *   4. Fade-in reveal for elements with class .reveal (IntersectionObserver).
 *   5. Proof-page filter pills — filters the visible cards by data-type.
 *
 * Each block is wrapped in try/catch so a single failure doesn't
 * break the rest of the page (defensive pattern, no cascading blank UI).
 */
(function () {
  "use strict";

  function safe(fn, name) {
    try { fn(); } catch (err) { console.warn("[main.js] " + name + " failed:", err); }
  }

  // ---------------------------------------------------------
  // 1. Theme toggle
  // ---------------------------------------------------------
  safe(function initThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var root = document.documentElement;

    function apply(theme) {
      root.setAttribute("data-theme", theme);
      try { localStorage.setItem("rb-theme", theme); } catch (e) {}
    }

    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "dark";
      apply(current === "dark" ? "light" : "dark");
    });
  }, "initThemeToggle");

  // ---------------------------------------------------------
  // 2. Language links — remember choice for next visit
  // ---------------------------------------------------------
  safe(function initLangLinks() {
    var links = document.querySelectorAll("[data-lang]");
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        var lang = a.getAttribute("data-lang");
        try { localStorage.setItem("rb-lang", lang); } catch (e) {}
      });
    });
  }, "initLangLinks");

  // ---------------------------------------------------------
  // 3. Mobile burger — open/close nav on small screens
  // ---------------------------------------------------------
  safe(function initBurger() {
    var burger = document.getElementById("nav-burger");
    var nav = document.getElementById("nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link inside it is clicked
    nav.querySelectorAll(".nav__link").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }, "initBurger");

  // ---------------------------------------------------------
  // 4. Fade-in on scroll
  // ---------------------------------------------------------
  safe(function initReveals() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      // Very old browser — just show everything.
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,           // very forgiving — reveals almost immediately
      rootMargin: "0px 0px -5% 0px",
    });

    reveals.forEach(function (el) { io.observe(el); });

    // Safety net: after 6 seconds, force-reveal anything still hidden
    // in view. Prevents any observer edge case from leaving text blank.
    setTimeout(function () {
      reveals.forEach(function (el) {
        if (!el.classList.contains("is-visible")) {
          var box = el.getBoundingClientRect();
          if (box.top < window.innerHeight) el.classList.add("is-visible");
        }
      });
    }, 6000);
  }, "initReveals");

  // ---------------------------------------------------------
  // 5. Mouse-reactive gradient in the hero
  //    Updates two CSS custom properties (--mx / --my) that the
  //    hero's ::before uses to position a warm radial-gradient halo.
  //    Values are lerped (smooth follow) via a single requestAnimationFrame
  //    loop, not applied straight from every mousemove (that would jitter).
  // ---------------------------------------------------------
  safe(function initMouseGradient() {
    // Touch devices don't have a hovering pointer — skip cleanly.
    if (matchMedia("(hover: none)").matches) return;

    var root = document.documentElement;
    var raf = null;
    var tx = 50, ty = 40;   // target position (%)
    var cx = 50, cy = 40;   // current position (lerped)

    window.addEventListener("mousemove", function (e) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    function tick() {
      // Ease toward target — 0.08 = smooth, unhurried follow
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      root.style.setProperty("--mx", cx.toFixed(2) + "%");
      root.style.setProperty("--my", cy.toFixed(2) + "%");
      // Keep animating while there's meaningful distance to cover;
      // stop the loop once we're within 0.1% to save CPU.
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }
  }, "initMouseGradient");

  // ---------------------------------------------------------
  // 6. Proof-page filter pills
  // ---------------------------------------------------------
  safe(function initProofFilters() {
    var buttons = document.querySelectorAll(".proof-filter");
    var grid = document.getElementById("proof-grid");
    if (!buttons.length || !grid) return;

    var cards = grid.querySelectorAll(".proof-card");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");

        cards.forEach(function (card) {
          var type = card.getAttribute("data-type");
          var show = target === "all" || type === target;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }, "initProofFilters");
})();
