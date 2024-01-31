import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";

function CategoriesPage() {
  return (
    <div>
      <Tabs className="mx-auto w-full max-w-6xl" defaultValue="familiar">
        <TabsList className="grid w-full grid-cols-5">
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="jeepetas">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="familiar">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="off-road">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="deluxe">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 ">
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
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
                  <CardTitle className="mt-4">Honda CRV 2020</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    La crossover de mejor venta en la última década ahora está disponible con un
                    avanzado tren motriz híbrido, que ofrece tracción integral y un andar
                    electrizante.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <Button className="w-full" variant="outline">
                    Leer mas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CategoriesPage;
