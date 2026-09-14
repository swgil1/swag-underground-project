const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("botaoEntrar");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", function () {
    const email = campoEmail.value.trim();
    const senha = campoSenha.value;
    if (email === "" || senha === "") {
        alert("Preencha email e senha.");
        return;
    }
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, senha: senha })
    })
        .then(function (resposta) {
            return resposta.json().then(function (dados) {
                return { status: resposta.status, dados: dados };
            });
        })
        .then(function (resultado) {
            if (resultado.status >= 400) {
                mensagem.textContent = resultado.dados.erro;
                return;
            }
            // Guarda o usuário logado nesta aba/sessão
            sessionStorage.setItem("usuarioLogado", JSON.stringify(resultado.dados));
            window.location.href = "bemvindo.html";
        });
});