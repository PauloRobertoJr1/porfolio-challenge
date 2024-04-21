var form = document.querySelector(".formcontato__form");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    checkInput(nome, "Campo obrigatório", true);
    checkInputEmail(); 
    checkInput(assunto, "Campo obrigatório", true);
    checkInput(mensagem, "Campo obrigatório", true);
}

function checkInput(input, mensagem, isRequired) {
    let inputValue = input.value.trim();

    if (isRequired && inputValue === "") {
        errorInput(input, mensagem);
    } else {
        clearError(input);
    }
}

function errorInput(input, mensagem) {
    var formItem = input.parentElement.parentElement;
    var textMessage = formItem.querySelector(".formcontato__input-error");
    textMessage.innerText = mensagem;
    textMessage.classList.add("on");
}

function clearError(input) {
    var formItem = input.parentElement.parentElement;
    var textMessage = formItem.querySelector(".formcontato__input-error");
    textMessage.innerText = "";
    textMessage.classList.remove("on");
}

function checkInputEmail() {
    let emailValue = email.value.trim();
    if (emailValue === "") {
        errorInput(email, "Campo obrigatório");
    } else if (!isValidEmail(emailValue)) {
        errorInput(email, "Formato de e-mail inválido");
    } else {
        clearError(email);
    }
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
