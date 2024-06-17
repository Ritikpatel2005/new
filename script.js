var btn = document.querySelector("button")
var winner = document.querySelector("h5")
var body = document.querySelector("body")

var team = ["RCB","CSK","MI","RR","SRH","KKR","GT",]
var color = ["red","yellow","blue","pink","orange","purple","darkblue"]

btn.addEventListener("click",function(){
  var random = Math.floor(Math.random()*team.length)

winner.innerHTML = team[random]
body.style.backgroundColor = color[random]
})