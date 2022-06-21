var cuentas = [
    { nombre: "Mali", saldo: "200"},
    { nombre: "Gera", saldo: "290"},
    { nombre: "Maui", saldo: "67" },
  ];
  let suma;
  let resta;
  
 console.log(cuentas);
 console.log(cuentas[0].nombre)


  const input=document.getElementById("username")
  console.log(input.value)
  let form = document.getElementById("form")
  form.addEventListener ("submit" , function(event) 
  {
    event.preventDefault()
    console.log(input.value)
    comparacion(input.value);

  })

function comparacion(nombreDeValue){
for( var index=0; index<=cuentas.length-1; index++){
 if(cuentas[index].nombre==nombreDeValue)
{
  location = "contraseña.html";
}
}
return console.log("Esta cuenta no existe")
}


