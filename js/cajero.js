function validar () {
  let password = document.getElementById('password');
  let valid= false;


  var cuentas = [
  { nombre: "Mali", saldo: "200"},
  { nombre: "Gera", saldo: "290"},
  { nombre: "Maui", saldo: "67" },
  ];

  var contraseñas = [
  { nombre: "Mali", contraseñas: "1234"},
  { nombre: "Gera", contraseñas: "5489",},
  { nombre: "Maui" ,contraseñas: "9856",},
  ];

  for( i = 0; i < cuentas.length; i++) {
    if(password == contraseñas[i]){
      valid = true;
    }
  }

}
 validar();
 console.log('Acceso')



