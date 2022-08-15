function habilitafecharpedido(){

    const textofechar = document.querySelector('.textobotao');
    textofechar.innerHTML = "Fechar Pedido";
    const botfechar = document.querySelector('.botaofechar');
    botfechar.classList.remove('botaofechar');
    botfechar.classList.add('finalizar') ;
    
}