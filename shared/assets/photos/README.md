# photos/

Onde dropar a foto do hero da landing.

## Arquivo esperado

`joao_hero.jpg` — retrato, idealmente 1200×1500 (4:5), JPG comprimido (~150-250 KB).

Caso o arquivo não exista, a landing renderiza um fallback gracioso com as iniciais
"JB" sobre gradiente cinza-azulado.

## Recortes recomendados

- Enquadramento: peito pra cima, olhar pra câmera ou levemente acima
- Iluminação: natural, fundo neutro (parede branca, escritório clean)
- Object-position do CSS está em `center 25%` (foco na parte superior do retrato)
  — ajustável em `shared/landing.css` na regra `.hero-photo-frame img`.
