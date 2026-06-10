/* =========================================================
   Ash — Portfolio | Interactions (vanilla JS, no deps)
   ========================================================= */
(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header shadow ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
    };
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Animated stat counters ---- */
  var counters = document.querySelectorAll(".hero-stats dt[data-count]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var runCounter = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reduceMotion) { el.textContent = String(target); return; }
    var start = performance.now();
    var dur = 1400;
    var tick = function (now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length && "IntersectionObserver" in window) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cObs.observe(el); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---- Portfolio filtering ---- */
  var filters = document.querySelectorAll(".filter");
  var projects = document.querySelectorAll(".project");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (f) { f.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-filter");
      projects.forEach(function (p) {
        var show = cat === "all" || p.getAttribute("data-category") === cat;
        p.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---- Contact form (client-side validation + friendly feedback) ---- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      ["name", "email", "message"].forEach(function (id) {
        var input = document.getElementById(id);
        var field = input ? input.closest(".field") : null;
        if (!input) return;
        var ok = input.value.trim() !== "";
        if (id === "email") {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        }
        if (field) field.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });

      if (!valid) {
        if (status) {
          status.textContent = "Please fill in your name, a valid email, and a message.";
          status.className = "form-status error";
        }
        return;
      }

      var name = (document.getElementById("name") || {}).value || "there";
      if (status) {
        status.textContent = "Thanks " + name.trim().split(" ")[0] + "! Your enquiry is ready — I'll be in touch within one business day.";
        status.className = "form-status success";
      }
      form.reset();
    });

    /* Clear invalid state as the user types */
    form.querySelectorAll("input, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        var field = el.closest(".field");
        if (field) field.classList.remove("invalid");
      });
    });
  }
})();
