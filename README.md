# magic-dc-oauth2
`magic-dc-oauth2` é uma biblioteca Node.js que facilita a autenticação OAuth2 com o Discord e a recuperação de dados do usuário. Utilizando a API do Discord, você pode obter tokens de acesso e informações detalhadas sobre o usuário autenticado.

## Instalação
Primeiro, instale a biblioteca `magic-dc-oauth2`:

```bash
Copiar código
npm install magic-dc-oauth2
```
## Uso
## 1. Obtendo o Token de Acesso
Utilize a função `getCode` para trocar o código de autorização por um token de acesso.

```ts
Copiar código
import { getCode } from 'magic-dc-oauth2';

const clientId = 'seu_client_id';
const clientSecret = 'seu_client_secret';
const code = 'authorization_code_gerado';
const redirectUri = 'seu_redirect_uri';

async function obterToken() {
  const accessToken = await getCode(clientId, clientSecret, code, redirectUri);
  if (accessToken) {
    console.log('Token de Acesso:', accessToken);
  } else {
    console.log('Não foi possível obter o token.');
  }
}

obterToken();
```
## 2. Buscando Dados do Usuário
Use a função `fetchUserData` para obter informações do usuário autenticado com base no token de acesso.

```ts
Copiar código
import { fetchUserData } from 'magic-dc-oauth2';

async function obterDadosUsuario(token: string) {
  const userData = await fetchUserData(token);
  if (userData) {
    console.log('Dados do Usuário:', userData);
  } else {
    console.log('Erro ao obter os dados do usuário.');
  }
}

// Exemplo de uso:
const accessToken = 'token_gerado';
obterDadosUsuario(accessToken);
```
## Funções
`getCode(clientId: string, clientSecret: string, code: string, redirectUri: string): Promise<string | null>`
Troca o código de autorização por um token de acesso. Retorna o token de acesso ou null em caso de erro.

## * Parâmetros:
* clientId (string): O ID do cliente fornecido pelo Discord.
* clientSecret (string): O segredo do cliente.
* code (string): O código de autorização recebido.
* redirectUri (string): O URI de redirecionamento registrado.
### * Retorno: Uma `Promise` com o token de acesso (string) ou `null`.

fetchUserData(access_token: string): Promise<UserResponse | null>
Obtém as informações do usuário autenticado com base no token de acesso fornecido.

Parâmetros:

access_token (string): O token de acesso OAuth2.
Retorno: Uma Promise com os dados do usuário (objeto UserResponse) ou null.

Interface UserResponse
A interface UserResponse descreve os dados retornados pela API do Discord:

ts
Copiar código
interface UserResponse {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  mfa_enabled?: boolean;
  verified?: boolean;
  email?: string;
}
Exceções Tratadas
A biblioteca trata erros ao obter o token de acesso ou os dados do usuário e exibe mensagens de erro no console.

Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
