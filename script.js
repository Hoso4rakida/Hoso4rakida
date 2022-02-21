alert("bem vindo ao meu pequeno espaço");
var SouN = confirm ("vc quer me dar seu nome?")
if(SouN == true)
{
    var nome = prompt("qual é seu nome?"); 
    document.createTextNode(`bem vindo ${nome}`);
}else
{
    alert('entao vamos continuar assim mesmo')
}

    //variaveis
var btn = document.querySelector(`div#começo`)

function interagir(){
btn.innerText = 'clicou' 
btn.style.background = '#000000';

}

function saiu()
{
    btn.innerText = `vamos prosseguir?`;
    btn.style.background = 'rgb(255 115 108)';
}