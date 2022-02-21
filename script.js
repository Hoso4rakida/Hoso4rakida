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

