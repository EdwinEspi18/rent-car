import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {CardCar} from "@/components/card-car";
import prisma from "@/lib/prisma";

async function CategoriesPage() {
  const vehicles = await prisma.vehiculo.findMany({
    select: {
      id_car: true,
      age: true,
      modelo: true,
      precio_alquiler: true,
      categoria: true,
      status: true,
      marcasRelation: {
        select: {
          marca: true,
        },
      },
    },
  });

  return (
    <div>
      <Tabs className="mx-auto w-full max-w-6xl" defaultValue="familiar">
        <TabsList className="grid w-full grid-cols-5 gap-x-1">
          <TabsTrigger className="hover:bg-background/50" value="familiar">
            Familiar
          </TabsTrigger>
          <TabsTrigger className="hover:bg-background/50" value="off-road">
            Off-Road
          </TabsTrigger>
          <TabsTrigger className="hover:bg-background/50" value="sedans">
            Sedan
          </TabsTrigger>
          <TabsTrigger className="hover:bg-background/50" value="jeepetas">
            Jeepetas
          </TabsTrigger>
          <TabsTrigger className="hover:bg-background" value="deluxe">
            Deluxe
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sedans">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {vehicles.map((vehicle) => {
                if (vehicle.categoria === "SEDAN") {
                  return <CardCar key={vehicle.id_car} {...vehicle} />;
                }
              })}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="jeepetas">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {vehicles.map((vehicle) => {
                if (vehicle.categoria === "JEEPETAS") {
                  return <CardCar key={vehicle.id_car} {...vehicle} />;
                }
              })}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="familiar">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {vehicles.map((vehicle) => {
                if (vehicle.categoria === "FAMILIAR") {
                  return <CardCar key={vehicle.id_car} {...vehicle} />;
                }
              })}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="off-road">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {vehicles.map((vehicle) => {
                if (vehicle.categoria === "OFF_ROAD") {
                  return <CardCar key={vehicle.id_car} {...vehicle} />;
                }
              })}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="deluxe">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {vehicles.map((vehicle) => {
                if (vehicle.categoria === "DELUXE") {
                  return <CardCar key={vehicle.id_car} {...vehicle} />;
                }
              })}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CategoriesPage;
