// estudo JS
let listaDeNumerosSorteados=[];
let numeroLimite=10;
let numeroSecreto = random();
let tentativas=1;

function exibirTextoNaTela(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML= texto;
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
};

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

function verificarChute(){
    let chute=document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas>1?'tentativas':'tentativa';
        let mensagemTentativas=`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}!`);
        }else
             exibirTextoNaTela('p',`O número secreto é maior que ${chute}!`);
    };
    tentativas++;
    limparCampo();
};

function random(){
    let numeroEscolhido=parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados=[];
    };
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return random();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};

function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
};

function reiniciarJogo(){
    numeroSecreto=random();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};