const carousel = document.querySelector('[data-js="carousel-cats"]');
const images = document.querySelectorAll('[data-js="carousel-cats-item"]');

let position = 0;

function carrossel() {
  if (position >= images.length - 1) {
    position = 0;
  } else {
    position++;
  }
  carousel.style.transform = `translateX(-${position * 500}px)`;
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
/* ------- De fato em carrossel tem que está padronizado os tamanhos */
/* --- precisa usar for? */


/*
Aconselho à utilizar o data-atributes (data-js="carousel") do HTML5:

Convenção:
Pode se fazer a mesma coisa de várias maneiras, porém existe uma que a comunidade aderiu como sendo a maneira correta.
Ao trabalhar em um projeto com outras pessoas, elas já esperam que você conheça e utilize essas convenções,
e fica mais fácil de uma dar manutenção no código da outra.

Evitar erros:
Vamos supor que no seu projeto há dois botões (adicionar/remover),
e ambos utilizam a mesma estilização, e portanto, a mesma `class`.
Ao utilizar a classe para percorrer o DOM, pode causar erros,
já que os botões possuem propósitos diferentes, mas esteticamente são iguais.
A medida que seu projeto vai crescendo, você começa a se perder, e não sabe se aquela classe
está sendo utilizada só para estilo, ou se é só para o DOM, ou se é para as duas coisas,
e começa a ficar confuso e demorado para dar manutenção.

_____
E quanto ao usar um ID #cats .. Se precisamos ter 2 componentes na mesma pagina vai dar BO.
Que é o caso das nossas lojas hoje. Temos vários carrosseis na mesma pagina. Aí teria que usar `class`
e entraria no problema acima. Ficaria confuso saber se a `class` é só para estilo ou tem algum JS olhando para ele.
___
Aí, entra o assunto convenção. Ao olhar o código abaixo, a manutenção fica mais rapida, porque já identifica facilmente as utilizacões.
Ex:
<div class="carrossel" data-js="carousel">...</div>

Só de bater o olho, já conseguimos entender quem controla o estilo e já identificamos que tem algum JS olhando para aquele elemento.

Um data attribute seria assim: data-* ...
Costumo usar `data-js` .. para justamente saber mais rapido que tem um js olhando para ele.

Por exemplo no quiz usei `data-event`
depois tiver que trocar porque já usavam nos produtos da loja, para não dar conflito..
(está no PR do novo quiz)
coloquei data-ga-event. Ex: antes '[data-event="quiz-giftable-init"]' futuro '[data-ga-event="quiz-giftable-init"]'

Então de cara, já dá para imaginar que esse data attribute está ali só capturamos um evento. Ele não faz mais nada.
Facilitando muito na hora de manutenção.
Então quando você olhar um código que segue as conveções e boas praticas,
vai ver que a manutenção será bem mais rapida, mesmo não tendo visto o projeto antes.
*/