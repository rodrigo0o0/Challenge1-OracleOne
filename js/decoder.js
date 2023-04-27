console.log("Arquivo importado");

function enviaTextoDecodificador(event){
    event.preventDefault();
    var textoCodificado = document.getElementById('txt_decodificar');
    console.log("Cliquei no decodifica");
    if(textoCodificado.value != ""){
        //mostra tela de descodificação do texto
        document.getElementById('principal__resultado').style.display = 'block';
        
        //esconder texto antigo
        document.getElementById('escondeTextoAntigo').style.display = 'none';


        //transfere o valor codificado para a área de cópia
        document.getElementById('txt_resultado').value = decodifica(textoCodificado.value);


        
    }else{
        alert("Digite um texto ou palavra.");
    }
   
}



function decodifica(texto){
    palavras = texto.split(' ');
    let textoNovo = "";
    for (let i = 0; i < palavras.length; i++) {
        textoNovo += palavras[i].replace('e','enter').replace('i','imes').replace('a','ai').replace('o','ober').replace('u','ufat');
        textoNovo += ' ';
        
    }
    resizeTextArea(textoNovo);
    return textoNovo;
}

function resizeTextArea(textoNovo){
    let textArea = document.getElementById('txt_resultado');
    let linhas = (textoNovo.length / textArea.cols) + 2;
    textArea.rows = parseInt(linhas);
    
}


function copiarTexto(event){
    event.preventDefault();
    var texto = document.getElementById('txt_resultado').value;

    navigator.clipboard.writeText(texto);

}


