import DestinationInput from "../DestinationsInput";
import { Date } from "../Date";

export default function DestinationDates() {
  return (
    <div className="flex justify-center ">
      {/* search bar */}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-16 flex flex-wrap items-end gap-6 font-montserrat"
      >
        {/* destination input*/}
        <DestinationInput />

        {/* date input*/}
        <Date />

        {/* submit button */}

        <div className="flex pl-12">
          <button
            type="submit"
            className="py-2.5 rounded-2xl bg-[#010a46] px-12 font-montserrat text-2xl font-medium text-white shadow-md transition transform hover:-translate-y-1 hover:bg-[#000759] active:translate-y-0 hover:cursor-pointer"
          >
            Let’s go!
          </button>
        </div>
      </form>
    </div>
  );
}
