/*Criando as variáveis*/
var X = 3;
var Y = 5;
var resultado = 0;
 
/*Criando um laço de repetição de 0 a 999*/
for(i = 0; i < 1000; i++){

    /*Criando uma estrutura de condição onde utilizamos módulos
    para definir os Múltiplos de 3 ou os múltiplos de 5 */
    if((i % X == 0) | (i % Y == 0)){

    /*Atribuindo na variável resultado todos números que
    satisfazem a condição acima*/
        resultado += i;  
    }
}

/*Imprimindo o resultado no console*/
console.log('A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é:', resultado);