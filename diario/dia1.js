
// Bem-vindo aos meus estudos de JavaScript
// sendo está a guia principal pela qual conheceremos esse universo do JS

window.alert('Olá Noob!') // cria uma mensagem na tela
window.confirm('Você é novo por aqui??') // coloca uma pergunta na tela de sim ou não 
var nome=window.prompt('Qual é o seu nome, caro(a) noob?') // coloca uma pergunta na tela
// var origina uma variável, sendo '=' recebe, e a palavra subsequente identifica a variavel, em nosso exemplo sendo a variavel 'nome', 
// o que designa nossa resposta a ser a variável.
// var não pode começar com números, não podem conter espaço e nem palavras reservadas
window.alert(`Seja muito bem-vindo(a) noob ${nome} a este incrível mundo de aprendizados!!`)
window.alert('Agora, muitas instâncias do seu nome:')
window.alert(`É muito bom ter-mos esse belíssimo nome de ${nome.length} incríveis letras conosco!!`)
var bel1 = nome.toUpperCase()
var bel2 = nome.toLowerCase()
window.alert(`Podendo ser bem forte ${bel1} ou mais stealth ${bel2}...`)
// Number() // converte uma string para Number
// parseFloat()// identifica números quebrados
// parseInt() // identifica números inteiros
// 'eu estou aprendendo s'     não faz interpolação  (usar com aspas)
// 'eu estou aprendendo' + s   usa concatenação      (usar com aspas)
// `eu estou aprendendo ${s}`   usa template string  (usar com crase)
// para converter em string pode se usar String(n) ou toString(n)
// + é para somar
// - é para subtrair
// * é para multiplicar
// / é para dividir
// % é para mostrar o resto da divisão inteira
// ** é para multiplicação potência
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
// == igual a
// != diferente de
// === idêntico a
// ! negação    - é o contrário true é false e false é true
// && conjunção - para ser true os dois tem que ser true
// || disjunção - para ser true um tem que ser true

var p1 = window.document.getElementsByClassName('p')[0] 
// p1 está selecionando um elemento com nome 'p' do nosso texto HTML

var ret = window.document.getElementById('retrato')
// ret está selecionando um elemento com um id já resgistrada do HTML

ret.addEventListener('click', clicarret)
// desta forma adicionamos um evento na nossa var, nesse caso sendo a 'ret'
// adicionando em específico o evento 'click' dando o nome da função de 'clicarret'
function clicarret(){
    // function é utilizado para dar uma função a uma variavel 
    ret.innerHTML= 'isso não vai mudar o id, mas o texto já mudou.'
    // innerHTML é usado para inserir pelo JS um texto no HTML
    ret.style.color = 'green'
    // podendo de mesma forma alterar o nosso texto CSS
}