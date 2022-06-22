const input=document.getElementById("password")
let form = document.getElementById("form")
  form.addEventListener ("submit" , function(event){
    event.preventDefault()
    console.log(input.value)
    validacionContraseña(input.value);

  })

const validacionContraseña = () => {
  let pass = document.getElementById('password').value;
  if(pass == '1234'){
    location = 'principal.html';
  }else{
    alert('La contraseña ingresada no es correcta, intentelo de nuevo')
  }
} 

const validacionContraseña3 = () => {
    let pass = document.getElementById('password').value;
    if(pass == '9876'){
      location = 'principal.html';
    }else{
      alert('La contraseña ingresada no es correcta, intentelo de nuevo')
    }
  } 
