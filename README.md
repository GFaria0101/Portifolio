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
- `app/public/cv.html`: versão pública do CV.
- `app/src/theme.js`: cores dos temas claro e escuro.

## Gerar a versão de publicação

```sh
npm run build
python3 scripts/publish-files.py
```

O build é gerado em `dist/`. O script copia os arquivos de publicação para a raiz do repositório, utilizada pelo GitHub Pages na branch `main`. As alterações devem ser feitas nos fontes em `app/`, antes de gerar uma nova versão.

## Referências

O visual e a estrutura foram adaptados dos portfólios de [Márcia Matias](https://github.com/MarciaBM/marciabm.github.io) e [Rohan Kokkula](https://rohankokkula.netlify.app/home). Os avisos do código reutilizado estão em [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
