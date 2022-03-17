const imagenes = document.querySelectorAll("img"); 
const link=document.querySelectorAll(".rutas-img");
const urlImagenes = [];
 
imagenes.forEach((_unused, index) => {
 const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
 urlImagenes.push(url);
});
 
urlImagenes.forEach((url, index) => {
    let nodolink=link[index]
    nodolink.setAttribute("href",url);
// Lo que te hace el set atribute es 
    nodolink.setAttribute("tarjet","_blank");
    // const nodoImagen = document.querySelector(`#imagen-${index + 1}`);

    nodolink.firstChild.setAttribute("src", url);
    console.log(url);

});