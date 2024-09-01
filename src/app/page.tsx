import { Suspense } from "react";
import { fetchVehicleTypes } from "./actions";
import VehicleSelect from "./VehicleSelect";

export type VehicleType = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export const years = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

export default async function Home() {
  const vehicleData: VehicleType[] = await fetchVehicleTypes();

  return (
    <div className="flex flex-col items-center justify-center gap-40 min-h-full">
      <h1 className="text-8xl">Welcome to car dealership app</h1>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl">Choose your dream car</h2>
        <Suspense fallback={<p>Loading vehicle data</p>}>
          <VehicleSelect vehicleData={vehicleData} />
        </Suspense>
      </div>
    </div>
  );
}
