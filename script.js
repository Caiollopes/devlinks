function toggleMode() {
  const lightMode = document.documentElement
  lightMode.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (lightMode.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
