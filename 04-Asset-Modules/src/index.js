import HelloWorld from "./hello-word"
import imgsrc from './asset/resource/1.png'
import logosvg from './asset/resource/grooming-1801287.svg'
import exampleTxt from './asset/resource/example.txt'
import jpgMap from './asset/resource/Avatar.jpg'

HelloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = logosvg
img2.style.width = "200px"
document.body.appendChild(img2)

const txt = document.createElement('div')
txt.innerText = exampleTxt
document.body.appendChild(txt)

const img3 = document.createElement('img')
img3.src = jpgMap
img3.style.width = "200px"
document.body.appendChild(img3)