var t_fieldNome=document.querySelector("#nome");//Estou pegando pelo ID
var t_fieldData=document.querySelector("#data");//Estou pegando pelo ID
var t_fieldAltura=document.querySelector("#altura");//Estou pegando pelo ID
var t_fieldPeso=document.querySelector("#peso");//Estou pegando pelo ID

var btnCalcular=document.querySelector("#calcular")

// Funções

function somar(n1,n2){

    return n1+n2;

}


// console.log(somar(23,45))

// Quando eu clicar no botão ele vai somar os valores e vai imprimir no console.log

// Estou pedindo para add um evento de clique no botão
// eu vou passar uma função que vai rodar toda vez que eu clicar no botão
btnCalcular.addEventListener("click",function soma(e){

    //Aqui eu descrevo que vai acontecer
    // Vamos criar um template de string
    console.log(`Nome: ${t_fieldNome.value} peso: ${t_fieldPeso.value} Altura: ${t_fieldAltura.value} DataNascimento: ${t_fieldData.value} `)

})