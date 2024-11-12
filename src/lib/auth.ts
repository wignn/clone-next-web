

import type { NextAuthOptions, } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { API_URL } from "../constant/Network";
import { JWT } from "next-auth/jwt";



export const authOptions: NextAuthOptions = {

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "wignn" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await axios.patch(`${API_URL.url}/users`, { username: credentials?.username, password: credentials?.password });
          const users = response.data;
          const user = users.data;
          console.log(user);

          if (!user) {
            throw new Error("User not found");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            image: user.image,
            role: user.role,
            backendTokens: {
              accessToken: user.backendTokens.accessToken,
              refreshToken: user.backendTokens.refreshToken,
            },
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          name: user.name,
          role: user.role,
          backendTokens: {
            accessToken: user.backendTokens.accessToken,
            refreshToken: user.backendTokens.refreshToken,
          },
          accessTokenExpires: Date.now() + 60 * 60 * 1000,
        };


      }
      if (Date.now() > (token.accessTokenExpires as number)) {
        return await refreshAccessToken(token);
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          username: token.username,
          name: token.name,
          role: token.role,
          backendTokens: {
            accessToken: (token.backendTokens as { accessToken: string, refreshToken: string }).accessToken,
            refreshToken: (token.backendTokens as { accessToken: string, refreshToken: string }).refreshToken,
          },
          accessTokenExpires: Date.now() + 60 * 60 * 1000,

        },
      }

    },

  },
};

async function refreshAccessToken(token: JWT) {
  try {
    const response = await axios.post(`${API_URL.url}/users/refresh`, {
      refreshToken: (token.backendTokens as { accessToken: string, refreshToken: string }).refreshToken,
    });

    const refreshedTokens = response.data;

    return {
      ...token,
      backendTokens: {
        accessToken: refreshedTokens.backendTokens.accessToken,
        refreshToken: refreshedTokens.refreshToken 
      },
      accessTokenExpires: Date.now() + 60 * 60 * 1000,
    };
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}