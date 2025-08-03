// Projeto 006 - Jogo do Número Secreto Completo

// -> VARIAVEIS
let contagemTentativas = 1; // Contador de tentativas do usuário
let numeroMaximo = 200; // Número máximo do intervalo do jogo
let numeroSecreto = gerarNumeroSecreto(); // Chama a função para gerar o número secreto aleatório
console.log(numeroSecreto); // Exibir o número secreto no console para fins de depuração

// -> FUNCOES
/* Funcao que seleciona o campo/tag no HTML e atribui o texto espcificado */
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML com a tag especificada e atribui a variavel campo
    campo.innerHTML = texto;
}

/* Funcao de boas vindas ao jogo. Utiliza a funcao exibirTextoNaTela para gerar a mensagem */
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Advinhe o número entre 1 e ${numeroMaximo}.`);
}
exibirMensagemInicial();

function gerarNumeroSecreto() {
    return numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1); // Gera um número aleatório entre 1 e o número máximo definido
}

function limparCampoEntrada() {
    document.querySelector('input').value = ''; // Declarar a funcao que limpa o campo de entrada
    document.querySelector('input').focus(); // Focar novamente no campo de entrada
}

/* Funcao que valida se o numero digitado esta dentro do intervalo solicitado, e reliza as comparacoes entre o numero digitado e o numero aleatorio gerado */
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Pega o valor do campo de entrada e converte para inteiro

    // Validacao se o usuario digitou um numero dentro dos parametros
    if (chute < 1 || chute > numeroMaximo || isNaN(chute)) {
        exibirTextoNaTela('p', `Por favor, digite um número entre 1 e ${numeroMaximo}.`);
        limparCampoEntrada();
    } else {
        // Se o chute estiver dentro do intervalo, verifica se é igual ao número secreto
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns! Você acertou!'); // Exibe mensagem de sucesso
            let palavraTentativas = contagemTentativas > 1 ? 'tentativas' : 'tentativa'; //Operador ternario para definir o plural da palavra "tentativa"
            let mensagemTentativas = `Você usou ${contagemTentativas} ${palavraTentativas}.`; // Atribui a mensagem com o número de tentativas a variavel mensagemTentativas
            exibirTextoNaTela('p', mensagemTentativas); // Exibe a mensagem com o número de tentativas

            // document.getElementById('reiniciar').disabled = false; // Outra opcao para habilitar o botão após acertar
            document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitar o botão após acertar
            // document.getElementById('chutar').disabled = true; // Outra opcao para desabilitar o botão de chutar
            document.getElementById('chutar').setAttribute('disabled', 'true');

        } else if (chute < numeroSecreto) { // Se o chute for menor que o número secreto, exibe mensagem de dica
            exibirTextoNaTela('h1', 'Jogo do Número Secreto');
            exibirTextoNaTela('p', 'Não foi dessa vez, tente um número MAIOR.');
        } else { // Se o chute for maior que o número secreto, exibe mensagem de dica
            exibirTextoNaTela('h1', 'Jogo do Número Secreto');
            exibirTextoNaTela('p', 'Não foi dessa vez, tente um número MENOR.');
        }
        // Incrementar a contagem de tentativas
        contagemTentativas++;
        limparCampoEntrada();
    }
}

/* Funcao que reinicia o jogo, limpando o campo de entrada, gerando um novo numero secreto e reiniciando a contagem de tentativas */
function reiniciarJogo() {
    exibirMensagemInicial();
    limparCampoEntrada(); // Limpar o campo de entrada
    numeroSecreto = gerarNumeroSecreto(); // Gerar um novo número secreto
    console.log(numeroSecreto); // Exibir o número secreto no console para fins de depuração
    contagemTentativas = 1; // Reiniciar a contagem de tentativas

    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Desabilitar o botão de reiniciar
    document.getElementById('chutar').removeAttribute('disabled'); // Habilitar o botão de chutar
}