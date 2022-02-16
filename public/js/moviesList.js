window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector('figure');
    let cambiar = document.querySelector('.botonAgregar')


    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    logo.addEventListener('mouseover', function(event){
        event.preventDefault();
        body.style.backgroundColor = '#7f7f7f'
    })
    cambiar.addEventListener('mouseover', function(event){
        event.preventDefault();
        this.style.backgroundColor = 'teal'
    })
}