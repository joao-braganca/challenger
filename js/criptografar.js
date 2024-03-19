function criptografar(){
    var criptografado = "";
    var texto_criptografar = document.getElementById("texto").value;
    var texto_criptografar_array = texto_criptografar.split("");
    
    document.getElementById("div_resultado_copiar").style.setProperty("visibility", "visible");
    document.getElementById("div_resultado").style.setProperty("visibility", "hidden");
    

    texto_criptografar_array.forEach(letra => {
        switch(letra){
            case "a":
                letra = "ai";
                break;
            case "e":
                letra = "enter";
                break;
            case "i":
                letra = "imes";
                break;
            case "o":
                letra = "ober";
                break;
            case "u":
                letra = "ufat";
                break;
        }
        
        criptografado = criptografado + letra;
    })

    document.getElementById("resultado").innerHTML=criptografado;

}