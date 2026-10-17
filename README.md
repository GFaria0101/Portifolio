# Gabriel Faria · Portfólio

Adaptação do código de [MarciaBM/marciabm.github.io](https://github.com/MarciaBM/marciabm.github.io), sob licença MIT (ver LICENSE), originalmente baseado no trabalho de Rohan Kokkula. Preserva layout, fontes, cores e animações da referência com conteúdo profissional de Gabriel Faria.

## Desenvolvimento

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 3001
```

Fontes e configurações estão em `app/` e `vite.config.js`. Edite `app/src/portfolio.jsx` para alterar informações profissionais. Não acrescente telefone, e-mail, localização ou currículo com dados pessoais.

## Atualizar o site

```sh
npm run build
python3 scripts/publish-files.py
```

O script copia o build para a raiz, servida pelo GitHub Pages na branch main. Publique com commit e push após validar. Não altere manualmente o HTML compilado da raiz.
