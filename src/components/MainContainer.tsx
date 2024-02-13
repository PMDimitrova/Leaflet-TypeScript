import { TabsTrigger, TabsRoot, TabsList, TabsContent } from '@radix-ui/themes';
import styled from 'styled-components';

import LineSpecificContent from './LineSpecificContent';
import HomeTabContent from './HomeTabContent';

const MainContainer = () => {
  return (
    <Wrap>
      <Inner>
        <TabsRoot defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="line">Line</TabsTrigger>
          </TabsList>

          <TabsContent value="home" background-color="white">
            <HomeTabContent />
          </TabsContent>

          <TabsContent value="line">
            <LineSpecificContent />
          </TabsContent>
        </TabsRoot>
      </Inner>
    </Wrap>
  );
};

export default MainContainer;

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
