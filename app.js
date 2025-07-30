// Projeto 006 - Jogo do Número Secreto Completo

// -> VARIAVEIS
let numeroSecreto = parseInt(Math.random() * 10 + 1); // Gerar um número aleatório entre 1 e 10
// let numeroSecreto = 5; // Para testes, definir um número fixo    
let contagemTentativas = 1;

// -> FUNCOES
// Exibir o texto no campo de entrada
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Validar o chute e comparar com o numero secreto
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    // Validacao se o usuario digitou um numero dentro dos parametros
    if (chute < 1 || chute > 10 || isNaN(chute)) {
        exibirTextoNaTela('p', 'Por favor, digite um número entre 1 e 10.');
        limparCampoEntrada();
    } else {
        // Aqui você pode adicionar a lógica para verificar o chute com o número secreto
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
            let palavraTentativas = contagemTentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você usou ${contagemTentativas} ${palavraTentativas}.`;
            exibirTextoNaTela('p', mensagemTentativas);
            // document.getElementById('reiniciar').disabled = false; // Desabilitar o botão após acertar
            document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitar o botão após acertar
            // document.getElementById('chutar').disabled = true; // Desabilitar o botão de chutar
            document.getElementById('chutar').setAttribute('disabled', 'true');
        } else if (chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'Jogo do Número Secreto');
            exibirTextoNaTela('p', 'Não foi dessa vez, tente um número MAIOR.');
        } else {
            exibirTextoNaTela('h1', 'Jogo do Número Secreto');
            exibirTextoNaTela('p', 'Não foi dessa vez, tente um número MENOR.');
        }
        contagemTentativas++;
        limparCampoEntrada();
    }
}

function limparCampoEntrada() {
    // Limpar o campo de entrada
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = 5; // Gerar um novo número secreto
    contagemTentativas = 1; // Reiniciar a contagem de tentativas
    limparCampoEntrada(); // Limpar o campo de entrada
    // document.getElementById('reiniciar').disabled = true; // Desabilitar o botão de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Desabilitar o botão de reiniciar
    // document.getElementById('chutar').disabled = false; // Habilitar o botão de chutar
    document.getElementById('chutar').removeAttribute('disabled'); // Habilitar o botão de chutar
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Advinhe o número entre 1 e 10');
}

// -> EXECUCAO
exibirMensagemInicial();