alert('Vários rolezinho');
let numeroMaximo=100;
let numeroSecreto=parseInt(Math.random()*numeroMaximo+1);
let chute;
let tentativas=1;

//
while(chute!=numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(numeroSecreto==chute){
        break;
    }else{
        alert('Você errou :(');
        tentativas++;
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que ${chute}!`);
        }else
            alert(`O número secreto é maior que ${chute}!`);
            alert('Tente novamente...');
    };
};

let palavraTentativa=tentativas>1?'tentativas':'tentaiva';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!`);