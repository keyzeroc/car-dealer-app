import { fetchVehicleTypes } from "@/app/actions";
import { VehicleType } from "@/app/page";

export async function generateStaticParams() {
  const vehicleData: VehicleType[] = await fetchVehicleTypes();
  if (vehicleData) {
    return vehicleData.map((vehicle) => ({
      makeId: vehicle.MakeId + "",
    }));
  }
}
type Props = {
  params: {
    makeId: string;
    year: number;
  };
};

export default async function page({ params }: Props) {
  const { makeId, year } = params;
  const vehicles = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  ).then((res) => res.json());

  return <div>{JSON.stringify(vehicles)}</div>;
}
