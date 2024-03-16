//efeito de esconder formulário de cadastro

function mostrarCadastro() {
    document.getElementById("cadastroForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function cadastrar() {
    //Obter os valores dos campos e processá-los
    var email = document.getElementById("email").value;
    var novaSenha = document.getElementById("novaSenha").value;
    var nomeCompleto = document.getElementById("nomeCompleto").value;

    // Exemplo de exibição dos dados
    alert("Email: " + email + "\nSenha: " + novaSenha + "\nNome Completo: " + nomeCompleto);

   
}
//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}

