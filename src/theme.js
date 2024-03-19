document.documentElement.dataset.theme =
  localStorage.getItem("theme") || "dark";

console.log("theme applied");
