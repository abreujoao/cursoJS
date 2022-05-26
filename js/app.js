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

// imprime o valor digitado como alert 
// document é tudo que o HTML tem
var f = document.forms[0];
f.addEventListener("submit", function(e){
    alert(f.a.value)
    return false;
})


//
f.addEventListener("keyup", function(e){
    f.a.value=f.a.value.toUpperCase();
})


//------------
//tipos de dados
// var a=1;
// var b=2;

// alert(a+b)

// var a=1;
// var b="2" + a;

// alert(b)

//------
//esse tipo de estrutura deixa o cdigo mais limpo 
// var aluno="João Paulo"
// var estrutura2=`
//     <table>
//     <tr>
//         <td></td>
//         <td></td>
//         <td></td>
//     </tr>

//     </table>
// `;

// alert(`Meu nome é ${aluno} e tenho 19 anos`)

let post={
    title:'titulo do valor',
    except:'excessao do valor',
    body:'corpo do valor',
    tags:[
        'primeira linha',
        'segunda linha',
        'terceira linha'
    ]

}
let {title,except, body, tags} = post;
var postHtml=` <artile>
<header>

</header>
<section>
    <div>${except}</div>
    <div>${body}</div>
</section
<footer>
    <ul>${tags.map(tag=> `<li>${tag}</li>`).join('\n')}</ul>
</footer>
`; // isso imprime o html com as variaveis declaradas

var div=document.querySelector('div');

div.innerHTML=postHtml;




