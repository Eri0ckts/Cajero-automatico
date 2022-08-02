let togglePassword = function () {
    let btnToggle = document.getElementById('btn-toggle-password')

    if (btnToggle) {

        let target = document.querySelector(btnToggle.getAttribute('data-target'))

        let btn_show = btnToggle.querySelector('.default')
        let btn_hide = btnToggle.querySelector('.toggled')

        btn_hide.style.display = 'none'

        btnToggle.addEventListener('click', (e) => {
            e.preventDefault()

            if (target.getAttribute('type') == 'password') {
                target.setAttribute('type', 'text')
                btn_show.style.display = 'none'
                btn_hide.style.display = ''
            } else {
                target.setAttribute('type', 'password')
                btn_show.style.display = ''
                btn_hide.style.display = 'none'
            }
        })
    }
}()




const cuentas = [
    {ind:0,nombre: "Mali", saldo: 200, password: '1234',historial: []},
    {ind:1,nombre: "Gera", saldo: 290, password: '1234',historial: []},
    {ind:2,nombre: "Maui", saldo: 67, password: '1234',historial: []}
];


const getData = function (){
    event.preventDefault();
    let userName, passWord, balance, check,index;

    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;

    check = false;

    for (let i = 0; i <cuentas.length; i++) {
        if (cuentas[i].nombre===userName&&cuentas[i].password===passWord){
            check=true;
            balance = cuentas[i].saldo;
            index = cuentas[i].ind;
        }
    }
    if (check){
        console.log("Acceso concedido");
        sessionStorage.setItem("cajeroUserJS",userName);
        sessionStorage.setItem("cajeroBalanceJS",balance);
        sessionStorage.setItem("cajeroIndexJS",index);
        window.location.href="cajero2.html";
    }else{
        console.log("Acceso denegado");
        document.getElementById("alertLogIn").classList.remove("invisible");
        document.getElementById("alertLogIn").classList.add("visible");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}



// Pagina Sign In




// Pagina Interaccion
    document.addEventListener('DOMContentLoaded',function (){
        document.getElementById('userCajero').innerText=sessionStorage.getItem('cajeroUserJS');
        document.getElementById('cajeroBalance').innerText=sessionStorage.getItem('cajeroBalanceJS');
    })


const walletBttn = function () {
    document.getElementById('cajeroRightTitle').innerText="Wallet";

    document.getElementById("formPay").className= '';
    document.getElementById("formAdd").className= '';
    document.getElementById("walletTable").className= '';
    document.getElementById("contenedorForms").className= '';


    document.getElementById("formPay").classList.add("forminvisible");
    document.getElementById("formAdd").classList.add("forminvisible");
    document.getElementById("walletTable").className="table table-sm table-hover table-bordered table-dark m-0";
    document.getElementById("contenedorForms").classList.add("invisible");

}


const addBttn = function () {
    document.getElementById('cajeroRightTitle').innerText="Add";

    document.getElementById("formPay").className= '';
    document.getElementById("formAdd").className= '';
    document.getElementById("walletTable").className= '';
    document.getElementById("contenedorForms").className= '';


    document.getElementById("formPay").classList.add("forminvisible");
    document.getElementById("formAdd").classList.add("formvisible");
    document.getElementById("walletTable").classList.add("invisible");
    document.getElementById("contenedorForms").className="middle-container2 d-flex justify-content-between align-items-center mt-3 mb-4 p-2";

}

const submitAdd = function (){
    event.preventDefault();
    let funds, passWord, index;

    funds = Number(document.getElementById("addFunds").value);
    passWord = document.getElementById("addPass").value;
    index = sessionStorage.getItem('cajeroIndexJS')

    if (cuentas[index].password===passWord){
        console.log("Acceso concedido");
        document.getElementById("alertLogIn").classList.remove("visible");
        document.getElementById("alertLogIn").classList.add("invisible");
        cuentas[index].saldo+=funds;
        document.getElementById('cajeroBalance').innerText=cuentas[index].saldo;
    }else{
        console.log("Acceso denegado");
        document.getElementById("alertLogIn").classList.remove("invisible");
        document.getElementById("alertLogIn").classList.add("visible");
    }
        document.getElementById("addFunds").value = "";
        document.getElementById("addPass").value = "";
}




const payBttn = function () {
    document.getElementById('cajeroRightTitle').innerText="Pay";

    document.getElementById("formPay").className= '';
    document.getElementById("formAdd").className= '';
    document.getElementById("walletTable").className= '';
    document.getElementById("contenedorForms").className= '';


    document.getElementById("formPay").classList.add("formvisible");
    document.getElementById("formAdd").classList.add("forminvisible");
    document.getElementById("walletTable").classList.add("invisible");
    document.getElementById("contenedorForms").className="middle-container2 d-flex justify-content-between align-items-center mt-3 mb-4 p-2";
}

const submitPay = function (){
    event.preventDefault();
    let funds, passWord, index;

    funds = Number(document.getElementById("payFunds").value);
    passWord = document.getElementById("payPass").value;
    index = sessionStorage.getItem('cajeroIndexJS')

    if (cuentas[index].password===passWord){
        console.log("Acceso concedido");
        document.getElementById("alertLogIn").classList.remove("visible");
        document.getElementById("alertLogIn").classList.add("invisible");
        cuentas[index].saldo-=funds;
        document.getElementById('cajeroBalance').innerText=cuentas[index].saldo;
    }else{
        console.log("Acceso denegado");
        document.getElementById("alertLogIn").classList.remove("invisible");
        document.getElementById("alertLogIn").classList.add("visible");
    }
        document.getElementById("payFunds").value = "";
        document.getElementById("payPass").value = "";
}





const sendBttn = function () {
    document.getElementById('cajeroRightTitle').innerText="Send";

}


const logoutCajero=function (){
    window.location.href="index.html";
    sessionStorage.setItem("cajeroUserJS","");
    sessionStorage.setItem("cajeroBalanceJS","");
    sessionStorage.setItem("cajeroIndexJS","");
}
