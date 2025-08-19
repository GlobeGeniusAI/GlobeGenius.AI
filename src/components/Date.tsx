export function Date() {
  return (
    <>
      {/* from date input */}

      <div className="flex flex-col">
        <label className="mb-1 ml-2 text-gray-700 font-montserrat text-xl font-medium">
          From:
        </label>
        <input
          type="date"
          className="w-48 rounded-xl border border-gray-300 bg-white py-3 px-4 font-montserrat text-lg text-gray-700 focus:border-blue-900 focus:outline-none hover:cursor-pointer"
        />
      </div>

      {/* to date input*/}

      <div className="flex flex-col">
        <label className="mb-1 ml-2 text-gray-700 font-montserrat text-xl font-medium ">
          To:
        </label>
        <input
          type="date"
          className="w-48 rounded-xl border border-gray-300 bg-white py-3 px-4 font-montserrat text-lg text-gray-700 focus:border-blue-900 focus:outline-none hover:cursor-pointer"
        />
      </div>
    </>
  );
}
