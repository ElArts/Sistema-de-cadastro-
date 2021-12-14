const idadeMinima = 18
let dataDoEvento = 14/12
let numeroDeParticipantes = 100

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

if(numeroDeParticipantes.lenght<100) {
    console.log("É possível se cadastrar no evento")
}else{
    console.log("O evento atingiu capacidade máxima")
}
