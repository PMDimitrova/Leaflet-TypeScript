import extractStopsCoordinatesPerLinePerRoute from './extractStopsCoordinatesPerLinePerRoute';
import { StopData } from './extractStopsCoordinatesPerLinePerRoute';
import { TransportTypes } from '../_constants/enums';
import { LineData } from '../_constants/interfaces';

const extractStopsToShow = (props: {
  vehicleType: 'All Lines' | 'Bus' | 'Trolleybus' | 'Tram';
  route: 'routeAB' | 'routeBA' | 'both ways';
  busLineData: LineData[] | null;
  trolleybusLineData: LineData[] | null;
  tramLineData: LineData[] | null;
}) => {
  const { vehicleType, route, busLineData, trolleybusLineData, tramLineData } = props;
  console.log('busLineData: ', busLineData);
  const stopsForVisualizing: StopData[] = [];

  if (vehicleType === 'All Lines') {
    if (route === 'both ways') {
      //Bus data
      const busResAB = extractStopsCoordinatesPerLinePerRoute({ lineData: busLineData, route: 'routeAB' });
      stopsForVisualizing.push(...busResAB);
      const busResBA = extractStopsCoordinatesPerLinePerRoute({ lineData: busLineData, route: 'routeBA' });
      stopsForVisualizing.push(...busResBA);

      //Trolleybus data
      const trolleybusResAB = extractStopsCoordinatesPerLinePerRoute({
        lineData: trolleybusLineData,
        route: 'routeAB',
      });
      stopsForVisualizing.push(...trolleybusResAB);
      const trolleybusResBA = extractStopsCoordinatesPerLinePerRoute({
        lineData: trolleybusLineData,
        route: 'routeBA',
      });
      stopsForVisualizing.push(...trolleybusResBA);

      //Tram data
      const tramResAB = extractStopsCoordinatesPerLinePerRoute({ lineData: tramLineData, route: 'routeAB' });
      stopsForVisualizing.push(...tramResAB);

      const tramResBA = extractStopsCoordinatesPerLinePerRoute({ lineData: tramLineData, route: 'routeBA' });
      stopsForVisualizing.push(...tramResBA);
    } else if (route === 'routeAB') {
      //TODO:
    } else if (route === 'routeBA') {
      //TODO:
    }
  } else if (vehicleType === TransportTypes.A) {
    //BUS
    if (route === 'both ways') {
      const busResAB = extractStopsCoordinatesPerLinePerRoute({ lineData: busLineData, route: 'routeAB' });
      stopsForVisualizing.push(...busResAB);

      const busResBA = extractStopsCoordinatesPerLinePerRoute({ lineData: busLineData, route: 'routeBA' });
      stopsForVisualizing.push(...busResBA);
    } else if (route === 'routeAB') {
      //TODO:
    } else if (route === 'routeBA') {
      //TODO:
    }
  } else if (vehicleType === TransportTypes.TB) {
    //TROLLEYBUS
    if (route === 'both ways') {
      const trolleybusResAB = extractStopsCoordinatesPerLinePerRoute({
        lineData: trolleybusLineData,
        route: 'routeAB',
      });
      stopsForVisualizing.push(...trolleybusResAB);

      const trolleybusResBA = extractStopsCoordinatesPerLinePerRoute({
        lineData: trolleybusLineData,
        route: 'routeBA',
      });
      stopsForVisualizing.push(...trolleybusResBA);
    } else if (route === 'routeAB') {
      //TODO:
    } else if (route === 'routeBA') {
      //TODO:
    }
  } else if (vehicleType === TransportTypes.TM) {
    //TRAM
    if (route === 'both ways') {
      const tramResAB = extractStopsCoordinatesPerLinePerRoute({ lineData: tramLineData, route: 'routeAB' });
      stopsForVisualizing.push(...tramResAB);

      const tramResBA = extractStopsCoordinatesPerLinePerRoute({ lineData: tramLineData, route: 'routeBA' });
      stopsForVisualizing.push(...tramResBA);
    } else if (route === 'routeAB') {
      //TODO:
    } else if (route === 'routeBA') {
      //TODO:
    }
  }

  return stopsForVisualizing;
};

export default extractStopsToShow;
