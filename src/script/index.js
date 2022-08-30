class Login {
    static checkPassword() {
        const passwordModal = document.querySelectorAll("[data-control-modal]")

        passwordModal.forEach(button => {
            let modalId = button.getAttribute("data-control-modal")
            

            button.addEventListener("click", () => {
                document.getElementById(modalId).classList.toggle("show__modal")
            })
        })
    }
    static modal() {
       
        const container = document.querySelector(".container")

        const modalDiv = document.createElement("div")
        const form = document.createElement("form")
        const contentDiv = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const input = document.createElement("input")
        const button = document.createElement("button")



        modalDiv.classList.add("modal-wrapper")
        modalDiv.setAttribute("id", "modal-password")
        contentDiv.classList.add("modal--content")
        form.classList.add("modal")
        input.type = "email"
        input.classList.add("form--input")
        input.placeholder = "Digite seu email"
        button.classList.add("submit")

        h3.innerText = "Esqueceu a senha?"
        p.innerText = "Redefina a senha em duas etapas rápidas"
        button.innerText = "Redefinir senha"

        contentDiv.append(h3, p, input, button)
        form.append(contentDiv)
        modalDiv.append(form)
        container.append(modalDiv)
        
        this.checkPassword()
    }
}
Login.modal()
