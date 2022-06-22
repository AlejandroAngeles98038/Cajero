var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];

function saldo(){
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  console.log(usuarioLogueado);
  for (let i = 0; i < cuentas.length; i++) {
    if(usuarioLogueado == cuentas[i].nombre){
      console.log(cuentas[i].saldo)
    }
  }
}

