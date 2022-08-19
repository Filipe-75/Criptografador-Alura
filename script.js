function criptografia(){
    //criptografa o que for escrito no textarea 
    let texto = document.querySelector('textarea').value;
    let escrita = texto;
    let j=0;

    for(let i=0; i< texto.length; i++){
        switch(texto[i]){
            case 'e':
                escrita = escrita.substring(0, j) + 'enter' + escrita.substring(j+1);
                j+= 4;
                break;
            case 'i':
                escrita = escrita.substring(0, j) + 'imes' + escrita.substring(j+1);
                j+= 3;
                break;
            case 'a':
                escrita = escrita.substring(0, j) + 'ai' + escrita.substring(j+1);
                j++;
                break;
            case 'o':
                escrita = escrita.substring(0, j) + 'ober' + escrita.substring(j+1);
                j+= 3;
                break;
            case 'u':
                escrita = escrita.substring(0, j) + 'ufat' + escrita.substring(j+1);
                j+= 3;
                break;
        }
        j++;
    }

    //passa valor criptografado para o #mensagem-retornada e a mostra na saída
    mensagemRetornada.value = escrita;
    naoEncontrado.classList.add('invisivel');
    retorno.classList.remove('invisivel');

}

function descriptografia(){
    let texto = document.querySelector('textarea').value;
    let escrita = texto;
    let i= 0;

    while(i >= 0){
        i = escrita.search("enter");
        console.log(i);
        if(i >= 0){
            escrita =  escrita.substring(0, i+1) + escrita.substring(i+5);
            console.log(escrita);
        }
    }

    i = 0;
    while(i >= 0){
        i = escrita.search("imes");
        console.log(i);
        if(i >= 0){
            escrita =  escrita.substring(0, i+1) + escrita.substring(i+4);
            console.log(escrita);
        }
    }
    i = 0;
    while(i >=0){
        i = escrita.search("ai");
        console.log(i);
        if(i >= 0){
            escrita =  escrita.substring(0, i+1) + escrita.substring(i+2);
            console.log(escrita);
        }
    }

    i = 0;
    while( i >= 0){
        i = escrita.search("ober");
        console.log(i);
        if(i >= 0){
            escrita =  escrita.substring(0, i+1) + escrita.substring(i+4);
            console.log(escrita);
        }
    }
    i = 0;
    while( i >= 0){
        i = escrita.search("ufat");
        console.log(i);
        if(i >= 0){
            escrita =  escrita.substring(0, i+1) + escrita.substring(i+4);
            console.log(escrita);
        }
    }
    console.log(escrita);
}

const cripto = document.getElementById('criptografar');
const descripto = document.getElementById('descriptografar');

const mensagemRetornada = document.getElementById('mensagem-retornada');
const naoEncontrado = document.getElementById('nao-encontrado');
const retorno = document.getElementById('retorno');

cripto.addEventListener("click", criptografia);
descripto.onclick = descriptografia;