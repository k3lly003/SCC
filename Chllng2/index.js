let parentdiv = document.getElementsByClassName("parent")[0];
let childdiv = document.getElementsByClassName("child")[0];
let btn = document.getElementById("btn");
let close = document.getElementsByTagName("span")[0];
btn.addEventListener("click", () => {
  parentdiv.style.display = "block";
});
close.addEventListener("click", () => {
  parentdiv.style.display = "none";
});
