// // const booleano1 = true
// // const booleano2 = false
// // const booleano3 = undefined
// //const booleano4 = 4 > 5 se usar esse modo, o booleano é sempre false pq 4 é menor que 5 por isso o booleano 2 seria igual ao 3 


// // if (booleano1){
// //     alert("Booleano 1 é true")
// // } else {
// //     alert("Booleano 1 é false")
// // }


// // if(booleano1 === booleano2){
// //     alert("Booleano 1 é igual ao 2")
// // } else if (booleano2 === booleano3) {
// //     alert("Booleano 1 é igual ao 3")
// // } else if (booleano1 === booleano3) {
// //     alert("Booleano 1 é igual ao 3")
// // } else{
// //     alert("Não existem valores iguais.")
// // }


// let idade = prompt("Digite sua idade: ")
// let autorizacao = true

// if (idade >= 18 && idade < 70){
//     alert(`Você tem ${idade} anos e pode votar.`)
// } else  if ( idade === 16 || idade === 17 && autorizacao === true) {
//     alert(`Você tem ${idade} anos e pode votar com a autorização dos pais.`)
//     } else if(idade >= 70){
//         alert(`Você tem ${idade} anos e pode votar, mas não é obrigatório.`) 

//     } else{
//         alert(`Você tem ${idade} e não pode voltar`)
//     }


let media = 11
if(media >= 5 && media <= 10){
    console.log(`Sua média foi ${media}, você foi aprovade.`)
} else if (media >= 3 && media <= 10){
    console.log(`Você tirou ${media}, você está de recuperação.`)
} else if(media < 3 && media <= 10) {
    console.log(`Você tirou ${media}, você está reprovade`)
} else{
    console.log(`Dados inválidos`)
}