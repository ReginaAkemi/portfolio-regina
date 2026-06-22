// Validação simples do formulário de contato

document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "") {
        alert("Por favor, preencha o nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, preencha o e-mail.");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    document.getElementById("formContato").reset();
});

let botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = "Tema Claro";
    } else {
        botaoTema.textContent = "Tema Escuro";
    }
});