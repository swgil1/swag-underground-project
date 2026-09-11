const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoIdade = document.getElementById("idade");
const campoCpf = document.getElementById("cpf");
const campoSobrenome = document.getElementById("sobrenome");
const campoData = document.getElementById("data");
const campoSenha = document.getElementById("senha");
const campoTelefone = document.getElementById("telefone");
const botao = document.getElementById("botaoCadastrar");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", function () {
const nome = campoNome.value.trim();
const email = campoEmail.value.trim();
const idade = campoIdade.value.trim();
const cpf = campoCpf.value.trim();
const sobrenome = campoSobrenome.value.trim();
const data = campoData.value.trim();
const senha = campoSenha.value.trim();
const telefone = campoTelefone.value.trim();
// Mesma validação da calculadora de combustível
if (nome === "" || email === "" || idade === ""  || cpf === ""  || sobrenome === ""  || data === ""  || senha === ""  || telefone === "") {
alert("Preencha todos os campos antes de cadastrar.");
return;
}
const novoUsuario = { nome: nome, email: email, idade: Number(idade) };
// fetch envia os dados para a rota POST /cadastrar do server.js
fetch("/cadastrar", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(novoUsuario)
})
.then(function (resposta) { return resposta.json(); })
.then(function (dados) {
mensagem.textContent = "Usuário " + dados.nome + " cadastrado com sucesso!";
})
.catch(function (erro) {
mensagem.textContent = "Erro ao cadastrar. Tente novamente.";
console.error(erro);
});
});