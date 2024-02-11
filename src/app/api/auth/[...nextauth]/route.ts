import type {AuthOptions} from "next-auth";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcrypt";

import prisma from "@/lib/prisma";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        cedula: {label: "No. Cédula", type: "text", placeholder: ""},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        const user = await prisma.usuarios.findUnique({
          where: {
            num_cedula: credentials?.cedula,
          },
        });

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        const isPassword = await compare(credentials?.password, user.password);

        if (!isPassword) {
          throw new Error("Contraseña incorrecta");
        }
        const newUser = {
          id: user.id_user,
          name: user.nombre_completo,
          role: user.role,
        };

        return newUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
