// alert('Olá JavaScript')


// //declarando uma função
// function exibirAlerta(valor){
//     alert(valor)
// }

// exibirAlerta('Este é um alerta feito por função')


// funcao expression
// variavel local = let
// let exibirAlerta = function(valor){
//     alert(valor)
// }

// exibirAlerta('Exibir mensagem função de expressão')


//arrow 
// let exibirAlerta = (){
//     alert(valor)
// }

// exibirAlerta('ExibiExibir mensagem função de expressão ')

//função generator
// let exibirAlerta = (valor)=>{
//     aert(valor)
// }
// exibirAlerta("exir mensagem")


var f = document.forms[0];
addEvent(f, "submit", function(e){
    alert(f.a.value)
    return false;
})
