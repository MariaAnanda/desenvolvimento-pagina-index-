//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(
        {
           top:0,
           left:0,
           behavior:'smooth'
        }
    )
}

//Validação de Login

function mostrarCadastro() {
    document.getElementById("cadastroForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function login(){ 
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '123456'){
        window.location = 'index.html';
        logado = 1;
    }

    if(logado == 0){
        alert('Acesso Negado. Dados incorretos')
    }
}

//Ativar alert no botão cadastrar

function cadastrar() {
    // Obter os valores dos campos e processá-los
    var email = document.getElementById("email").value;
    var novaSenha = document.getElementById("novaSenha").value;
    var nomeCompleto = document.getElementById("nomeCompleto").value;

    // Redirecionar para a página inicial após o cadastro
    window.location.href = "index.html";

    // Exibir mensagem de sucesso
    alert("Cadastrado com sucesso!")

    
}

