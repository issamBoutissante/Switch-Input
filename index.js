const slider = document.querySelector(".slider");
const state = document.querySelector(".state");
slider.addEventListener("click", (e) => {
  if (e.target.classList.contains("sliderOnline")) {
    e.target.classList.remove("sliderOnline");
    state.classList.remove("stateOnline");
    state.innerHTML = "Offline";
    return;
  }
  e.target.classList.add("sliderOnline");
  state.classList.add("stateOnline");
  state.innerHTML = "Online";
});
