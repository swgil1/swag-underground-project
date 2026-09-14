const campoNome = document.getElementById("nome");
const campoSenha = document.getElementById("senha");
const campoEmail = document.getElementById("email");
const campoCpf = document.getElementById("cpf");
const campoSobrenome = document.getElementById("sobrenome");
const campoData = document.getElementById("data");
const campoTelefone = document.getElementById("telefone");
const botao = document.getElementById("botaoCadastrar");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", function () {
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = campoIdade.value.trim();
    const senha = campoSenha.value;


    app.post("/cadastrar", (req, res) => {
        const { nome, email, senha, idade } = req.body;
        if (!nome || !email || !senha || !idade) {
            return res.status(400).json({ erro: "Preencha nome, email, senha e idade." });
        }
        salvarUsuario(nome, email, senha, Number(idade), function (erro, usuarioCriado) {
            if (erro) {
                return res.status(400).json({ erro: "Não foi possível cadastrar. O e-mail já pode estar em uso." });
            }
            res.status(201).json(usuarioCriado);
        });
    });
    })