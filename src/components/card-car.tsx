import Link from "next/link";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export function CardCar() {
  return (
    <Card className="rounded-lg p-4 shadow-md">
      <img
        alt="Car Images"
        className="h-48 w-full rounded-lg border border-gray-700/50 object-cover p-2"
        height="200"
        src="/crv-2020.png"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
      />
      <CardHeader>
        <CardTitle className="text-gray-300">Honda CRV 2020</CardTitle>
        <strong className="tracking-wide">USD$83.00 / Día</strong>
        <CardDescription className="mt-2 text-gray-500">
          La crossover de mejor venta en la última década ahora está disponible con un avanzado tren
          motriz híbrido, que ofrece tracción integral y un andar electrizante.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2">
        <Button asChild className="w-full" variant="outline">
          <Link href="/vehiculo/honda-crv-2023">Leer mas</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
