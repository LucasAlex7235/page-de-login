class Login {
    static checkPassword(){
        const passwordModal = document.querySelectorAll("[data-control-modal]")
        
        passwordModal.forEach(button =>{
            let modalId = button.getAttribute("data-control-modal")

            button.addEventListener("click", ()=>{
                document.getElementById(modalId).classList.toggle("show__modal")
            })
        })
    }
}

Login.checkPassword()