import { fetchVehicleTypes } from "@/app/actions";
import { VehicleType, years } from "@/app/page";
import { Suspense } from "react";

export const revalidate = 5;

export type VehicleModel = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export async function generateStaticParams() {
  const vehicleData: VehicleType[] = await fetchVehicleTypes();
  if (vehicleData) {
    const dataToBeReturned = [];
    const makeIdArray = vehicleData.map((vehicle) => ({
      makeId: vehicle.MakeId,
    }));
    for (const year of years) {
      for (const makeId of makeIdArray) {
        dataToBeReturned.push({ year: year + "", makeId: makeId + "" });
      }
    }
    return dataToBeReturned;
  }
}
type ResultProps = {
  params: {
    makeId: string;
    year: string;
  };
};

export default async function Result({ params }: ResultProps) {
  const { makeId, year } = params;
  const vehicles: VehicleModel[] = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  )
    .then((res) => res.json())
    .then((data) => data.Results);
  console.log(vehicles);

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<p>Loading vehicle data...</p>}>
      {!vehicles && <p>No vehicles found!</p>}
      {vehicles && vehicles.length > 0 && (
        <div className="flex flex-col gap-8">
          <h2 className="text-center text-xl font-bold">
            Showing results for: {vehicles[0].Make_Name}, {year}
          </h2>
          {vehicles.map((vehicle) => (
            <div className="rounded-md border p-4 flex flex-col gap-4">
              <h3>Brand name: {vehicle.Make_Name}</h3>
              <p>Model name: {vehicle.Model_Name}</p>
              <p>Manufacture year: {year}</p>
            </div>
          ))}
        </div>
      )}
      </Suspense>
    </div>
  );
}
