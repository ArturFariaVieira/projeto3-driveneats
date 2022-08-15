function whatsapp(){

    let pratopedido = document.querySelector('.caixaprato .selecionado .nomepedido').innerHTML;
    let bebpedido = document.querySelector('.caixabebida .selecionado .nomepedido').innerHTML;
    let sobrepedido = document.querySelector('.caixasobremesa .selecionado .nomepedido').innerHTML;
    let preçoprato = document.querySelector('.caixaprato .selecionado .preçopedido').innerHTML;
    let preçobebida = document.querySelector('.caixabebida .selecionado .preçopedido').innerHTML;
    let preçosobre = document.querySelector('.caixasobremesa .selecionado .preçopedido').innerHTML;
    preçoprato = (Number(preçoprato.replace(/\D/g,"")).toFixed(2))/100;
    preçobebida = (Number(preçobebida.replace(/\D/g,"")).toFixed(2))/100;
    preçosobre = (Number(preçosobre.replace(/\D/g,"")).toFixed(2))/100;
    console.log(preçoprato);
    console.log(preçobebida);
    console.log(preçosobre);
    console.log(pratopedido);
    console.log(bebpedido);
    console.log(sobrepedido);
    totalpedido = preçosobre + preçobebida + preçoprato;
    totalpedido = totalpedido.toFixed(2);
    const nome = prompt ("Qual seu nome?");
    const endereço = prompt ("Qual seu endereço?")
    


   const verifica = document.querySelector('.finalizar');
    if (verifica !== null){
        let url = `Olá, gostaria de fazer o pedido:\n -Prato: ${pratopedido}\n -Bebida: ${bebpedido}\n -Sobremesa: ${sobrepedido}\n Total:R$ ${totalpedido}\n \n Nome: ${nome}\n Endereço: ${endereço}`;
        let encoded = encodeURIComponent(url);
        window.open('https://wa.me/5533998715431?text='+encoded);
    }

}