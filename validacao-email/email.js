//CÓDIGO DE VALIDAÇÃO DE EMAIL

function checaremail(){
if(document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.value.forms[0].email.indexOf('.') == -1 ){ alert("Por favor, informe um e_mail válido");

return false;
}else{
    alert("E-mail informado com sucesso");
    document.getElementById('email').innerHTML = document.forms[0].email.value;
}
}