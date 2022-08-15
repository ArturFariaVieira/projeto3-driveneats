function selecionabebida(classediv){
    const divSelecionada = document.querySelector('.caixabebida .selecionado');
    const iconeSelecionado = document.querySelector('.caixabebida .selecionado .Icone');
    console.log(divSelecionada);
    if ( divSelecionada !== null ) {
        divSelecionada.classList.remove('selecionado');
        iconeSelecionado.classList.add('escondido');
        
    }
    const divselecionada = document.querySelector(classediv);
    divselecionada.classList.add ('selecionado');
    const iconeescondido = document.querySelector('.caixabebida .selecionado .escondido');    
    iconeescondido.classList.remove ('escondido');
}