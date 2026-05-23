# jbraganca_www_v1

Landing page pessoal de *João Bragança* — `www.jbraganca.com.br`.

Site estático single-page (zero build), no mesmo estilo visual Apple-like
dos outros sites (`fundos.jbraganca.com.br` e `projects.jbraganca.com.br`).

## Estrutura

```
jbraganca_www_v1/
├── index.html               # landing single-page
├── CNAME                    # www.jbraganca.com.br
└── shared/
    ├── theme.css            # tokens (cópia do projects_joao_privado_v2)
    ├── private-topbar.css   # topbar (cópia)
    ├── private-topbar.js    # comportamento do topbar
    ├── landing.css          # estilo específico da landing
    └── assets/
        ├── logos/           # alfa, ibmec, inter, itau, ufmg (carreira/formação)
        └── inst/            # logos das plataformas (btg, xp, etc — não usado direto aqui)
```

## Conteúdo (single page com âncoras)

1. **Hero** — "João Bragança. Sua estratégia, antes do retorno."
2. **Ferramentas** — 4 cards: fundos.jbraganca, projects.jbraganca, pipeline, carteira modelo
3. **Carreira** — Itaú (destaque) · Inter · Alfa
4. **Formação** — MBA Controladoria, Pós Mercado Financeiro (Ibmec), Adm UFMG
5. **Contato** — Email, LinkedIn, WhatsApp

## Como publicar (GitHub Pages)

```bash
# 1. Cria o repo
gh repo create jbraganca-www --public --source=. --remote=origin

# 2. Configura GitHub Pages
gh api repos/joao-braganca/jbraganca-www/pages \
  -X POST -f source.branch=main -f source.path=/

# 3. Aponta o DNS (no provedor onde está jbraganca.com.br):
#    A     @     185.199.108.153
#    A     @     185.199.109.153
#    A     @     185.199.110.153
#    A     @     185.199.111.153
#    CNAME www   joao-braganca.github.io
```

Depois disso o CNAME no arquivo já faz GitHub Pages servir em `www.jbraganca.com.br`.

## Editar conteúdo

Tudo está em `index.html`. Trechos a personalizar antes de publicar:

- Email (`mailto:`)
- WhatsApp (link `wa.me/...`)
- LinkedIn URL
- Estatísticas de famílias / AuM
- Período de cada cargo

Os logos podem ser ajustados em `shared/assets/logos/`.

## Mudanças visuais

Toda a paleta e tipografia vem de `shared/theme.css` (tokens) e
`shared/landing.css` (componentes da landing). Variáveis principais:

| Variável | Default |
| --- | --- |
| `--landing-bg` | `#fbfbfd` |
| `--landing-blue` | `#0071e3` |
| `--landing-text` | `#1d1d1f` |
| `--landing-muted` | `#6e6e73` |
| `--landing-radius-card` | `22px` |
