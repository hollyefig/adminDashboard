const doc = document.documentElement;
const theme = () => {
  doc.className = "default";
};

const themeSelect = document.querySelector("#theme").children;

const themeChange = (e) => {
  const i = e.options.selectedIndex;
  let change = themeSelect[i].className;
  doc.className = change;
};

const iconsWrapper = document.querySelectorAll(".iconsWrapper");
iconsWrapper.forEach((e) => {
  const fav = document.createElement("div");
  const watch = document.createElement("div");
  const share = document.createElement("div");
  fav.classList.add("material-symbols-outlined");
  watch.classList.add("material-symbols-outlined");
  share.classList.add("material-symbols-outlined");
  fav.textContent = "star";
  watch.textContent = "visibility";
  share.textContent = "share";

  e.appendChild(fav);
  e.appendChild(watch);
  e.appendChild(share);
});

theme();
