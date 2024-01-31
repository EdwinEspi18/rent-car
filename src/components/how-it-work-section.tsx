import {AddUserIcon} from "./icons/add-user";
import {CalendarIcon} from "./icons/calendar-icon";
import {CarIcon} from "./icons/car-icon";
import {Separator} from "./ui/separator";

export function HowItWorkSection() {
  return (
    <section className="mt-20 rounded-md p-4">
      <h3 className="text-pretty py-3 text-center font-sans text-4xl font-medium text-yellow-100">
        Como funciona esto
      </h3>
      <Separator className="my-2 bg-gray-300" />
      <div className="grid grid-cols-3 gap-x-16 py-7">
        <div className="flex flex-col gap-y-5">
          <div className="mx-auto flex h-16 w-1/4 items-center justify-center rounded-xl bg-slate-300 p-7">
            <AddUserIcon className="h-16 object-contain" />
          </div>
          <p className="mx-auto w-[80%] text-pretty text-center text-lg text-gray-200">
            Debes registrarte con correo electrónico, licencia de conducir o iniciar sesión.
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="mx-auto flex h-16 w-1/4 items-center justify-center rounded-xl bg-slate-300 p-7">
            <CalendarIcon className="h-16 object-contain" />
          </div>
          <p className="mx-auto w-[80%] text-pretty text-center text-gray-200">
            Seleccione su fecha y hora de recogida para reservar su coche
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="mx-auto flex h-16 w-1/4 items-center justify-center rounded-xl bg-slate-300 p-7">
            <CarIcon className="h-16 object-contain" />
          </div>
          <p className="mx-auto w-[80%] text-pretty text-center text-gray-200">
            Procesamos todo y listo, te contactamos.
          </p>
        </div>
      </div>
    </section>
  );
}
