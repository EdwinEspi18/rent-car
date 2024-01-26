import {BrandLogoSection} from "@/components/brand-logos-section";
import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section className="flex h-auto overflow-hidden p-4">
        <div className="flex flex-1 flex-col justify-center gap-y-7 p-5">
          <h1 className="text-pretty text-left font-sans text-4xl font-bold">
            Descubre la Libertad de Viajar con{" "}
            <span className="text-yellow-200">Edwin Rent-Car</span>.
          </h1>
          <p className="text-pretty text-left font-sans text-lg font-medium text-gray-200/90">
            En Edwin Rent-Car, entendemos que cada viaje es único, y estamos aquí para hacerlo
            inolvidable.{" "}
            <strong className="text-green-200">Nuestra flota de vehículos de alta calidad</strong>{" "}
            está lista para llevarte a donde quieras, con comodidad y estilo.
          </p>
        </div>
        <div className="flex items-end">
          <Button className="font-sans text-lg font-medium text-slate-100 shadow-md shadow-gray-300/30">
            Reserva ahora!
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center p-5">
          <img
            alt="Honda CRV 2023 White"
            className="h-full select-none object-contain"
            src="/crv-2020.png"
          />
        </div>
      </section>
      <BrandLogoSection />
    </>
  );
}
