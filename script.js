function mudarFrase() {
    let frases = [
        'A vida é feita de escolhas.',
        'A felicidade está nas pequenas coisas.',
        'Cada dia é uma nova oportunidade.',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
        'Acredite em si mesmo e todo o resto virá naturalmente.',
    
    ];
    
    let tagarela = document.getElementById('tagarela');

    let indice = 0;

    let numero = Math.random();

    if (numero >= 0.25 && numero < 0.50){
        indice = 1;
    }
    else if (numero >= 0.50 && numero < 0.75){
        indice = 2;
    }
    else if (numero >= 0.75){
        indice = 3;
    }

    tagarela.innerHTML = frases[indice];

}