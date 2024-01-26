import {Separator} from "./ui/separator";

export function BrandLogoSection() {
  return (
    <section className="mt-24 rounded-md bg-slate-800/80 p-4">
      <h2 className="pb-2 text-center font-sans text-3xl font-medium">
        Marcas disponibles en nuestra flota
      </h2>
      <Separator className="my-2 bg-gray-300" />
      <ul className="flex items-center justify-around pt-2">
        <li>
          <img alt="" className="h-20 object-contain" src="/toyota-logo.svg" />
        </li>
        <li>
          <img alt="" className="h-20 object-contain" src="/honda-logo.svg" />
        </li>
        <li>
          <img alt="" className="h-20 object-contain" src="/mazda-logo.svg" />
        </li>
        <li>
          <img alt="" className="h-20 object-contain" src="/mercedes-logo.svg" />
        </li>
        <li>
          <img alt="" className="h-20 object-contain" src="/bmw-logo.svg" />
        </li>
      </ul>
    </section>
  );
}
