# Formulário de Alunos em React

Este é um projeto em React que consiste em um formulário de alunos. Utiliza a API "https://randomuser.me/api/?results=50" para obter dados aleatórios de alunos, e também inclui um componente chamado "cursos" para fornecer nomes para o campo "curso".

## Funcionalidades

- **Botões de Ações:** Foram criados botões de ações para interação com o formulário.
- **Enviar:** O botão "Enviar" cria um card na tela de lista de alunos, que contém as informações do aluno preenchidas no formulário.
- **Autocompletar:** Foi criado um botão "Autocompletar" para preencher os dados dos alunos de forma rápida, populando assim a lista de alunos.
- **Paginação:** A lista de alunos conta com paginação para mostrar quantas páginas foram criadas, com pelo menos 6 alunos cadastrados por página. Foi utilizado o React Pagination para configurar a paginação.

## Tecnologias Utilizadas

- **React:** Utilizado para criar o projeto e os componentes.
- **Axios:** Integrado à API "https://randomuser.me/api/?results=50" para obter os dados dos alunos.
- **Local Storage:** Utilizado para armazenar as informações dos alunos, evitando que sejam perdidas quando a página for atualizada.
- **Sass:** Utilizado para escrever a folha de estilo, devido à sua simplicidade e facilidade de uso.

## Como Executar o Projeto

1. Clone o repositório: `https://github.com/joaumsud/listagem-alunos.git`
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm start`
4. Acesse o projeto no navegador: [http://localhost:3000](http://localhost:3000)

Divirta-se explorando o formulário de alunos em React!
