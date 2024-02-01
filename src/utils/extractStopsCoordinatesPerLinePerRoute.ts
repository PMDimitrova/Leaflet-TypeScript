import { LineData } from '../state/reducers/linesReducer';

export interface StopData {
  stopId: string;
  line: string;
  route: 'routeAB' | 'routeBA';
  location: { lat: number; lon: number };
}

// Route in the props is meant to be either 'routeAB' or 'routeBA' standing for both ways
//  -> from starting point to ending point and back to the starting point
//  -> this is also the way the information is stored in Redux
const extractStopsCoordinatesPerLinePerRoute = (props: {
  lineData: LineData[] | null;
  route: 'routeAB' | 'routeBA';
}) => {
  const { lineData, route } = props;
  const result: StopData[] = [];

  lineData?.length &&
    lineData.map(line => {
      const lineNr = line.line;

      line[route].stops.map(stop => {
        const stopToAdd: StopData = {
          stopId: stop.id,
          line: lineNr,
          route: route,
          location: { lat: stop.location.lat, lon: stop.location.lon },
        };

        result.push(stopToAdd);
      });
    });

  return result;
};

export default extractStopsCoordinatesPerLinePerRoute;
