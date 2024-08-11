import axios from "axios";

export default async function getCode(clientId: string, clientSecret: string, code: string, redirectUri: string): Promise<string | undefined> {

  try {
    const res = await axios.post(
      "https://discord.com/api/oauth2/token",
      {
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      });
    const { access_token } = res.data;
    return access_token;
  } catch (err) {
    console.log("Ocorreu um erro ao obter o token: ", err);
    return undefined;
  }
}

export async function fetchUserData(access_token: string) {
  try {
    if (!access_token) {
      throw new Error("Token não encontrado");
    }
    const res = await axios.get("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  } catch (err) {
    console.log("Ocorreu um erro ao pegar os dados do usuário: ", err);
    return null;
  }
}
