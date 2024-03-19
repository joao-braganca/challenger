function descriptografar(){
    var descriptografado = "";
    var texto_descriptografar = document.getElementById("texto").value;

    document.getElementById("div_resultado_copiar").style.setProperty("visibility", "visible");
    document.getElementById("div_resultado").style.setProperty("visibility", "hidden");

    var texto_descriptografado = texto_descriptografar.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("resultado").innerHTML=texto_descriptografado;
}