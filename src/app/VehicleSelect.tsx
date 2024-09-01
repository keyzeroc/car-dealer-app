"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { VehicleType, years } from "./page";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type VehicleSelectProps = {
  vehicleData: VehicleType[];
};

export default function VehicleSelect({ vehicleData }: VehicleSelectProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null,
  );
  const [selectedYear, setSelectedYear] = useState("");

  const isLinkEnabled = selectedVehicle !== null && selectedYear.trim() !== "";
  const enabledLinkStyles = isLinkEnabled
    ? ""
    : "pointer-events-none bg-gray-500";

  const onVehicleSelect = (selectedType: string) => {
    const foundVehicle = vehicleData.find(
      (vehicle) => vehicle.MakeName === selectedType,
    );
    if (!foundVehicle) return;
    setSelectedVehicle(foundVehicle);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <p>Select your vehicle type</p>
        <Select onValueChange={(selectedType) => onVehicleSelect(selectedType)}>
          <SelectTrigger className="ml-auto w-[180px]">
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
      </div>
      <div className="flex gap-4">
        <p>Select year of the car</p>
        <Select onValueChange={(selectedYear) => setSelectedYear(selectedYear)}>
          <SelectTrigger className="ml-auto w-[180px]">
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
      </div>
      <Link
        aria-disabled={!isLinkEnabled}
        className={cn(
          `inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
          enabledLinkStyles,
        )}
        href={`/result/${selectedVehicle?.MakeId}/${selectedYear}`}
      >
        Next
      </Link>
    </div>
  );
}
