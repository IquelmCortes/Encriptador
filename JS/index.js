tailwind.config = {
    theme: {
        fontSize: {
            lg: ['24px', '28.8px'],
            xl: ['32px', '48px'],
        },
        borderRadius: {
            '3xl': ['24px'],
            '4xl': ['32px']
        },
        extend: {
            height: {
                '67': '4.1875rem',
            },
            colors: {
                blueCian: '#F3F5FC',
                darkBlue: '#0A3871',
            }
        }
    }
}

function vaciar() {
    $("#EText").val("");
}

function encriptar() {
    var texto = $("#EText").val();
    if (texto != "") {
        if (texto.includes("á") || texto.includes("é") || texto.includes("í") || texto.includes("ó") || texto.includes("ú")) {
            document.getElementById("bg-modal").style.display = "flex";
            document.getElementById("modal-text").innerHTML = "No puede ingresar acentos";
            document.getElementById("advertencia").style.color = "red"
            document.getElementById("transcription").style.display = "none";
            document.getElementById("avatar").style.display = "initial";
            document.getElementById("not-found").style.display = "initial";
            document.getElementById("enter-text").style.display = "initial";
        }else if(texto.includes("/") || texto.includes("@") || texto.includes("#") || texto.includes("$") || texto.includes("%") || texto.includes("&") || texto.includes("=") || texto.includes("-") || texto.includes("_")){
            document.getElementById("bg-modal").style.display = "flex";
            document.getElementById("modal-text").innerHTML = "No puede ingresar signos";
            document.getElementById("advertencia").style.color = "red"
            document.getElementById("transcription").style.display = "none";
            document.getElementById("avatar").style.display = "initial";
            document.getElementById("not-found").style.display = "initial";
            document.getElementById("enter-text").style.display = "initial";
        } else {
            document.getElementById("avatar").style.display = "none";
            document.getElementById("not-found").style.display = "none";
            document.getElementById("enter-text").style.display = "none";
            var textE = texto.replaceAll("e", "enter");
            var textI = textE.replaceAll("i", "imes");
            var textA = textI.replaceAll("a", "ai");
            var textO = textA.replaceAll("o", "ober");
            var textU = textO.replaceAll("u", "ufat");
            document.getElementById("copy").style.display = "initial";
            document.getElementById("transcription").innerHTML = textU;
            vaciar();
        }
    } else {
        document.getElementById("bg-modal").style.display = "flex";
        document.getElementById("modal-text").innerHTML = "Debe ingresar un texto";
        document.getElementById("advertencia").style.color = "red"
    }
}

function desencriptar() {
    var texto = $("#EText").val();
    if (texto != "") {
        if (texto.includes("á") || texto.includes("é") || texto.includes("í") || texto.includes("ó") || texto.includes("ú")) {
            document.getElementById("bg-modal").style.display = "flex";
            document.getElementById("modal-text").innerHTML = "No puede ingresar acentos";
            document.getElementById("advertencia").style.color = "red"
            document.getElementById("transcription").innerHTML = "none";
            document.getElementById("avatar").style.display = "initial";
            document.getElementById("not-found").style.display = "initial";
            document.getElementById("enter-text").style.display = "initial";
        } else if(texto.includes("/") || texto.includes("@") || texto.includes("#") || texto.includes("$") || texto.includes("%") || texto.includes("&") || texto.includes("=") || texto.includes("-") || texto.includes("_")){
            document.getElementById("bg-modal").style.display = "flex";
            document.getElementById("modal-text").innerHTML = "No puede ingresar signos";
            document.getElementById("advertencia").style.color = "red"
            document.getElementById("transcription").style.display = "none";
            document.getElementById("avatar").style.display = "initial";
            document.getElementById("not-found").style.display = "initial";
            document.getElementById("enter-text").style.display = "initial";
        } else {
            document.getElementById("avatar").style.display = "none";
            document.getElementById("not-found").style.display = "none";
            document.getElementById("enter-text").style.display = "none";
            var textE = texto.replaceAll("enter", "e");
            var textI = textE.replaceAll("imes", "i");
            var textA = textI.replaceAll("ai", "a");
            var textO = textA.replaceAll("ober", "o");
            var textU = textO.replaceAll("ufat", "u");
            document.getElementById("copy").style.display = "initial";
            document.getElementById("transcription").innerHTML = textU;
            vaciar();
        }
    } else {
        document.getElementById("bg-modal").style.display = "flex";
        document.getElementById("modal-text").innerHTML = "Debe ingresar un texto";
        document.getElementById("advertencia").style.color = "red"
    }
}

function copiar() {
    var content = document.getElementById("transcription").innerText;
    navigator.clipboard.writeText(content);
}

function cerrarModal() {
    document.getElementById("bg-modal").style.display = "none";
    document.getElementById("advertencia").style.color = "initial"
    vaciar();
}