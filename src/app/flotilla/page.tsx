import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";

function CategoriesPage() {
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
            <div className="grid grid-cols-3 gap-5 " />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="jeepetas">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 " />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="familiar">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 " />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="off-road">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 " />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="deluxe">
          <ScrollArea className="h-[29.5rem] w-full">
            <div className="grid grid-cols-3 gap-5 " />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CategoriesPage;
