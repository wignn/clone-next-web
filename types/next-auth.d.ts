import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
        name: string
        email: string
        role: string
        id: string
        image: string
        username: string
        backendTokens: {
          accessToken: string;
          refreshToken: string;
        }
    }
  }

}


declare module "next-auth/jwt" {

  interface JWT  {
    user: {
        name: string
        email: string
        role: string
        id: string
        image: string
        username: string
        backendTokens: {
          accessToken: string
          refreshToken: string
        }
    }
  }
}


import { User as NextAuthUser, AdapterUser as NextAuthAdapterUser } from "next-auth";

declare module "next-auth" {
  interface User extends NextAuthUser {
    role: string;
    username: string;
    name: string;
    email: string;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    }
  }

  interface AdapterUser extends NextAuthAdapterUser {
    role: string;
    username: string;
    accessTokenExpires: string

    backendTokens: {
      accessToken: string;
      refreshToken: string;
    }

  }
}