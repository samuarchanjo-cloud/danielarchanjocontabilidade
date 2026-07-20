// ============================================
// ARCHANJO CONSULTORIA — LANDING PAGE SCRIPT
// ============================================

(function () {
  "use strict";

  // ---------- CONFIG ----------
  var WHATSAPP_NUMBER = "5521983727520"; // +55 21 98372-7520

  var MSG_REGULARIZAR =
    "Olá, Daniel! Vim pelo site e gostaria de consultar a situação do meu CNPJ.";

  // Janela de opção/reenquadramento no Simples Nacional: historicamente ocorre
  // em janeiro. Mantido como config para não deixar a copy "amarrada" a um ano
  // fixo no HTML — atualizar apenas este objeto quando a regra do calendário mudar.
  var SIMPLES_REENQUADRAMENTO = {
    mesJanela: "janeiro",
    anoReferencia: new Date().getFullYear()
  };

  function buildWaLink(message) {
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  // ---------- APPLY WHATSAPP LINKS ----------
  document.addEventListener("DOMContentLoaded", function () {
    var regularizarLinks = document.querySelectorAll(".btn-whatsapp-regularizar");

    regularizarLinks.forEach(function (link) {
      link.setAttribute("href", buildWaLink(MSG_REGULARIZAR));
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });

    // ---------- FOOTER YEAR ----------
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------- URGENCY NOTE (data-driven fiscal window) ----------
    var urgencyEl = document.getElementById("urgencyNote");
    if (urgencyEl) {
      urgencyEl.textContent =
        "Se sua empresa foi excluída do Simples Nacional, o reenquadramento só pode ser solicitado em " +
        SIMPLES_REENQUADRAMENTO.mesJanela +
        " de " +
        SIMPLES_REENQUADRAMENTO.anoReferencia +
        " — resolver antes dessa janela evita perder o prazo.";
    }

    // ---------- FAQ ACCORDION ----------
    var faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      question.addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        faqItems.forEach(function (i) {
          i.classList.remove("is-open");
        });
        if (!wasOpen) item.classList.add("is-open");
      });
    });

    // ---------- LIGHTBOX (wired to the static testimonials grid) ----------
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxClose = document.getElementById("lightboxClose");
    var proofGrid = document.querySelector(".proof-grid");

    function openLightbox(fullSrc) {
      lightboxImg.setAttribute("src", fullSrc);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    // Event delegation on the grid: works for every .proof-card.
    if (proofGrid) {
      proofGrid.addEventListener("click", function (e) {
        var btn = e.target.closest(".proof-card");
        if (!btn) return;
        var fullSrc = btn.getAttribute("data-full");
        if (fullSrc) openLightbox(fullSrc);
      });
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      lightboxImg.setAttribute("src", "");
    }


    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });

    // ---------- SCROLL REVEAL (directional + staggered) ----------
    var revealEls = document.querySelectorAll("[data-reveal]");
    var prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var el = entry.target;
              var stagger = parseInt(el.getAttribute("data-stagger"), 10) || 0;
              var delay = stagger * 90; // ms between staggered siblings (e.g. FAQ items)
              window.setTimeout(function () {
                el.classList.add("is-visible");
              }, delay);
              revealObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    }

    // ---------- SUBTLE PARALLAX ON SCROLL ----------
    // Moves elements marked with data-parallax at a fraction of scroll speed.
    // Throttled via requestAnimationFrame for smooth, performant motion.
    var parallaxEls = Array.prototype.slice.call(
      document.querySelectorAll("[data-parallax]")
    );
    var parallaxBgEls = Array.prototype.slice.call(
      document.querySelectorAll("[data-parallax-bg]")
    );

    if ((parallaxEls.length || parallaxBgEls.length) && !prefersReducedMotion) {
      var ticking = false;

      function updateParallax() {
        var viewportH = window.innerHeight;

        parallaxEls.forEach(function (el) {
          var factor = parseFloat(el.getAttribute("data-parallax")) || 0.1;
          var rect = el.getBoundingClientRect();
          var centerOffset = rect.top + rect.height / 2 - viewportH / 2;
          var translate = centerOffset * -factor * 0.15;
          el.style.transform = "translate3d(0," + translate.toFixed(2) + "px,0)";
        });

        parallaxBgEls.forEach(function (el) {
          var factor = parseFloat(el.getAttribute("data-parallax-bg")) || 0.08;
          var rect = el.getBoundingClientRect();
          var centerOffset = rect.top + rect.height / 2 - viewportH / 2;
          var translate = centerOffset * factor * 0.3;
          el.style.setProperty("--parallax-y", translate.toFixed(2) + "px");
        });

        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      updateParallax();
    }

    // ---------- TILT MICROINTERACTION (cards marked with data-tilt) ----------
    var tiltEls = document.querySelectorAll("[data-tilt]");
    if (tiltEls.length && !prefersReducedMotion && window.matchMedia("(hover: hover)").matches) {
      tiltEls.forEach(function (el) {
        var maxTilt = 6; // degrees, kept subtle for a premium (not gimmicky) feel

        el.addEventListener("mousemove", function (e) {
          var rect = el.getBoundingClientRect();
          var x = (e.clientX - rect.left) / rect.width - 0.5;
          var y = (e.clientY - rect.top) / rect.height - 0.5;
          var rotateX = (-y * maxTilt).toFixed(2);
          var rotateY = (x * maxTilt).toFixed(2);
          el.style.transform =
            "translateY(-4px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        });

        el.addEventListener("mouseleave", function () {
          el.style.transform = "";
        });
      });
    }

    // ---------- ANIMATED COUNTERS ----------
    var counters = document.querySelectorAll("[data-count]");
    if (counters.length && !prefersReducedMotion && "IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach(function (el) {
        counterObserver.observe(el);
      });
    } else {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute("data-count");
      });
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 1400;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target).toLocaleString("pt-BR");
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString("pt-BR");
        }
      }
      requestAnimationFrame(step);
    }
  });
})();
