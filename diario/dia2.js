
window.alert('Já com o que estudamos no dia 1, podemos fazer um exercício, com somente o que aprendemos até então.')
window.confirm('Você está preparado?')
// caso você esteja se perguntando, sim, usamos botões e caixas de resposta no HTML
// para nos ajudar a fazer com este problema, pois o foco agora é lhe ensinar o prático
// e não o bonito que veremos mais a frente.
function somar(){
    var primnum = window.document.querySelector('input#primnum')
    // queryselector outra forma de selecionarmos algo no HTML, 
    // com uma abordagem um pouco diferente, sendo chamado pela sua função.
    var segnum = window.document.getElementById('segnum')
    var res = window.document.getElementById('res')
    var primnum = Number(primnum.value)
    var segnum = Number(segnum.value)
    var r = primnum + segnum
    res.innerHTML = `A soma entre ${primnum} e ${segnum} fica igual a ${r}`
}