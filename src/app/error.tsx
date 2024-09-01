"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2>{error.message}</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
