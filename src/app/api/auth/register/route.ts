import type {NewUser} from "@/types/usuarios";

import {genSalt, hash} from "bcrypt";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const user = (await request.json()) as NewUser;

  const salt = await genSalt();

  const pass = await hash(user.password, salt);

  const newUser = {
    ...user,
    password: pass,
  };

  try {
    const res = await prisma.usuarios.create({
      data: newUser,
    });

    return Response.json({
      mesage: "ok",
      res,
    });
  } catch (error) {
    return Response.json(
      {
        message: "Bad Request",
      },
      {status: 400},
    );
  }
}
