import {CarFront, Fuel, Palette, PersonStanding, Settings} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Separator} from "@/components/ui/separator";

export default function CarSlugPage({params}: {params: string}) {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-10 rounded-md border border-gray-500/30 bg-card px-2 py-5">
      <h1 className="text-center font-sans text-5xl font-bold">HONDA CRV {params}</h1>

      <div className="grid w-11/12 grid-cols-2">
        <div>
          <Carousel
            className="w-full max-w-xl"
            opts={{
              loop: false,
            }}
          >
            <CarouselContent>
              {Array.from({length: 5}).map(() => (
                <CarouselItem key={crypto.randomUUID()}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img alt="Honda imag" src="/crv-2020.png" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col items-start justify-start gap-10 px-14 pt-5">
          <div>
            <h2 className="font-sans text-4xl font-medium">HONDA CRV 2023</h2>
            <strong className="mt-3 text-2xl">USD$ 83.00/día</strong>
          </div>
          <ul className="list-disc px-10">
            <li>
              <strong>Mínimo: 1 día de reserva.</strong>
            </li>
            <li>El depósito es reembolsable.</li>
            <li>Devolución con el mismo nivel de gasolina de la entrega.</li>
          </ul>
          <div className="grid h-auto w-full grid-cols-3 place-items-center gap-7 p-2">
            <div className="flex h-20 w-full flex-col justify-around gap-y-2 rounded-md bg-secondary p-2">
              <div className="flex items-center justify-center gap-x-2">
                <Palette />
                <span className="font-medium">Color</span>
              </div>
              <Separator className=" bg-white/50" />
              <span className="text-center">Blanco</span>
            </div>
            <div className="flex h-20 w-full flex-col justify-around gap-y-2 rounded-md bg-secondary p-2">
              <div className="flex items-center justify-center gap-x-2">
                <Fuel />
                <span className="font-medium">Fuel</span>
              </div>
              <Separator className=" bg-white/50" />
              <span className="text-center">Gasolina</span>
            </div>
            <div className="flex h-20 w-full flex-col justify-around gap-y-2 rounded-md bg-secondary p-2">
              <div className="flex items-center justify-center gap-x-2">
                <Settings />
                <span className="font-medium">Tracción</span>
              </div>
              <Separator className=" bg-white/50" />
              <span className="text-center">4X4</span>
            </div>

            <div className="flex h-20 w-full flex-col justify-around gap-y-2 rounded-md bg-secondary p-2">
              <div className="flex items-center justify-center gap-x-2">
                <CarFront />
                <span className="font-medium">Tipo</span>
              </div>
              <Separator className=" bg-white/50" />
              <span className="text-center">SUV</span>
            </div>
            <div className="col-span-2 flex h-20 w-full flex-col justify-around gap-y-2 rounded-md bg-secondary p-2">
              <div className="flex items-center justify-center gap-x-2">
                <PersonStanding />
                <span className="font-medium">Cantidad de pasajeros</span>
              </div>
              <Separator className=" bg-white/50" />
              <span className="text-center">7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
