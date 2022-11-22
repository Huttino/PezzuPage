const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("show")) {
        entry.target.classList.add("show");
      } else if (
        !entry.isIntersecting &&
        entry.target.classList.contains("show")
      ) {
        entry.target.classList.remove("show");
      }
    });
  },
  { rootMargin: "0px", threshold: 0.9 }
);

const hiddenElemnts = document.querySelectorAll(".hidden");
hiddenElemnts.forEach((el) => observer.observe(el));
