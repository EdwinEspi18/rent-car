import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";

export function HeaderMain() {
  return (
    <header className="mt-5 flex items-center justify-between">
      <Link className="" href="/">
        <img alt="Edwin Rent-Car logo" className="object-contains my-auto h-8" src="/logo.svg" />
      </Link>
      {/* <Link className="font-sans text-2xl font-bold " href="/">
        Rent Car Logo
      </Link> */}
      <nav className="flex-1 items-center">
        <ul className="flex h-auto items-center justify-center gap-x-1">
          <li>
            <Button asChild className={cn("text-base font-medium text-gray-200/90")} variant="link">
              <Link href="/">Inicio</Link>
            </Button>
          </li>
          <Separator className="h-5 bg-gray-400/80" orientation="vertical" />
          <li>
            <Button asChild className={cn("text-base font-medium text-gray-200/90")} variant="link">
              <Link href="/bookings">Flota de Vehiculos</Link>
            </Button>
          </li>
          <Separator className="h-5 bg-gray-400/80" orientation="vertical" />
          <li>
            <Button asChild className={cn("text-base font-medium text-gray-200/90")} variant="link">
              <Link href="/contacts">Reservas</Link>
            </Button>
          </li>
          <Separator className="h-5 bg-gray-400/80" orientation="vertical" />
          <li>
            <Button asChild className={cn("text-base font-medium text-gray-200/90")} variant="link">
              <Link href="/contacts">Contactos</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-x-3">
        <Button className="text-lg" variant="outline">
          Ingresar
        </Button>
        <Separator className="h-8 bg-gray-400/80" orientation="vertical" />
        <Button className="text-lg" variant="secondary">
          Registrarse
        </Button>
      </div>
    </header>
  );
}