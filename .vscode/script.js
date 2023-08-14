function toggleMode() {
  var html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //pegar a tag img
  //var img = document.querySelector("#profile img")

  //substituir a imagem
  //if(html.classList.contains('light')) {

  //Image.setAttribute('src','./')
  //} else {
  //Image.setAttribute('src','./')
  //}
}
