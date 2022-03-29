const canvas = document.getElementById("game")
//ctx = context - Conque dimension o tipo de canvas vas a trabajar
const ctx = canvas.getContext("2d")

//console.log(canvas)

//REctangulo
ctx.fillStyle = "purple"

// fillRect(x, y, width, height)
ctx.fillRect(260,260,30,30)

ctx.fillStyle = "green"
ctx.fillRect(25,25,100,100)
ctx.clearRect(45,45,60,60) //se utiliza para borrar secciones
ctx.strokeRect(300,50,50,50)

//Borrar todo el canvas
//ctx.clearRect(0,0, 500, 500)

//ctx.fillStyle = "red"
//ctx.fillRect(25,25,100,100)

//Paths
ctx.beginPath()
    //Inicio de posicion
    ctx.moveTo(450,150)
    //Fin de posicion
    ctx.lineTo(450,50)
    //Ejecucion de pintado
    ctx.stroke()
ctx.closePath()
