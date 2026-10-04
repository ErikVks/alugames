# AluGames

Painel de aluguel de boardgames em que cada jogo pode ser alugado e devolvido com um clique, mudando o visual do card para indicar a situação atual. Foi feito como exercício de prática de JavaScript proposto pela [Alura](https://www.alura.com.br).

O `index.html`, o `main.css`, o `_reset.css` e as imagens foram disponibilizados prontos pela Alura. Todo o `app.js` foi programado por mim, e é nele que está a lógica que alterna o estado de cada jogo e contabiliza quantos estão alugados. A proposta do exercício é essa: receber a interface já montada e resolver apenas o comportamento da página.

## Acesse o projeto

A aplicação está publicada em duas plataformas diferentes e pode ser acessada por qualquer um dos links abaixo, já que ambos exibem a mesma versão.

**Vercel:** [alugames-omega-one.vercel.app](https://alugames-omega-one.vercel.app)

**GitHub Pages:** [erikvks.github.io/alugames](https://erikvks.github.io/alugames/)

## Como funciona

A página mostra três boardgames em cards: Monopoly, Ticket to Ride e Takenoko. Cada card tem um botão que começa como "Alugar", exceto o Takenoko, que já vem alugado no HTML inicial. Ao clicar em "Alugar", a capa do jogo escurece, indicando que ele não está disponível, e o botão passa a ser "Devolver" com outra cor de fundo. Ao clicar em "Devolver", a página pede uma confirmação antes de liberar o jogo, e só então a capa volta ao normal e o botão volta a ser "Alugar". A cada mudança, o total de jogos alugados é recalculado e registrado no console do navegador.

## Estrutura de arquivos

```
alugames/
├── index.html
├── css/
│   ├── _reset.css
│   └── main.css
├── js/
│   └── app.js
└── img/
    ├── logo.svg
    ├── fade_bar.svg
    ├── hachuras.svg
    ├── monopoly.png
    ├── ticket_to_ride.png
    └── takenoko.png
```

## O que foi aprendido no JavaScript

### Estado representado por classes CSS

A grande ideia do exercício é que o estado da aplicação não fica guardado em uma variável, e sim no próprio HTML, por meio das classes de cada elemento. Um jogo está alugado quando a sua imagem tem a classe `dashboard__item__img--rented`, que no CSS aplica uma camada escura sobre a capa com o pseudoelemento `::after`. O JavaScript apenas adiciona ou remove essa classe, e o visual acompanha sozinho.

### classList e suas operações

A manipulação das classes é feita com `classList.contains`, para descobrir o estado atual, e com `classList.add` e `classList.remove`, para trocá-lo. O mesmo acontece com o botão, que ganha ou perde a classe `dashboard__item__button--return` para mudar de cor.

### Seleção de elementos a partir de um elemento pai

Em vez de dar um id para cada imagem e cada botão, o código localiza primeiro o card do jogo pelo id com `getElementById` e depois busca a imagem e o botão dentro dele com `querySelector`. Isso funciona porque `querySelector` também pode ser chamado a partir de um elemento, e não só do `document`, limitando a busca aos filhos daquele card. É o que permite usar a mesma função para os três jogos, mudando apenas o número recebido como parâmetro.

### Funções com parâmetros reutilizáveis

A função `alterarStatus` recebe o id do jogo e serve para qualquer um dos cards, evitando escrever três funções praticamente iguais. No HTML, cada botão chama a mesma função passando o seu número.

### Alteração de texto com textContent

O texto do botão alterna entre "Alugar" e "Devolver" por meio da propriedade `textContent`, que troca apenas o conteúdo textual do elemento sem interpretar HTML, diferente do `innerHTML`.

### Funções que retornam valores booleanos

A função `verificarStatus` devolve `true` ou `false` conforme a imagem tenha ou não a classe de alugado. Isolar essa checagem em uma função própria deixa as condições do restante do código mais legíveis e permite reaproveitá-la na contagem dos jogos alugados.

### Confirmação do usuário com confirm

Antes de devolver um jogo, o código chama `confirm`, que abre uma caixa de diálogo do navegador e devolve `true` ou `false` conforme a resposta. Usar esse retorno direto dentro do `if` garante que a devolução só aconteça se o usuário confirmar, evitando cliques acidentais.

### Laço de repetição e template strings

A função `contarJogosAlugados` percorre os cards com um `for` e monta o id de cada um com template string, usando a sintaxe `${}` para interpolar o número do laço. O contador soma apenas os jogos cuja imagem está marcada como alugada e o total é enviado ao console com `console.log`, recurso bastante usado para acompanhar o que está acontecendo no código durante o desenvolvimento.

## Como executar

Não é necessária nenhuma instalação. Basta clonar ou baixar o repositório e abrir o `index.html` no navegador, ou acessar um dos links de publicação acima. Para ver a contagem de jogos alugados, abra o console do navegador com a tecla F12.

```bash
git clone https://github.com/erikvks/alugames.git
cd alugames
```

## Tecnologias

HTML5 e CSS3 fornecidos pela Alura, JavaScript e Google Fonts (Inter e Chakra Petch).

## Créditos

Exercício proposto pela [Alura](https://www.alura.com.br), que disponibilizou o layout, o HTML, o CSS e as imagens. A implementação do JavaScript é minha.
