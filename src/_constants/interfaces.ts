export interface LineData {
  line: string;
  transportType: string;
  routeAB: {
    stops: {
      id: string;
      name: string;
      averagePeople: number;
      dataPoints: number;
      location: { lat: number; lon: number };
    }[];
    segments: {
      id: string;
      name: string;
      averagePeople: number;
      averageCrowding: number;
      dataPoints: number;
      coordinates: {}[];
    }[];
  };
  routeBA: {
    stops: {
      id: string;
      name: string;
      averagePeople: number;
      dataPoints: number;
      location: { lat: number; lon: number };
    }[];
    segments: {
      id: string;
      name: string;
      averagePeople: number;
      averageCrowding: number;
      dataPoints: number;
      coordinates: {}[];
    }[];
  };
}
