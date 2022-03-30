const tipoDeErrores = [
    'patternMismatch',
    'valueMissing',
    'tooShort',
    'typeMissmatch'
];

const mensajesDeError = {
    nombreapellido: {
        valueMissing: "Debes completar el campo Nombre y Apellido para poder continuar",
        tooShort: "Debe tener al menos 4 caracteres"
    },
    email: {
        valueMissing: "Debes completar el campo E-mail para poder continuar",
        patternMismatch: "No coincide con una dirección de E-mail válida (nombre@dominio.com)"
    },
    telefono: {
        valueMissing: "Debes completar el campo Teléfono para poder continuar",
        tooShort: "Debe tener al menos 10 caracteres"
    },
    mensaje: {
        valueMissing: "Debes completar el campo Mensaje para poder continuar"
    }
};

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container-invalid");
        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};

function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach ( (error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        };
    });

    return mensaje;
};
