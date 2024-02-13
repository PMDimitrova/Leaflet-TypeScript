import { RadioGroupRoot, Flex, Text, RadioGroupItem, Separator } from '@radix-ui/themes';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const LineSpecificContent = () => {
  return (
    <Wrap>
      <Inner>
        <Text size="3" weight="bold">
          Line Direction:
        </Text>
        <Separator size="4" color="cyan" />
      </Inner>

      <RadioGroupRoot defaultValue="1">
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <RadioGroupItem value="1" />

              <Text size="3">A to B</Text>
            </Flex>
          </Text>

          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <RadioGroupItem value="2" />

              <Text size="3">B to A</Text>
            </Flex>
          </Text>
        </Flex>
      </RadioGroupRoot>

      <MapWrap>
        <MapContainer center={[42.696819, 23.321549]} zoom={14}>
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={21}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
        </MapContainer>
      </MapWrap>
    </Wrap>
  );
};

export default LineSpecificContent;
const Wrap = styled.div`
  padding: 16px 0;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 130px;
  margin-bottom: 8px;
`;

const MapWrap = styled.div`
  overflow: hidden;
  padding: 16px;
`;
