let color = [
  "w3-hover-green",
  "w3-hover-blue",
  "w3-hover-red",
]
let changeColor = () => {
  let random = Math.floor(Math.random() * color.length)
  const nodeList = document.querySelectorAll("tr");
  for(let i = 0; i<nodeList.length; i++ ) {
    nodeList[i].className = color[random]
  }
}