$("#celular").mask("(00) 00000-0000");

/*===== BOTAO VOLTAR AO TOPO ===== */

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});

/*===== FORMULARIO ===== */

/*{

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);

        if ( this.form ) {
            this.url = this.form.getAttribute("action");
        }

        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });

        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando ...";
    }

    async sendForm(event) {
        this.onSubmission(event);
        try {
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
    
            this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if ( this.form ) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua menssagem!</h1>",
});

formSubmit.init();

}*/