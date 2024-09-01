import { fetchVehicleTypes } from "./actions";
import VehicleSelect from "./VehicleSelect";

export type VehicleType = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};


export default async function Home() {
 
  const vehicleData: VehicleType[] = await fetchVehicleTypes();
  // const vehicleTypes = console.log(vehicleData);

  return (
    <div className="flex gap-4">
      <VehicleSelect vehicleData={vehicleData} />
    </div>
  );
}
