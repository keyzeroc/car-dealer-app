export const fetchVehicleTypes = async () => {
  return fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
  )
    .then((res) => res.json())
    .then((data) => data.Results)
    .catch((err) => {
      console.log(err);
      throw new Error(
        "Sorry! Could not fetch vehicle details, please try again!",
      );
    });
};