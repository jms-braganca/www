# jbraganca_www_v1

Landing page pessoal de *João Bragança* — `www.jbraganca.com.br`.

Site estático single-page (zero build), no mesmo estilo visual Apple-like
dos outros sites (`fundos.jbraganca.com.br` e `projects.jbraganca.com.br`).

## Estrutura (out/2026)

```
index.html               # página única, para clientes e prospects
CNAME                    # www.jbraganca.com.br
shared/site.css          # visual da página (mesmo da página Sobre do Invest Analysis)
shared/assets/photos/joao_web.jpg   # foto de terno, 640 px (a original fica em joao_hero.jpg)
shared/assets/logos/     # Itaú, Inter, Alfa, Ibmec, UFMG (trajetória e formação)
assinatura-email.html    # assinatura de e-mail
favicon.svg, favicon-180.png        # ícone "jb." (navegador e tela inicial do celular)
```

## Conteúdo (página única com âncoras)

1. Topo: marca, seções, tema claro/escuro, Conversar
2. Hero: "Construa legado com método.", certificações, foto e bio
3. Números: 10 anos, 190 famílias, R$ 850 MM, CFP®
4. Como posso ajudar: os três pilares (construir, proteger, transmitir)
5. Como funciona: conversa, diagnóstico, proposta e acompanhamento
6. A ferramenta por trás: Invest Analysis (projects.jbraganca.com.br)
7. Trajetória: linha do tempo proporcional (JS no fim do HTML), Itaú e Inter
8. Formação e certificações · Especialidades
9. Contato: e-mail e LinkedIn

Tema escuro por padrão; preferência em localStorage['site-theme'].

## Publicação

GitHub Pages a partir da branch main deste repositório: o push publica.
