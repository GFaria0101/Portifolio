# Olá, eu sou Gabriel Faria 👋

Sou profissional de **Application Support e IT Support L2/L3**, com experiência em desenvolvimento Full Stack, liderança de equipas, sistemas e automação. Gosto de investigar problemas, transformar rotinas em soluções e conectar pessoas e tecnologia.

Este é o meu portfólio pessoal: um espaço para apresentar a minha trajetória, partilhar os meus projetos e mostrar as tecnologias com que trabalho.

🔗 **[Visite o meu portfólio](https://gfaria0101.github.io/Portifolio/)** · **[LinkedIn](https://www.linkedin.com/in/gabrielfaria0101/)** · **[GitHub](https://github.com/GFaria0101)**

## Sobre o projeto

Construí este site para reunir a minha experiência profissional numa apresentação simples e interativa. Aqui pode conhecer o meu percurso, explorar as minhas competências e abrir uma versão pública do meu CV.

O portfólio inclui:

- Apresentação e competências em suporte, dados, Full Stack e DevOps.
- Experiência profissional e formação académica.
- Página sobre mim, com linguagens, idiomas e interesses.
- Projetos e links para os meus perfis profissionais.
- CV numa aba separada, com opção de impressão ou exportação para PDF.
- Temas claro e escuro, com a preferência guardada no navegador.
- Seletor de português, inglês, espanhol e francês, incluindo o CV.
- Layout responsivo para computador, tablet e telemóvel.

## Tecnologias

**React · JavaScript · Vite · CSS · Styled Components · Lottie · GitHub Pages**

## Executar localmente

Com Node.js e npm instalados:

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 3001
```

## Organização

- `app/src/portfolio.jsx`: conteúdo e competências profissionais.
- `app/src/pages/`: páginas do portfólio.
- `app/src/components/`: componentes partilhados.
- `app/src/pages/cv/CV.jsx`: versão pública e multilíngue do CV.
- `app/src/locales/translations.json`: traduções dos textos.
- `app/src/i18n.jsx`: idioma, conteúdo traduzido e preferência do visitante.
- `app/src/theme.js`: cores dos temas claro e escuro.

## Gerar a versão de publicação

```sh
npm run build
python3 scripts/publish-files.py
```

O build é gerado em `dist/`. O script copia os arquivos de publicação para a raiz do repositório, utilizada pelo GitHub Pages na branch `main`. As alterações devem ser feitas nos fontes em `app/`, antes de gerar uma nova versão.

## Idiomas

O seletor no cabeçalho permite mudar de língua sem sair da página. A preferência é guardada em `localStorage` (`gabriel-portfolio-language`), com português como padrão. O CV usa o mesmo conteúdo traduzido do portfólio e mantém os dados de contacto privados fora da apresentação. `cv.html` encaminha para a página `#/cv`, que também permite trocar o idioma e imprimir.
