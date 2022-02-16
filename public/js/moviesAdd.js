const SECRETO = "secreto"
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.querySelector('#titulo');
    let estadoSecreto = 0

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    input.addEventListener('keypress', (event)=>{
        if(event.key == SECRETO[estadoSecreto]){
            if(estadoSecreto === 6){
                alert('SECRETO MAGICO')
                return estadoSecreto = 0;
            }
            return estadoSecreto++
        }else{
            return estadoSecreto = 0
        }
    })
}
