var nickEl = document.getElementById('xtray')
var passEl = document.getElementById('repPas')
var btnIn = document.getElementById('inAccount')
var btnReg = document.getElementById('regAccount')
var asBtn = document.getElementById('acceptBtn')


btnIn.onclick = function (event) {
    nickEl.classList.add("d-none");
    passEl.classList.add("d-none");
    if (btnReg.classList.contains("disabled")) { btnReg.classList.remove("disabled"); };
    btnIn.classList.add("disabled");
    asBtn.onclick = function (event) {
        var login = document.getElementById('Login').value;
        var password = document.getElementById('Passw').value;
        const User = { Login: login, Password: password };
        console.log(User);
    }
}
btnReg.onclick = function (event) {
    nickEl.classList.remove("d-none");
    passEl.classList.remove("d-none");
    if (btnIn.classList.contains("disabled")) { btnIn.classList.remove("disabled"); };
    btnReg.classList.add("disabled");
    asBtn.onclick = function (event) {
        var login = document.getElementById('Login').value;
        var password = document.getElementById('Passw').value;
        var name = document.getElementById('Name').value;
        var repPass = document.getElementById('repPas').value;
        if (password == repPass) {
            const User = { Name: name, Login: login, Password: password };
            console.log(User);
        }
        else{}
    }
}