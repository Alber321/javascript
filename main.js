var inpNum1 = document.querySelector("#numero1")
var inpNum2 = document.querySelector("#numero2")
var inpRes = document.querySelector("#resultado")
var btnSumar = document.querySelector("#btnSumar")
var btnRestar = document.querySelector("#btnRestar")
var btnMultiplicar = document.querySelector("#btnMultiplicar")
var btnDividir = document.querySelector("#btnDividir")
var btnProbar = document.querySelector("#btnProbar")
console.log(inpNum1)
console.log(inpNum2)
btnSumar.addEventListener("click", () =>
{
    inpRes.value = Number(inpNum1.value) + Number(inpNum2.value)
})
btnMultiplicar.addEventListener("click", () =>
{
    inpRes.value = Number(inpNum1.value) * Number(inpNum2.value)
})
btnRestar.addEventListener("click", () =>
{
    inpRes.value = Number(inpNum1.value) - Number(inpNum2.value)
})
btnDividir.addEventListener("click", () =>
{
    inpRes.value = Number(inpNum1.value) / Number(inpNum2.value)
})
btnBorrar.addEventListener("click", () =>
{
    inpNum1.value = ""
    inpNum2.value = ""
    inpRes.value = ""
})
btnProbar.addEventListener("click", () =>
{
    let edad = Number(inpNum1.value)
    if (edad > 18)
    {
        inpRes.value = "Wuelcom"
    }
})
btnProbar.addEventListener("click", () =>
{
    let num = Number(inpNum1.value)
    if (num > 0){
        inpRes.value = "Positivo"
    }else{
        inpRes.value = "Negativo"
    }
})
btnProbar.addEventListener("click", () =>
{
    let num = Number(inpNum1.value)
    if (num < 10){
        inpRes.value = "Unidades"
    } else if (num < 100){
        inpRes.value = "Decenas"
    } else if (num < 1000){
        inpRes.value = "Centenas"
    } else if (num < 10000){
        inpRes.value = "Millar"
    } else {
        inpRes.value = "Fuera de Rango"
    }
})
