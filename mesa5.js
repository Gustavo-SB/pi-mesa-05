// 1 conversor polegadas para centimetros
function polegadasParaCentimetros(polegadas) {
    return console.log(polegadas * 2.54);
}

polegadasParaCentimetros(10);

// 2 conversor string para url
function stringParaUrl(string) {
    return console.log(`https://www.${string}.com`);
}

stringParaUrl("google");

// 3 exclamação
function exclamacao(string) {
    return console.log(`${string}!`);
}

exclamacao("ola");

// 4 idade cachorro
function idadeCachorro(idade) {
    return console.log("a idade do cachorro é: ", idade * 7);
}

idadeCachorro(10);

// 5 valor hora trabalhada
function valorHoraTrabalhada(salario, horasTrabalhadas) {
    return console.log("o valor por hora trabalhada é: ", salario / horasTrabalhadas);
}

valorHoraTrabalhada(3600, 160);

// 6 calculadora imc
function calculadoraImc(peso, altura) {
    return console.log("o imc é: ", peso / (altura * altura));
}

calculadoraImc(70, 1.70);

// 7 conversor minusculo para maiusculo
function minusculoParaMaiusculo(string) {
    return console.log(string.toUpperCase());
}

minusculoParaMaiusculo("ola");

// 8 tipo do dado
function tipoDado(dado) {
    return console.log(typeof dado);
}

tipoDado("string");

// 9 circunferencia
function circunferencia(raio) {
    return console.log(Math.PI * raio * 2);
}

circunferencia(2);