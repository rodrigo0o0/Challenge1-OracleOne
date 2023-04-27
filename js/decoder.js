console.log("Arquivo importado");

function enviaTextoCodificador(event){
    event.preventDefault();
    let texto = document.getElementById('txt_decodificar');
    console.log("Cliquei no Codifica");
    if(texto.value != ""){
        //mostra tela de descodificação do texto
        document.getElementById('principal__resultado').style.display = 'flex';
        
        //esconder texto antigo
        document.getElementById('escondeTextoAntigo').style.display = 'none';


        //transfere o valor codificado para a área de cópia
        document.getElementById('txt_resultado').value = codifica(texto.value);


        
    }else{
        alert("Digite um texto ou palavra.");
    }
   
}




function enviaTextoDecodificador(event){
    event.preventDefault();
    let texto = document.getElementById('txt_decodificar');
    console.log("Cliquei no Decodifica");
    if(texto.value != ""){
        //mostra tela de descodificação do texto
        document.getElementById('principal__resultado').style.display = 'flex';
        
        //esconder texto antigo
        document.getElementById('escondeTextoAntigo').style.display = 'none';


        //transfere o valor codificado para a área de cópia
        document.getElementById('txt_resultado').value = decodifica(texto.value);


        
    }else{
        alert("Digite um texto ou palavra.");
    }


}
function decodifica(texto){
    palavras = texto.split(' ');
    let textoNovo = "";
    for (let i = 0; i < palavras.length; i++) {
        let palavraDaVez = palavras[i];
        while(!validaDecoder(palavraDaVez)){
            palavraDaVez = palavraDaVez.replace('ai','a').replace('enter','e').replace('imes','i').replace('ober','o').replace('ufat','u');
            console.log('se fudeu no loop' + palavraDaVez);
        }
        textoNovo += palavraDaVez;
        textoNovo += ' ';
        
    }
    resizeTextArea(textoNovo);
    return textoNovo;
}
function validaDecoder(txtValidar){
    return(txtValidar.search('ai') == -1 && txtValidar.search('enter') == -1 && 
    txtValidar.search('imes') == -1 && txtValidar.search('ober') == -1 &&  txtValidar.search('ufat'))  == -1;


}

function codifica(texto){
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


