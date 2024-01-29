import { TabsTrigger, TabsRoot, TabsList, TabsContent } from '@radix-ui/themes';
import styled from 'styled-components';

import LineSpecific from './LineSpecific';
import AllLines from './AllLines';

interface lineData {
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

const Main = ({ busesData = {}, trolleybusData = {}, tramsData = {} }) => {
  return (
    <Wrap>
      <Inner>
        <TabsRoot defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="line">Line</TabsTrigger>
          </TabsList>

          <TabsContent value="home" background-color="white">
            <AllLines busesData={busesData} trolleybusData={trolleybusData} tramsData={tramsData} />
          </TabsContent>

          <TabsContent value="line">
            <LineSpecific />
          </TabsContent>
        </TabsRoot>
      </Inner>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 32px 0;
  background-color: #f9f9f9;
  background-image: radial-gradient(#29a383 0.9px, #f9f9f9 0.9px);
  background-size: 18px 18px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 16px;
  background-color: #f9f9f9;
  opacity: 80%;
  border-radius: 16px;
  border: 1px solid #868e8b;
`;
