function mousecursor() {

  if (window.innerWidth < 1024) return;

  const router = useRouter();

  if (process.client) {
    let e, t;
    let n = 0;
    let i = false;

    function handleMouseMove(s) {
      e.style.visibility = 'visible';
      t.style.visibility = 'visible';
      if (!i) {
        t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      n = s.clientY;
    }

    function handleMouseEnter() {
      e.classList.add("cursor-hover");
      t.classList.add("cursor-hover");
    }

    function handleMouseLeave(el) {
      if (
        !(el.tagName.toLowerCase() === "a" && el.closest(".cursor-pointer"))
      ) {
        e.classList.remove("cursor-hover");
        t.classList.remove("cursor-hover");
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", () => handleMouseLeave(el));
    });

    e = document.querySelector(".cursor-inner");
    t = document.querySelector(".cursor-outer");
  }
}

export default mousecursor;