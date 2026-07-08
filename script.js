// Kevin Zelman — personal site interactions (progressive enhancement)
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact details assembled at runtime — kept out of the static HTML so
  // address-harvesting bots scraping the page source come up empty.
  function rev(s) { return s.split("").reverse().join(""); }
  var em = rev("79namlezk") + "@" + rev("moc.liamg");
  var emWork = rev("namlezniveK".toLowerCase()) + "@" + rev("ude.cfs");
  var phParts = rev("2952-742-809-1").split("-"); // ["1","908","247","2592"]
  var phDigits = phParts.join("");
  var phDisplay = "(" + phParts[1] + ") " + phParts[2] + "-" + phParts[3];

  document.querySelectorAll('[data-contact="email"]').forEach(function (a) {
    a.setAttribute("href", "mailto:" + em);
  });
  document.querySelectorAll('[data-contact="phone"]').forEach(function (a) {
    a.setAttribute("href", "tel:+" + phDigits);
  });
  document.querySelectorAll('[data-contact-out="email"]').forEach(function (el) {
    el.textContent = em;
  });
  document.querySelectorAll('[data-contact-out="phone"]').forEach(function (el) {
    el.textContent = phDisplay;
  });

  // vCard built client-side (no static .vcf file to scrape)
  var vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Zelman;Kevin;;;",
    "FN:Kevin Zelman",
    "TITLE:Network Manager, Information Technology",
    "ORG:St. Francis College",
    "EMAIL;TYPE=HOME,INTERNET:" + em,
    "EMAIL;TYPE=WORK,INTERNET:" + emWork,
    "TEL;TYPE=CELL,VOICE:+" + phDigits,
    "ADR;TYPE=WORK:;;;Brooklyn;NY;;United States",
    "URL;TYPE=LinkedIn:https://www.linkedin.com/in/kevin-zelman",
    "NOTE:IT & operations leader — strategy to execution: identity, security, cloud, telephony modernization; budget, vendors & team leadership.",
    "END:VCARD"
  ].join("\r\n");
  document.querySelectorAll("[data-vcard]").forEach(function (a) {
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      var blob = new Blob([vcf], { type: "text/vcard" });
      var url = URL.createObjectURL(blob);
      var tmp = document.createElement("a");
      tmp.href = url;
      tmp.download = "kevin-zelman.vcf";
      document.body.appendChild(tmp);
      tmp.click();
      tmp.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });
  });

  // Reveal-on-scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
