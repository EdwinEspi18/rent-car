/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {signOut, useSession, getSession} from "next-auth/react";
import {Calendar, LogOut, User} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeaderMain() {
  const {status, data} = useSession();

  const router = useRouter();

  async function onLogout() {
    return await signOut({
      redirect: true,
    });
  }

  return (
    <header className="mt-5 flex items-center justify-between">
      <Link className="" href="/">
        <img alt="Edwin Rent-Car logo" className="object-contains my-auto h-8" src="/logo.svg" />
      </Link>
      <nav className="flex-1 items-center">
        <ul className="flex h-auto items-center justify-center gap-x-1">
          <li>
            <Button
              asChild
              className={cn("text-base font-medium text-gray-200/90")}
              variant="linkHover"
            >
              <Link href="/">Inicio</Link>
            </Button>
          </li>
          <Separator className="h-5 bg-gray-400/80" orientation="vertical" />
          <li>
            <Button
              asChild
              className={cn("text-base font-medium text-gray-200/90")}
              variant="linkHover"
            >
              <Link href="/flotilla">Flota de Vehículos</Link>
            </Button>
          </li>
          <Separator className="h-5 bg-gray-400/80" orientation="vertical" />
          <li>
            <Button
              asChild
              className={cn("text-base font-medium text-gray-200/90")}
              variant="linkHover"
            >
              <Link href="/contacts">Contactos</Link>
            </Button>
          </li>
        </ul>
      </nav>
      {status === "unauthenticated" ? (
        <div className="flex items-center justify-between gap-x-3">
          <Button
            className="text-lg"
            type="button"
            variant="outline"
            onClick={() => router.push("/auth/signin")}
          >
            Ingresar
          </Button>
          <Separator className="h-8 bg-gray-400/80" orientation="vertical" />
          <Button
            className="text-lg"
            type="button"
            variant="secondary"
            onClick={() => router.push("/auth/signup")}
          >
            Registrarse
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{data ? data.user?.name : "Usuario"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <span className="text-center">Mi Cuenta</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-1.5 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Calendar className="mr-1.5 h-4 w-4" />
                <span>Mis Reservas</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-1.5 h-4 w-4" />
                <span>Cerrar Sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
}
