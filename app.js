const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();    
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem("username", USERNAME_KEY); //username 저장

    paintGreetings(username);
}

function paintGreetings (username) {
    greeting.classList.remove(username);
    greeting.innerText = `hello ${savedUsername}`;
}


loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("SUBMIT", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



