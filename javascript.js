function mascara_telefone() {
    let campo = document.getElementById("telefone").value;
    
    if (campo.startsWith("+55")) {
        campo = campo.replace("+55", "");
    }
    
    let v = campo.replace(/\D/g, "");
    v = v.substring(0, 11);
    
    let formatado = "";
    if (v.length > 0) {
        formatado = "+55 "; 
        if (v.length > 2) {
            formatado += "(" + v.substring(0, 2) + ") ";
            if (v.length > 3) {
                formatado += v.substring(2, 3) + " ";
                if (v.length > 7) {
                    formatado += v.substring(3, 7) + "-" + v.substring(7, 11);
                } else {
                    formatado += v.substring(3);
                }
            } else {
                formatado += v.substring(2);
            }
        } else {
            formatado += "(" + v;
        }
    }
    document.getElementById("telefone").value = formatado;
}

function mascara_cep() {
    let v = document.getElementById("cep").value.replace(/\D/g, "");
    v = v.substring(0, 8); 

    if (v.length > 5) {
        v = v.substring(0, 2) + "." + v.substring(2, 5) + "-" + v.substring(5, 8);
    } else if (v.length > 2) {
        v = v.substring(0, 2) + "." + v.substring(2, 5);
    }
    document.getElementById("cep").value = v;
}

function mascara_cpf() {
    let v = document.getElementById("cpf").value.replace(/\D/g, "");
    v = v.substring(0, 11); 

    if (v.length > 9) {
        v = v.substring(0, 3) + "." + v.substring(3, 6) + "." + v.substring(6, 9) + "-" + v.substring(9, 11);
    } else if (v.length > 6) {
        v = v.substring(0, 3) + "." + v.substring(3, 6) + "." + v.substring(6, 9);
    } else if (v.length > 3) {
        v = v.substring(0, 3) + "." + v.substring(3, 6);
    }
    document.getElementById("cpf").value = v;
}

function mascara_cnpj() {
    let v = document.getElementById("cnpj").value.replace(/\D/g, "");
    v = v.substring(0, 14); 

    if (v.length > 12) {
        v = v.substring(0, 2) + "." + v.substring(2, 5) + "." + v.substring(5, 8) + "/" + v.substring(8, 12) + "-" + v.substring(12, 14);
    } else if (v.length > 8) {
        v = v.substring(0, 2) + "." + v.substring(2, 5) + "." + v.substring(5, 8) + "/" + v.substring(8, 12);
    } else if (v.length > 5) {
        v = v.substring(0, 2) + "." + v.substring(2, 5) + "." + v.substring(5, 8);
    } else if (v.length > 2) {
        v = v.substring(0, 2) + "." + v.substring(2, 5);
    }
    document.getElementById("cnpj").value = v;
}

document.addEventListener("DOMContentLoaded", function() {
    
    const formulario = document.querySelector(".meu-formulario");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); 

        const toastElemento = document.getElementById("meuToast");
        
        const toast = new bootstrap.Toast(toastElemento);
        toast.show();
        
        formulario.reset(); 
    });
});