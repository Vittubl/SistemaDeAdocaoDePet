let login = document.getElementById("login")
let senha = document.getElementById("senha")

    function entrar(){

        if(login.value === "" || senha.value === "")
        {
            alert("Erro no login")
        }
        else{
            window.location.replace("TelaHome.html")
        }
    }