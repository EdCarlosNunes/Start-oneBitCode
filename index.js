var elemntoDuvida = document.querySelectorAll('.duvida')

elemntoDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})