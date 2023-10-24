# node-web-store

## 1. Visão Geral do Projeto
Esta aplicação Node.js foi construída com o uso do framework Express e serve como ponto de partida para uma plataforma de comércio eletrônico/loja online. Ela incorpora recursos como autenticação de usuários, gerenciamento de sessões e upload de arquivos.

## 2. Instalação
Antes de executar a aplicação, certifique-se de instalar as dependências necessárias:

```npm install```

## 3. Dependências Principais
A aplicação depende de algumas bibliotecas, abaixo estão listadas as mais importantes:

**express**: O framework da aplicação, utilizado na criação do server.

**mongoose**: Uma ferramenta de modelagem de objetos MongoDB para interação com o banco de dados.

**connect-mongodb-session**: Um repositório de sessões para armazenar sessões no MongoDB.

## 4. Rotas
A aplicação possui as seguintes rotas:

**/admin**: Rotas relacionadas a funções administrativas.

**/shop**: Rotas para a parte de compras da aplicação.

**/auth**: Rotas para autenticação de usuários.

## 5. Middleware
Várias funções de middleware foram utilizadas na aplicação, incluindo:

**body-parser**: Middleware para análise dos bodys das requests.

**multer**: Manipula o upload de arquivos de imagens.

**express-session**: Gerencia sessões de usuários.

**csurf**: Fornece proteção contra CSRF.

**connect-flash**: Gerencia mensagens de aviso para a aplicação.

## 6. Tratamento de Erros
A aplicação inclui tratamento de erros básico, caso ocorra um erro inesperado, ele será registrado no console e o usuário verá uma página de erro.

## 7. Banco de Dados
A aplicação se conecta a um banco de dados MongoDB usando o Mongoose. A URI de conexão está armazenada no arquivo .env como MONGODB_URI.

## 8. Executando a Aplicação
Para iniciar a aplicação, utilize o seguinte comando:

```npm start```

Por padrão, a aplicação será executada na porta 3000. Você pode acessá-la em seu navegador da web navegando para http://localhost:3000.

**_Certifique-se de configurar seu banco de dados MongoDB e atualizar a MONGODB_URI no arquivo .env com a sequência de conexão apropriada._**
