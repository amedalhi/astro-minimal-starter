export const toggleMobileNav = () => {
  const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
  const navButton = document.querySelector(".mobile-nav-toggle") as HTMLElement;

  console.log("loaded");
  if (navButton) {
    navButton.addEventListener("click", () => {
      const visibility = mobileNav?.getAttribute("data-visible");
      if (visibility === "false") {
        mobileNav?.setAttribute("data-visible", "true");
        navButton.setAttribute("aria-expanded", "true");
      } else {
        mobileNav?.setAttribute("data-visible", "false");
        navButton.setAttribute("aria-expanded", "false");
      }
    });
  }
};
