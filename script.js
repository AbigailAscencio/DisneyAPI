let API_KEY = '252cd9524a7a320fd5369ee136842316'
async function obtenerEstrenos(){
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es&page=1`;
    try{
        let response = await axios.get(url);
        return response.data
    }
    catch(e){
       return[]
    }
}
async function obtenerGeneros(){
    let url = `
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`;
    try{
        let response = await axios.get(url);
        return response.data
    }
    catch(e){
       return[]
    }
}
async function obtenerPeliculas(){
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es&sort_by=popularity.desc`;
    try{
        let response = await axios.get(url);
        return response.data
    }
    catch(e){
       return[]
    }
}
async function obtenerActores(){
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es&sort_by=popularity.desc`;
    try{
        let response = await axios.get(url);
        return response.data
    }
    catch(e){
       return[]
    }
}


// obtenerEstrenos().then((movies) => 
//     console.log(movies)
//   )

// for(let i =1; i<=15;i++){

//     const $pelicula = document.createElement('label');
//     $pelicula.classList.add('pelicula');
//     $label.appendChild($pelicula)
// }
// $pelicula.innerHTML=`<label>${i}</label>`

let resultado = [];
let resultado1;
    obtenerEstrenos().then((movies) => {
        resultado = movies.results[0].title
        document.getElementById(0).innerHTML = resultado;
        console.log(resultado) 
    })
    obtenerEstrenos().then((movies) => {resultado1 = "https://image.tmdb.org/t/p/original" + movies.results[0].poster_path
        console.log(resultado1) 
        document.getElementById('peli0').src= `${resultado1}`;
    })    
    obtenerEstrenos().then((movies) => {
        resultado = movies.results[1].title
        document.getElementById(1).innerHTML = resultado; 
    })
    obtenerEstrenos().then((movies) => {resultado1 = "https://image.tmdb.org/t/p/original" + movies.results[1].poster_path 
        document.getElementById('peli1').src= `${resultado1}`;
    })  
    obtenerEstrenos().then((movies) => {
        resultado = movies.results[2].title
        document.getElementById(2).innerHTML = resultado;
    })
    obtenerEstrenos().then((movies) => {resultado1 = "https://image.tmdb.org/t/p/original" + movies.results[2].poster_path 
        document.getElementById('peli2').src= `${resultado1}`;
    })  
    obtenerEstrenos().then((movies) => {
        resultado = movies.results[3].title
        document.getElementById(3).innerHTML = resultado; 
    })
    obtenerEstrenos().then((movies) => {resultado1 = "https://image.tmdb.org/t/p/original" + movies.results[3].poster_path 
        document.getElementById('peli3').src= `${resultado1}`;
    }) 
    obtenerEstrenos().then((movies) => {
        resultado = movies.results[4].title
        document.getElementById(4).innerHTML = resultado;
    })
    obtenerEstrenos().then((movies) => {resultado1 = "https://image.tmdb.org/t/p/original" + movies.results[4].poster_path
        document.getElementById('peli4').src= `${resultado1}`;
    })      

//Generos
let genero;
obtenerGeneros().then((movies) => {
    genero = movies.genres[0].name
    document.getElementById('g0').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[1].name
    document.getElementById('g1').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[2].name
    document.getElementById('g2').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[3].name
    document.getElementById('g3').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[4].name
    document.getElementById('g4').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[5].name
    document.getElementById('g5').innerHTML = genero;
    console.log(genero) 
})
obtenerGeneros().then((movies) => {
    genero = movies.genres[6].name
    document.getElementById('g6').innerHTML = genero;
    console.log(genero) 
})
// Personajes
let id;
obtenerEstrenos().then((movies) => {
    id = movies.results[0].id
    // document.getElementById(0).innerHTML = resultado;
    console.log(id) 
    
})
// async function obtenerActores(){
//     let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es`;
//     try{
//         let response = await axios.get(url);
//         return response.data
//     }
//     catch(e){
//        return[]
//     }
// }
// let personaje;
// obtenerActores().then((movies) => {
//     personaje = movies.cast.name
//     // document.getElementById(0).innerHTML = personaje;
//     console.log(personaje) 
// })

// let resultado ;
// if(document.getElementById){

   
//  obtenerEstrenos().then((movies) => {
//     for(let movie of movies){
//         // resultado=movie.results[1].title;
//         console.log(movie.results[1].title)
//     }
   
//     //document.getElementById(1).innerHTML += resultado;
//     // console.log(resultado) 
// })
   

// document.getElementById('buscar').onclick = function () {
//     texto = document.getElementById("texto");
//     console.log(texto);
//         if(texto == resultado){
//              alert("La pelicula"+texto+"se encuentra en el catalogo")
//         }
//         else{
//              alert("La pelicula"+texto+ "NO se encuentra en nuestro catalogo")
//         }
// }
   
// }
