function selecionabebida(classediv){
    const divSelecionada = document.querySelector('.caixabebida .selecionado');
    const iconeSelecionado = document.querySelector('.caixabebida .selecionado .Icone');
    
    if ( divSelecionada !== null ) {
        divSelecionada.classList.remove('selecionado');
        iconeSelecionado.classList.add('escondido');
        
    }
    const divselecionada = document.querySelector(classediv);
    divselecionada.classList.add ('selecionado');
    const iconeescondido = document.querySelector('.caixabebida .selecionado .escondido');    
    iconeescondido.classList.remove ('escondido');

    const pratosel = document.querySelector('.caixaprato .selecionado');
    const bebsel = document.querySelector('.caixabebida .selecionado')
    const sobresel = document.querySelector('.caixasobremesa .selecionado');

    if(pratosel !== null && bebsel !== null && sobresel !== null ){
        habilitafecharpedido();
    }
}