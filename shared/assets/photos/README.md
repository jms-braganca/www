# photos/

- `joao_hero.jpg`: a foto original, de terno (1023 × 1537).
- `joao_web.jpg`: a mesma, reduzida para 640 px; é a que a página usa (hero e og:image).

Para trocar a foto: substituir o original e gerar a versão web de novo, por exemplo
`sips -s format jpeg -s formatOptions 82 --resampleWidth 640 joao_hero.jpg --out joao_web.jpg`.
O enquadramento no círculo do hero fica em `shared/site.css`, regra `.foto img` (object-position).
