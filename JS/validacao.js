// ===============================
// FORMULÁRIO
// ===============================

const formulario = document.getElementById("formulario");

// ===============================
// EVENTO SUBMIT
// ===============================

formulario.addEventListener("submit", function (evento) {

    // impede envio automático
    evento.preventDefault();

    limparErros();

    let valido = true;

    // CAMPOS
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const idade = document.getElementById("idade");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const estado = document.getElementById("estado");
    const observacoes = document.getElementById("observacoes");

    // ===============================
    // NOME
    // ===============================

    if (nome.value.trim() === "") {

        mostrarErro(nome, "Digite o nome");
        valido = false;
    }

    // ===============================
    // SOBRENOME
    // ===============================

    if (sobrenome.value.trim() === "") {

        mostrarErro(sobrenome, "Digite o sobrenome");
        valido = false;
    }

    // ===============================
    // IDADE
    // ===============================

    if (idade.value === "" || idade.value <= 0) {

        mostrarErro(idade, "Idade inválida");
        valido = false;
    }

    // ===============================
    // EMAIL
    // ===============================

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value)) {

        mostrarErro(email, "Email inválido");
        valido = false;
    }

    // ===============================
    // SENHA
    // ===============================

    if (senha.value.length < 8) {

        mostrarErro(senha, "Mínimo 8 caracteres");
        valido = false;
    }

    // ===============================
    // TELEFONE
    // ===============================

    const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    if (!regexTelefone.test(telefone.value)) {

        mostrarErro(telefone, "Telefone inválido");
        valido = false;
    }

    // ===============================
    // CEP
    // ===============================

    const regexCep = /^\d{5}-?\d{3}$/;

    if (!regexCep.test(cep.value)) {

        mostrarErro(cep, "CEP inválido");
        valido = false;
    }

    // ===============================
    // SEXO
    // ===============================

    const sexo = document.querySelector('input[name="sexo"]:checked');

    if (!sexo) {

        alert("Selecione o sexo");
        valido = false;
    }

    // ===============================
    // ESTADO
    // ===============================

    if (estado.value === "") {

        mostrarErro(estado, "Selecione um estado");
        valido = false;
    }

    // ===============================
    // OBSERVAÇÕES
    // ===============================

    if (observacoes.value.trim().length < 10) {

        mostrarErro(observacoes, "Digite pelo menos 10 caracteres");
        valido = false;
    }

    // ===============================
    // SUCESSO
    // ===============================

    if (valido) {

        alert("✅ Cadastro realizado com sucesso!");
    }

});

// ===============================
// MOSTRAR ERRO
// ===============================

function mostrarErro(campo, mensagem) {

    campo.classList.add("erro-input");

    const erro = document.createElement("small");

    erro.classList.add("erro");

    erro.innerText = mensagem;

    campo.parentNode.appendChild(erro);
}

// ===============================
// LIMPAR ERROS
// ===============================

function limparErros() {

    const erros = document.querySelectorAll(".erro");

    erros.forEach(function (erro) {

        erro.remove();
    });

    const campos = document.querySelectorAll("input, textarea, select");

    campos.forEach(function (campo) {

        campo.classList.remove("erro-input");
    });
}