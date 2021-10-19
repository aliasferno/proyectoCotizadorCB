function onClickButtonCalcularTarifa(){

    const inputEdad = document.getElementById("InputEdad");
    const valueEdad = inputEdad.value;
    const comboGenero = document.getElementById("genero");
    const valueGenero = comboGenero.value;
    const comboTipoPlan = document.getElementById("plan");
    const valuePlan = comboTipoPlan.value;

    const resulE = document.getElementById("valueEdad").innerText=valueEdad;
    resulE.innerText = "edad prueba es: " + valueEdad;



}