var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];

function saldo(){
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  
  for (let i = 0; i < cuentas.length; i++) {
    if(usuarioLogueado == cuentas[i].nombre){
      alert(usuarioLogueado + " cuentas con un saldo de " + "$" + cuentas[i].saldo)
    }
  }
}

function retirarEfectivo() {
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  let cantidadRetirar = parseInt(prompt('Ingresa la cantidad que desea retirar'))
  for (let i = 0; i < cuentas.length; i++) {
   if(usuarioLogueado == cuentas[i].nombre){
      alert( "Ahora cuentas con un saldo de "+ "$" + (cuentas[i].saldo - cantidadRetirar) );
    } 
}
}

function ingresarEfectivo() {
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  let cantidadIngresar = parseInt(prompt('Ingresa la cantidad que desea depositar'))
  for (let i = 0; i < cuentas.length; i++) {
    if(usuarioLogueado == cuentas[i].nombre){
      alert( "Ahora cuentas con un saldo de "+ "$" + (cuentas[i].saldo + cantidadIngresar) );
    }
  }
}
