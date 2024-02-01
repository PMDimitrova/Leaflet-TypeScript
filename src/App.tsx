import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';

//TODO: separate the interface in it's own file
export interface lineData {
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

const App = (): JSX.Element => {
  return (
    <Wrap>
      <Header />
      <Main />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
