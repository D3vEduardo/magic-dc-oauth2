import axios from "axios";

export async function getCode(clientId: string, clientSecret: string, code: string, redirectUri: string): Promise<string | null> {

  try {

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("code", code);
    params.append("redirect_uri", redirectUri);
    params.append("grant_type", "authorization_code")
;
    const res = await axios.post(
      "https://discord.com/api/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }  
    );
    const { access_token } = res.data;
    return access_token;
  } catch (err) {
    console.log("Ocorreu um erro ao obter o token: ", err);
    return null;
  }
}

export interface UserResponse {
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

export async function fetchUserData(access_token: string): Promise<UserResponse | null> {
  try {
    if (!access_token) {
      throw new Error("Token não encontrado");
    }
    const res = await axios.get("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return res.data;
  } catch (err) {
    console.log("Ocorreu um erro ao pegar os dados do usuário: ", err);
    return null;
  }
}
