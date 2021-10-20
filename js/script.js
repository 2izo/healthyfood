const header = document.querySelector(".heading");
const button = document.querySelector(".btn-mobile-nav");
button.addEventListener("click", function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
  console.log("ok");
});
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      header.classList.toggle("nav-open");
  });
});
