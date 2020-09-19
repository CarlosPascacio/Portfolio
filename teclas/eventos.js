//Inicio para dibujar bordes
var canvas = document.getElementById("areaDibujo");
var lienzo = canvas.getContext("2d");

function dibujarContorno(x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "#303030";
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.lineWidth = 5;
  lienzo.stroke();
  lienzo.closePath();
}
dibujarContorno(0,0,500,0);
dibujarContorno(500,0,500,500);
dibujarContorno(0,500,500,500);
dibujarContorno(0,0,0,500);
dibujarContorno(249,249,251,251);
//Fin para dibujar bordes

//-------------------------

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keyup", pulsarTecla);//evento que se detona al soltar una tecla pulsada

var papel = canvas.getContext("2d");
x = 250; //coordenada x
y = 250; //coordenada y

//dibujarLinea("#d50090", 50, 50, 450, 450, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.lineWidth = 2;
  lienzo.stroke();
  lienzo.closePath();
}

function pulsarTecla(evento)
{
  var color = "#d50040";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.LEFT:
      console.log("izquierda");
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.UP:
      console.log("arriba");
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.RIGHT:
      console.log("derecha");
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;

    case teclas.DOWN:
      console.log("abajo");
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;

    default:
      console.log("otra tecla");
  }
}
