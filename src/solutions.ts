const multiplyValue = (value: number, multiplier?: number): number => {
  if (value && multiplier) {
    return value * multiplier;
  }

  return value * 2;
};

// -----------------------------------------------------------------------------------
const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean" && value === true) {
    return "Active";
  }
  return "Inactive";
};

// -------------------------------------------------------------------------------------
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// --------------------------------------------------------------------------------------------
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// -------------------------------------------------------------------------------------
