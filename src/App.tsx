import styled from 'styled-components';
import { Provider } from 'react-redux';

import { TransportTypesReverse } from './_constants/enums';
import { rawData } from './_constants/data';
import Header from './components/Header';
import Main from './components/Main';
import { store } from './state';

export interface lineData {
  line: string;
  transportType: string;
  routesAB: {
    stops: object[];
    segments: object[];
  };
  routeBA: {
    stops: object[];
    segments: object[];
  };
}

const App = (): JSX.Element => {
  //TODO: export the logic of refining the data in account handler & higher abstraction level & use redux <== no props ffs!

  const rawBuses = rawData.filter(vehicle => vehicle.routes[0].transportType === TransportTypesReverse.Bus);
  const busesData: lineData[] = rawBuses.map(bus => {
    const lineNum = bus.line.slice(1);
    const resultBus: lineData = {
      line: lineNum,
      transportType: bus.routes[0].transportType,
      routesAB: {
        stops: bus.routes[0].stops,
        segments: bus.routes[0].segments,
      },
      routeBA: {
        stops: bus.routes[1].stops,
        segments: bus.routes[1].segments,
      },
    };
    return resultBus;
  });

  const rawTrolleybus = rawData.filter(vehicle => vehicle.routes[0].transportType === TransportTypesReverse.Trolleybus);
  const trolleybusData: lineData[] = rawTrolleybus.map(trolleybus => {
    const lineNum = trolleybus.line.slice(2);
    const resultTrolleybus: lineData = {
      line: lineNum,
      transportType: trolleybus.routes[0].transportType,
      routesAB: {
        stops: trolleybus.routes[0].stops,
        segments: trolleybus.routes[0].segments,
      },
      routeBA: {
        stops: trolleybus.routes[1].stops,
        segments: trolleybus.routes[1].segments,
      },
    };
    return resultTrolleybus;
  });

  const rawTrams = rawData.filter(vehicle => vehicle.routes[0].transportType === TransportTypesReverse.Tram);
  const tramsData: lineData[] = rawTrams.map(tram => {
    const lineNum = tram.line.slice(2);
    const resultTram: lineData = {
      line: lineNum,
      transportType: tram.routes[0].transportType,
      routesAB: {
        stops: tram.routes[0].stops,
        segments: tram.routes[0].segments,
      },
      routeBA: {
        stops: tram.routes[1].stops,
        segments: tram.routes[1].segments,
      },
    };
    return resultTram;
  });

  return (
    <Provider store={store}>
      <Wrap>
        <Header />
        <Main busesData={busesData} trolleybusData={trolleybusData} tramsData={tramsData} />
      </Wrap>
    </Provider>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
