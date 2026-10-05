/** Apply public profile settings without inserting untrusted HTML. */
(() => {
  const profile = window.PORTFOLIO_PROFILE;
  if (!profile) return;

  document.documentElement.classList.add("js-enabled");
  if (profile.title) document.title = profile.title;
  const description = document.querySelector('meta[name="description"]');
  if (description && profile.description) description.content = profile.description;

  document.querySelectorAll("[data-profile]").forEach((element) => {
    const value = profile[element.dataset.profile];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-profile-link]").forEach((element) => {
    const key = element.dataset.profileLink;
    const value = profile[key];
    if (typeof value !== "string") return;
    if (key === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      element.href = `mailto:${value}`;
    } else if (key !== "email") {
      try {
        const url = new URL(value);
        if (url.protocol === "https:") element.href = url.href;
      } catch {
        // Keep the static fallback link when a configuration URL is invalid.
      }
    }
  });

  document.querySelectorAll("[data-profile-image]").forEach((element) => {
    const value = profile[element.dataset.profileImage];
    if (typeof value === "string" && !value.includes(":") && !value.startsWith("/")) {
      element.src = value;
    }
    element.alt = profile.name || element.alt;
  });
})();
