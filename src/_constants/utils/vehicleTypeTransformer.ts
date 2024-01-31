import { TransportTypesReverse } from '../enums';
import { lineData } from '../../App';

export interface Vehicle {
  line: string;
  routes: {
    transportType: string;
    id: number;
    averagePeople: number;
    averageCrowding: number;
    dataPoints: number;
    stops: {
      id: string;
      name: string;
      averagePeople: number;
      dataPoints: number;
      location: object;
    }[];
    segments: {
      id: string;
      name: string;
      averagePeople: number;
      averageCrowding: number;
      dataPoints: number;
      coordinates: {}[];
    }[];
    name: string;
  }[];
}

const vehicleTypeTransformer = (rawVehicleTypeData: Vehicle[]) => {
  //slice should be from different point for different type A, TB, TM, because of the length of the abbreviation
  const typeSliceStart = rawVehicleTypeData[0].routes[0].transportType === TransportTypesReverse.Bus ? 1 : 2;

  const vehicleData: lineData[] = rawVehicleTypeData.map(vehicleType => {
    const lineNum = vehicleType.line.slice(typeSliceStart);

    const resultVehicle: lineData = {
      line: lineNum,
      transportType: vehicleType.routes[0].transportType,
      routesAB: {
        stops: vehicleType.routes[0].stops,
        segments: vehicleType.routes[0].segments,
      },
      routeBA: {
        stops: vehicleType.routes[1].stops,
        segments: vehicleType.routes[1].segments,
      },
    };
    return resultVehicle;
  });

  return vehicleData;
};

export default vehicleTypeTransformer;
