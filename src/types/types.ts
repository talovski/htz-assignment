export type Cities = "basel" | "zurich";
export type Directions = "arrival" | "departure";

type Coordinate = {
  type: string;
  x: number;
  y: number;
}

type Station = {
  id: string;
  name: string;
  score?: number;
  coordinate: Coordinate;
  distance?: number;
}

type Prognosis = {
  platform?: string;
  arrival: string;
  departure: string;
  capacity1st?: number;
  capacity2nd?: number;
}

type Stop = {
  station: Station;
  arrival: string | null;
  arrivalTimestamp?: number;
  departure: string;
  departureTimestamp?: number;
  delay: number;
  platform: string;
  prognosis: Prognosis;
  realtimeAvailability?: string;
  location: Station;
}


export type Stationboard = {
  stop: Stop;
  name: string;
  category: string;
  subcategory?: string;
  categoryCode?: number;
  number: string;
  operator: string;
  to: string;
  passList: Stop[];
};

export type Schedule = {
  station: Station;
  stationboard: Stationboard[];
}

export const cities = [
  { city: "bazel" },
  { city: "zurich" }
] as const;

export const directions = {
  arrivals: "arrivals",
  departures: "departures"
} as const;
