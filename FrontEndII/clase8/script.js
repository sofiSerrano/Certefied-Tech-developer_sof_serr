const noticias = [
 {
    titulo:"Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
    imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
    descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
    fecha:"07/06/21",
    tipoNacional: true
},
{
    titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
    imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
    descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
    fecha:"02/06/21",
    tipoNacional: false
},
{
    titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
    imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
    descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
    fecha:"01/06/21",
    tipoNacional: true}
]

const contenedor=document.querySelector('section')

function agregarNoticia(Noticia){
    const articulo= `
    <article>
        <h2>${Noticia.titulo}</h2>
        <img src="${Noticia.imgUrl}" alt="">
        <p class=desc">${Noticia.descripcion}</p>
        <P class="fecha">${Noticia.fecha}</P>
        <P class="">${Noticia.tipoNacional}</P>
    </article>
    `
    contenedor.innerHTML+=articulo
}

for(item of noticias){
    agregarNoticia(item);
}