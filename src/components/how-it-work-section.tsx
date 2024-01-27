import {CalendarIcon} from "./icons/calendar-icon";
import {CarIcon} from "./icons/car-icon";
import {MapPinIcon} from "./icons/map-pin-icon";

export function HowItWorkSection() {
  return (
    <section className="mt-20">
      <h3>How it Work!</h3>
      <div>
        <div>
          <CalendarIcon className="h-10" />
        </div>
        <div>
          <MapPinIcon className="h-10" />
        </div>
        <div>
          <CarIcon className="h-10" />
        </div>
      </div>
    </section>
  );
}
