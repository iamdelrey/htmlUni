const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset1 = window.pageYOffset;
  parallax1.style.backgroundPositionY = offset1 * 0.7 + "px";

  let offset2 = window.pageYOffset;
  parallax2.style.backgroundPositionY = offset2 * 0.7 + "px";
});
