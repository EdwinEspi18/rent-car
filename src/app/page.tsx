export default function HomePage() {
  return (
    <section className="flex h-auto overflow-hidden  p-4">
      <div className="flex flex-1 flex-col justify-center gap-y-8  p-5">
        <h1 className="text-pretty text-left font-sans text-4xl font-bold">
          Descubre la Libertad de Viajar con{" "}
          <span className="text-yellow-200">[Nombre de la Empresa]</span>
        </h1>
        <p className="text-pretty text-left font-sans text-xl font-medium text-gray-200/90">
          En [Nombre de la Empresa], entendemos que cada viaje es único, y estamos aquí para hacerlo
          inolvidable. Nuestra flota de vehículos de alta calidad está lista para llevarte a donde
          quieras, con comodidad y estilo.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-5">
        <img
          alt="Honda CRV 2023 White"
          className="h-full select-none object-contain"
          src="/crv-2020.png"
        />
      </div>
    </section>
  );
}
