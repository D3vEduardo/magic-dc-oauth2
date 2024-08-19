# Magic Discord Oauth2

Esta biblioteca fornece funções para obter um token de acesso do Discord e buscar dados do usuário autenticado utilizando o OAuth2.

## Funcionalidades

- **Obter Token de Acesso:** Função para obter um token de acesso a partir do código de autorização.
- **Buscar Dados do Usuário:** Função para buscar informações do usuário autenticado usando o token de acesso.

## Instalação

Para usar esta biblioteca, basta instalá-la através do npm:

```bash
npm install magic-dc-oauth2
```
ou
```bash
pnpm install magic-dc-oauth2
```
ou
```bash
yarn add magic-dc-oauth2
```

# Uso
## Obter Token de Acesso
**A função `getCode` obtém um token de acesso a partir do código de autorização fornecido.**

```typescript
import getCode from 'magic-dc-oauth2';

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const code = 'AUTHORIZATION_CODE';
const redirectUri = 'YOUR_REDIRECT_URI';

const token = await getCode(clientId, clientSecret, code, redirectUri);
console.log(token);
```

* clientId: ID do cliente do Discord.
* clientSecret: Segredo do cliente do Discord.
* code: Código de autorização recebido após a autenticação.
* redirectUri: URI de redirecionamento usada na solicitação de autorização.

## Buscar Dados do Usuário
**A função `fetchUserData` obtém dados do usuário autenticado utilizando o token de acesso.**

```typescript
import { fetchUserData } from 'magic-dc-oauth2';

const accessToken = 'YOUR_ACCESS_TOKEN';

const userData = await fetchUserData(accessToken);
console.log(userData);
```

* `accessToken`: Token de acesso obtido através da função `getCode`.

# Tratamento de Erros
* **Erro ao Obter o Token**: Se ocorrer um erro ao obter o token, uma mensagem de erro será exibida no console e a função retornará `undefined`.
* **Erro ao Buscar Dados do Usuário**: Se ocorrer um erro ao buscar os dados do usuário ou se o token não for encontrado, uma mensagem de erro será exibida no console e a função retornará `null`.

# Contribuição
> Sinta-se à vontade para contribuir com melhorias e correções. Para isso, faça um fork do repositório, crie uma branch para sua funcionalidade ou correção e envie um pull request.

# Contato
eduardoaugustolimabueno@outlook.com.br
