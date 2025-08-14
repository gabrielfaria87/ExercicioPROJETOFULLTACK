# Projeto Fullstack Livros

Este projeto é uma aplicação fullstack para cadastro, exibição e gerenciamento de livros.

## Tecnologias Utilizadas

- Node.js (backend)
- Express
- Sequelize (ORM)
- MySQL (banco de dados)
- HTML, CSS, JavaScript (frontend)

## Estrutura do Projeto

```
ProjetoFULLSTACK/
├── controllers/
│   └── LivroControllers.js
├── database/
│   └── db.js
├── model/
│   └── Livro.js
├── frontend/
│   ├── CSS/
│   │   ├── header.css
│   │   ├── index.css
│   │   ├── livro.css
│   │   └── novoLivro.css
│   ├── pages/
│   │   ├── index.html
│   │   ├── livro.html
│   │   └── novoLivro.html
│   └── scripts/
│       ├── index.js
│       ├── livro.js
│       └── novoLivro.js
├── index.js
├── package.json
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o banco de dados MySQL em `database/db.js`.
3. Inicie o backend:
   ```bash
   node index.js
   ```
4. Abra o arquivo `frontend/pages/index.html` em seu navegador ou utilize um servidor local para servir os arquivos do frontend.

## Funcionalidades

- Adicionar, listar e visualizar livros
- Interface moderna e responsiva

## Observações

- Certifique-se de que o MySQL está rodando e configurado corretamente.
- O frontend consome a API do backend via fetch.

---

Desenvolvido por [Seu Nome].
