var NomeUsuario = prompt("Qual seu nome?");
var ValReal = prompt("Olá " + NomeUsuario + ", quantos reais você tem?");

var CotacaoDolar = 4.91;
var CotacaoEuro = 5.36;
var CotacaoBtc = 36663.23;

var ValDolar = (ValReal / CotacaoDolar).toFixed(2);
var ValEuro = (ValReal / CotacaoEuro).toFixed(2);
var ValBtc = (ValReal / CotacaoBtc).toFixed(6);

alert(NomeUsuario + ", você tem $ " + ValDolar);
alert(NomeUsuario + ", você tem € " + ValEuro);
alert(NomeUsuario + ", você tem B " + ValBtc);

//

// C=Celsius, F=Fahrenheit, K=Kelvin

var GrausC = parseFloat(
  prompt(
    "Continuando " + NomeUsuario + ", quantos graus Celsius está fazendo agora?"
  )
);

if (!isNaN(GrausC));
var CemK = 273.15;
var F = (GrausC * 9) / 5 + 32;
var K = GrausC + CemK;

alert(NomeUsuario + " " + GrausC + "°C em Fahrenheit é: " + F + " Fahrenheit.");
alert(NomeUsuario + " " + GrausC + "°C em Kelvin é: " + K + " Kelvins.");