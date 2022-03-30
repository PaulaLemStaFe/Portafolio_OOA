import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input-padron");

inputs.forEach (input => {
    input.addEventListener('blur', (input) =>{
        valida(input.target);
    });
});