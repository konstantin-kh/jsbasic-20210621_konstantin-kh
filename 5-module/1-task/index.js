function hideSelf() {
  const btn = document.querySelector(".hide-self-button");
  btn.addEventListener("click", function() {
    this.hidden = true;
  },{once: true});
}
