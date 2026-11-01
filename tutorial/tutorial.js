"use strict";

(function () {
  const copyButtons = document.querySelectorAll("[data-copy]");
  const searchInput = document.getElementById("guide-search");
  const searchCount = document.getElementById("search-count");
  const noResults = document.getElementById("no-results");
  const guideCards = Array.from(document.querySelectorAll(".guide-item"));
  const navLinks = Array.from(document.querySelectorAll(".top-nav a"));
  const sections = ["about", "basics", "fundamentals"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback for local files or browsers without Clipboard API access.
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    helper.style.pointerEvents = "none";
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand("copy");
    helper.remove();
    if (!copied) throw new Error("Copy is not available in this browser.");
  }

  copyButtons.forEach(button => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copy;
      const target = document.getElementById(targetId);
      if (!target) return;

      const originalLabel = button.textContent;
      try {
        await copyText(target.textContent);
        button.textContent = "Copied!";
        button.classList.add("copied");
      } catch (error) {
        button.textContent = "Copy failed";
        console.warn("MiniKode guide copy:", error);
      }

      window.setTimeout(() => {
        button.textContent = originalLabel;
        button.classList.remove("copied");
      }, 1600);
    });
  });

  function filterGuide() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visible = 0;

    guideCards.forEach(card => {
      const searchable = `${card.textContent} ${card.dataset.keywords || ""}`.toLowerCase();
      const matches = !query || searchable.includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });

    if (searchCount) {
      searchCount.textContent = query
        ? `${visible} of ${guideCards.length} topics`
        : "Showing all topics";
    }
    if (noResults) noResults.hidden = visible !== 0;
  }

  searchInput?.addEventListener("input", filterGuide);

  // Press / to jump to the command search, unless the user is typing elsewhere.
  document.addEventListener("keydown", event => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
    if (event.key === "/" && !isTyping && searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && target === searchInput) {
      searchInput.value = "";
      filterGuide();
      searchInput.blur();
    }
  });

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visibleEntries.length) return;
      const activeId = visibleEntries[0].target.id;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, {
      rootMargin: "-24% 0px -62% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75]
    });

    sections.forEach(section => observer.observe(section));
  }
})();
