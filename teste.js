const saudacao = document.getElementById("saudacao");
const dadosSalvos = sessionStorage.getItem("usuarioLogado");
if (!dadosSalvos) {
    // Ninguém logado -> volta para a tela de login
    window.location.href = "login.html";
} else {
    const usuario = JSON.parse(dadosSalvos);
    saudacao.textContent = "Você está logado como " + usuario.nome + " (" + usuario.email + ").";
}