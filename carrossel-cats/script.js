const imgs = document.getElementById("cats");
const img = document.querySelectorAll("#cats img");

let i= 0;

function carrossel() {
    i++;
    if(i > img.length -3) {
        i = 0;
    }
    imgs.style.transform = `translateX(${-i * 500}px)`;
}

setInterval(carrossel, 1800)

/*
Como as imagens têm tamanhos variados, não estou 
conseguindo colocá-las para aparecerem uma por vez, dentro do box.
Também não consegui fazer a função funcionar utilizando o for().
Coloquei na função o '-3', porque está sobrando um espaço 
em branco no final do carrossel.
Preciso melhorar esses pontos 
*/