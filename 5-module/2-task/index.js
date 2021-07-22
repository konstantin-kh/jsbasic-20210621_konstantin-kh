function toggleText() {
  const btn = document.querySelector(".toggle-text-button");
  const txt = document.querySelector("#text");
  btn.addEventListener("click", () => {
    txt.hasAttribute("hidden") ? txt.hidden = false : txt.hidden = true;
  });
}
