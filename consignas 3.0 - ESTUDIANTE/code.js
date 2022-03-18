/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt(`Ingrese nombre `)
  let edad  = parseInt(prompt(`Ingrese año de nacimiento `))
  let ciudad=prompt(`Ingrese ciudad `)
  let interesJs=confirm(`¿Le interesa Javascript? `)
  datosPersona.nombre = nombre
  let anioact=new Date().getFullYear();
  datosPersona.edad = anioact - edad 
  datosPersona.ciudad = ciudad

  datosPersona.interesPorJs = (interesJs == true ? "Sí" : "No")
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombr=document.createTextNode(datosPersona.nombre)
  let eda=document.createTextNode(datosPersona.edad)
  let ciuda=document.createTextNode(datosPersona.ciudad)
  let jsIntere=document.createTextNode(datosPersona.interesPorJs)
  document.getElementById("nombre").appendChild(nombr);
  document.getElementById("edad").appendChild(eda)
  document.getElementById("ciudad").appendChild(ciuda)
  document.getElementById("javascript").appendChild(jsIntere)

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

