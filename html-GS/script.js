// Adicione este evento a um botão ou input no formulário
function submitForm() {
    var form = document.getElementById("formId");
   
    // Verifica se todos os campos estão preenchidos
    if (form.checkValidity()) {
       // Gera uma senha aleatória e atribui ao campo de senha
       var randomPassword = generateRandomPassword();
       var passwordField = document.getElementById("passwordId");
       passwordField.value = randomPassword;
   
       // Envia o formulário
       form.submit();
    } else {
       // Se todos os campos não estiverem preenchidos, mostra um alerta
       alert("Por favor, preencha todos os campos do formulário!");
    }

}
function generateRandomPassword() {
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";

    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

document.getElementById("password").value = generateRandomPassword();

