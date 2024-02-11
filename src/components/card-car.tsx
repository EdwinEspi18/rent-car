import Link from "next/link";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import {Badge} from "./ui/badge";

interface CarCard {
  id_car: string;
  modelo: string;
  age: number;
  precio_alquiler: number;
  status: string | null;
  marcasRelation: {marca: string};
}

export function CardCar(props: CarCard) {
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
        <CardTitle className="uppercase text-gray-300">
          {props.marcasRelation.marca} {props.modelo} {props.age}
        </CardTitle>
        <strong className="tracking-wide">USD${props.precio_alquiler} / Día</strong>
        <CardDescription className="mt-3 text-gray-500">
          <Badge className="font-medium text-white">{props.status}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-1">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/vehiculo/${props.id_car}`}>Saber mas</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
