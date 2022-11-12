// 1) SE CREA EL ARRAY VACIO Y LOS OBJETOS NUEVOS

class Trago {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
  }
}

const arrayTragos = [];

const trago1 = new Trago(1, 'margarita', 1100);

const trago2 = new Trago(2, 'vermú', 800);

const trago3 = new Trago(3, 'destornillador', 1200);

const trago4 = new Trago(4, 'bloody mary', 1100);

const unoDeCada = new Trago(5, 'uno de cada', 3100);

// 2) SE DEFINE EL METODO PUSH

arrayTragos.push(trago1, trago2, trago3, trago4, unoDeCada);

const ordenarMenorMayor = () => {
  arrayTragos.sort((a, b) => a.precio - b.precio);
  mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
  arrayTragos.sort((a, b) => b.precio - a.precio);
  mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
  let array = [];
  arrayTragos.forEach((trago) => array.push(trago.nombre + '$' + trago.precio));
  alert('Trago y precio:' + '\n' + array.join('\n'));
};

ordenarMayorMenor();

function comprarTragos() {
  let tragoNombre = '';
  let tragoCantidad = 0;
  let totalCompra = 0;
  let seguirComprando = false;

  do {
    tragoNombre = prompt(
      'Tenemos cuatro tragos en la carta: margarita, vermú, destornillador, bloody mary. Agrega el nombre de cual querés, puedes pedir uno de cada agregando "uno de cada"',
      'Ej: margarita'
    );

    tragoCantidad = Number(prompt('¿Cuantos queres comprar?'));

    const tragoSeleccionado = arrayTragos.find(
      (trago) => trago.nombre === tragoNombre
    );
    totalCompra += tragoSeleccionado.precio * tragoCantidad;
    seguirComprando = confirm('¿Queres agregar otro trago?');
  } while (seguirComprando);

  return totalCompra;
}

function validarCantidad(cantidad) {
  while (Number.isNaN(cantidad) || cantidad === 0) {
    if (cantidad !== 0) {
      alert('Debe agregar un número.');
    } else {
      alert('Debe ingresar un número distinto de cero.');
    }
    cantidad = parseInt(prompt('¿Cuantos queres comprar?'));
  }

  return cantidad;
}

function calcularCompra(totalCompra) {
  let conPropina = confirm('¿Queres agregar la propina?');
  console.log(totalCompra * 1.1);
  if (conPropina) {
    const totalConPropina = Math.round(totalCompra * 1.1);
    alert(
      'Gracias por la propina. El total de la compra es: ' + totalConPropina
    );
  } else {
    alert('El total de la compra es: ' + totalCompra);
  }
}

calcularCompra(comprarTragos());
