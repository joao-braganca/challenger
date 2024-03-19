function copia(){
    var texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto);
}