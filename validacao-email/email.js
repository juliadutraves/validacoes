// Função para validar o e-mail
function checarEmail() {
    // Captura o valor do campo de e-mail
    var email = document.forms[0].email.value;
    if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Por favor, informe um e-mail válido");
        return false; // Retorna false para evitar o envio do formulário
    } else {
        alert("E-mail informado com sucesso");
        document.getElementById('email').innerHTML = email; // Exibe o e-mail validado no elemento com id 'email'
    }
}
