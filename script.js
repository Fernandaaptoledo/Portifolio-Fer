function ativaPalavra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Palavra, i) => {
        setTimeout(() =>{
            elemento.innerHTML += palavra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitendo');
ativaPalavra(titulo);

