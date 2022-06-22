   function comparacion () {
    let password = document.getElementById('password').value;
    let user = document.getElementById('username').value;
    let valid = -1;
  
  
    var cuentas = ["Mali","Gera","Maui",];
  
    var contraseñas = ["1234", "5678", "9845"];
  
    for( i = 0; i < cuentas.length; i++) {
      if ((user == cuentas[i]) && (password == contraseñas[i])){
       valid = i;
       
      }
    }
    if (valid != -1)  {
      location = 'principal.html';
    }
    else{
      alert('Usuario o Contraseña erronea')
    }
  }
  const input=document.getElementById("username")
  console.log(input.value)
  let form = document.getElementById("form")
  form.addEventListener ("submit" , function(event) 
  {
    event.preventDefault()
    console.log(input.value)
    comparacion(input.value);

  })



 

