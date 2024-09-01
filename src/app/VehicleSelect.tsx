"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { VehicleType } from "./page";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type VehicleSelectProps = {
  vehicleData: VehicleType[];
};

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

export default function VehicleSelect({ vehicleData }: VehicleSelectProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null,
  );
  const [selectedYear, setSelectedYear] = useState("");

  const isLinkEnabled = selectedVehicle && selectedYear.trim() !== "";

  const onVehicleSelect = (selectedType: string) => {
    const foundVehicle = vehicleData.find(
      (vehicle) => vehicle.MakeName === selectedType,
    );
    if (!foundVehicle) return;
    setSelectedVehicle(foundVehicle);
  };

  return (
    <div className="flex gap-4">
      <Select onValueChange={(selectedType) => onVehicleSelect(selectedType)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Vehicle Type" />
        </SelectTrigger>
        <SelectContent>
          {vehicleData.map((vehicle) => (
            <SelectItem key={vehicle.MakeId} value={vehicle.MakeName}>
              {vehicle.MakeName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(selectedYear) => setSelectedYear(selectedYear)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Model Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={"year:" + year} value={year + ""}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link
        aria-disabled={!isLinkEnabled}
        className={`${isLinkEnabled ? "" : "pointer-events-none bg-gray-500"} inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
        href={`/result/${selectedVehicle?.MakeId}/${selectedYear}`}
      >
        Next
      </Link>
    </div>
  );
}
