import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';

//TODO: separate the interface in it's own file
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
