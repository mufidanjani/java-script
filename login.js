class Login {
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit(){
        let self = this;
        
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            self.fields.forEach((fields) => {
                const input = document.querySelector("#${fields}");
            if (self.validateFields(input) == false){
                error++;
            }
            if (error == 0){
                console.log("succsess");
                this.form.submit();
            }
        });
    })
}

    validateFields(){
        if(field.value.trim() == ""){
            this.setStatus(
                field,
                "${fields.previousElementSibling.innerText} cannot be blank",
                "error"
            );
            return false;
        }else {
            if (field.type == "password")
            if (this.field.value.length < 8) {
                this.setStatus(
                    field,
                    "${fields.previousElementSibling.innerText} must be at least 8 characters",
                "error"
                );
                return false;
            }else {
                this.setStatus(field, null, "success");
                return true;
            }else {
                this.setStatus(field, null, "success");
                return true;
            }
        }    
    }

    setStatus(field, message, status){
        const errorMessage = field.preventElement.querySelector("error-message");

        if (status == "success") {
            if (errorMessage){
                errorMessage.innerText = "";
            }
            field.classList.remov("input-error");
        }
    }

const = document.querySelector(",loginform");
if(form){
    const fields =["username", "password"];
    const validator = new Login(form, fields);
    }
}