import type {AuthOptions} from "next-auth";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        cedula: {label: "No. Cedula", type: "text", placeholder: ""},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        const user = await prisma.usuarios.findUnique({
          where: {
            num_cedula: credentials?.cedula,
          },
        });

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
