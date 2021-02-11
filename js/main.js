//var nome = "Celio Rocha";
//var idade = 50;
//var idade2 = 1;
//var frase = "Nautico saco de pancada do Santa Cruz";
 /* alert (nome + " tem " + idade + " anos "); */
// alert (idade + idade2); // exibe somatoria idade mais idade2

//console.log (nome);
//console.log(idade + idade2);
//console.log(frase.replace ("Santa Cruz", "Sport")); // substituindo Santa Cruz por Sport
//alert (frase.replace ("Santa Cruz", "Sport")); // substituindo Santa Cruz por Sport
//console.log(frase.toUpperCase()); // vai exibir toda frazer em maiuscula

//console.log(frase.toLowerCase()); //vai exibir toda frazer em minuscula
//var lista = ["maçã" , "pera" , "Uva"]
//lista.push("Banana"); // vai adicionar Banana na lista do array.
//lista.pop("pera"); // vai remover item pera da lista
//console.log(lista); //vai exibi todo lista.
//console.log(lista.length); // exibe quantidade de itens da lista
//console.log(lista.reverse()); // exibe os itens sequencia contraria 
//console.log(lista.toString()[1]); // exibe itens formato string ou seja exibe a: por que segundo iten da lista
//console.log(lista.join("- ")); // vai separa item lista com um -

/*var fruta = {nome: "maçã" , cor: "vermelha" } // exemplo uso dicionario
console.log(fruta.nome); // vai exibinoe da fruta: maçã
alert(fruta.cor); //vai exibir alert de cor da maçã */

//var frutas =[ {nome: "maçã" , cor: "vermelha" },{ nome: "pera" , cor: "verde" }] // exemplo uso lista de dicionario
//console.log(frutas[0].nome); // vai exibinoe da fruta: maçã
//alert(frutas[1].cor); //vai exibir alert de cor da maçã

// var idade = prompt("Qual sua idade ?"); // vai exibir uma pergunta e de acordo com idade exibira mensagem maior ou menor de idade

//var idade = 18;
/* if (idade >= 18){ // vai exibis maior de idade

    alert("maior de idade");
}else{
    alert("menor de idade");

}
console.log(idade) */


/*  var count = 0;
while(count <= 5){
    console.log (count); // vai exibir de 0 ate 4 ou seja estrutura de repetição
    count = count + 1; ou count++
} */

/* var count ;
for(count=1 ; count <= 5; count++){ // vai iniciar um alerta de 1 ate 5
    alert(count);
}; */

/*
var d = new Date();
alert(d.getMonth()+1); // vai exibir o mes atual */

/* var d = new Date();
alert(d.getUTCMinutes()); // vai exibir minuto da hora  /*/

 /*  function soma(n1 , n2){
    return n1 + n2;
}

    function setReplace(frase , nome , novo_nome){
       return frase.replace(nome , novo_nome)
    }
alert(soma(5 ,10));  // vai exibir 15  
alert(setReplace("vai Japão" , "Japão" ,  "Brasil")); // vai exibir vai Brasil(retira Japão) */

/* function validarIdade (idade) {
    var validar;
    if(idade >= 18){
        console.log("maior de idade")
        validar = true;
    }else{
        console.log("menor de idade")
        validar = false;
    }
        
}
var idade = prompt("Digite sua idade");
console.log(validarIdade(idade)); */


function botao(){
    document.getElementById("agradecimento") .innerHTML = "Obrigado por clicar"; 
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}
function redirecionar() {
    //window.open("https://www.global-lab.playblackdesert.com/Main/Index"); // vai proporciona redirecionanmento para pagina
    window.location.href="https://www.global-lab.playblackdesert.com/Main/Index"; // vai proporciona redirecionanmento para pagina
    
}
function trocar(elemento) {
   // document.getElementById("mousemove") .innerHTML = "Obrigado por passar o mouse"; 
   // alert("trocar texto");
   elemento.innerHTML = "Obrigado por passar o mouse"; 
    
}
function voltar(elemento) {
   // document.getElementById("mousemove") .innerHTML = "Passe o mouse aqui"; 
    elemento.innerHTML = "Passe o mouse aqui"; 
    
}
function loud() {
    alert("Pagina carregada");
    
}
function funcaoChange(elemento) {
    console.log(elemento.value)
    
}





