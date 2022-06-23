var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];


function saldo(){
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  
  for (let i = 0; i < cuentas.length; i++) {
    if(usuarioLogueado == cuentas[i].nombre){
      alert(usuarioLogueado + " cuentas con un saldo de $" + cuentas[i].saldo)
    }
  }
}

function retirarEfectivo() {
  const saldoLogueado = localStorage.getItem("saldoDelUsuario");
  let cantidadRetirar = parseInt(prompt('Ingresa la cantidad que desea retirar'))
  if(parseInt(saldoLogueado) - cantidadRetirar <= 10){
   alert('No puedes tener menos de $10')
  } else {
    let saldoRetirado = parseInt(saldoLogueado) - cantidadRetirar;
    localStorage.setItem('saldoDelUsuario', saldoRetirado);
   alert(saldoRetirado)
  }
  
}


function ingresarEfectivo() {
  const retiroLogueado = localStorage.getItem("saldoDelUsuario");
  let cantidadIngresar = parseInt(prompt('Ingresa la cantidad que desea depositar'))
  if(parseInt(retiroLogueado) + cantidadIngresar >= 990){
   alert('No puedes tener mas de $990')
} else {
  let saldoIngresado = parseInt(retiroLogueado) + cantidadIngresar;
  localStorage.setItem('saldoDelUsuario', saldoIngresado);
 alert(saldoIngresado);
}
}
