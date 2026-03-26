
let conferences = []

function mostrar_datos (event) {
    alert('Crear conferencía?')
    
    let nombre_usuario = document.getElementById('usuario_nombre').value;
    let nombre_pass = document.getElementById('usuario_pass').value;
    let charla = document.getElementById('Charla').value;
      let cupo = document.getElementById('cupo').value;

    
    console.log('Usuario: ' + nombre_usuario + '\n'+ 'Número de Cuenta: ' + nombre_pass + '\n'+ 'Charla :' + nombre_pass  + charla + '\n'+ 'cupo:' + cupo);
   
    let datos = [
       nombre_usuario = nombre_usuario,
       nombre_pass = nombre_pass,
       charla = charla,
       cupo =cupo
    ]
   
    conferences.push(datos);
}

let nombre = document.querySelector('usuario_nombre')
let contraseña = document.querySelector('usuario_pass')

function resetear (event) {
    
     document.getElementById('form').reset();
 

}

function enlistar() {
  console.log('Tus conferencias')
  conferences.forEach((a, b) => {
    console.log(a, b);
  });
}
