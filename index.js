const idadeMinima = 18
let dataDoEvento = 14/12
let listaDeParticipantes = ["Fulano", "Ciclano", "Beltrano"]
let listaDePalestrantes = ["Matheus", "Jorel"]

console.log("Os palestrantes são:",listaDePalestrantes)

console.log("Os participantes são:",listaDeParticipantes)

if (idadeMinima => 18) {
    console.log("Você possui a idade mínima para participar do evento")
}else{
    console.log("Você não possui idade mínima para participar do evento")
}

if(dataDoEvento => 14/12) {
    console.log("Você está dentro do prazo de cadastro")
}else{
    console.log("A data do evento expirou")
}

if(listaDeParticipantes.length < 100) {
    console.log("É possível se cadastrar no evento")
}else{
    console.log("O evento atingiu capacidade máxima")
}
