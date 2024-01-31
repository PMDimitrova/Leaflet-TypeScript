import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  TableRowHeaderCell,
  DropdownMenuRoot,
  DropdownMenuItem,
  TableRoot,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Text,
} from '@radix-ui/themes';
import { MapContainer, Popup, TileLayer, Marker, Polyline } from 'react-leaflet';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { polyline } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TransportTypes } from '../_constants/enums';
import { useAppSelector } from '../state/hooks';
import PinIcon from './PinIcon';

const allLinesLabel = 'All Lines';
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

const AllLines = (props: { busesData: lineData[]; trolleybusData: lineData[]; tramsData: lineData[] }) => {
  const { busesData, trolleybusData, tramsData } = props;
  const dropdownOptionsRaw = [...Object.values(TransportTypes), allLinesLabel];
  const dropdownOptions = dropdownOptionsRaw.reverse();

  const allLinesData = useAppSelector(state => state.lines.linesData);
  console.log('allLinesData: ', allLinesData);
  const [showTransportType, setShowTransportType] = useState<String>(dropdownOptions[0]);
  const busLinesNumbers: string[] = [];
  const trolleybusLinesNumbers: string[] = [];
  const tramLinesNumbers: string[] = [];

  useEffect(() => {
    if (busesData.length) {
      busesData.map(bus => busLinesNumbers.push(bus.line));
    }

    if (trolleybusData.length) {
      trolleybusData.map(trolley => trolleybusLinesNumbers.push(trolley.line));
    }

    if (tramsData.length) {
      tramsData.map(tram => tramLinesNumbers.push(tram.line));
    }
  }, []);

  const shouldShowAllLines = showTransportType === allLinesLabel;

  return (
    <Wrap>
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button>
            {showTransportType}
            <CaretDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {dropdownOptions.map(type => {
            return (
              <DropdownMenuItem
                onClick={() => {
                  setShowTransportType(type);
                }}
                key={type}
              >
                {type}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenuRoot>
      <TableWrap>
        <TableRoot>
          <TableBody>
            {(shouldShowAllLines || showTransportType === TransportTypes.A) && (
              <VehicleTypeTableData vehicleType="Buses" lineNumbers={busLinesNumbers} />
            )}

            {(shouldShowAllLines || showTransportType === TransportTypes.TB) && (
              <VehicleTypeTableData vehicleType="Trolleybuses" lineNumbers={trolleybusLinesNumbers} />
            )}

            {(shouldShowAllLines || showTransportType === TransportTypes.TM) && (
              <VehicleTypeTableData vehicleType="Trams" lineNumbers={tramLinesNumbers} />
            )}
          </TableBody>
        </TableRoot>
      </TableWrap>

      <MapWrap id="map">
        <MapContainer center={[42.696819, 23.321549]} zoom={14}>
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={21}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />

          <Polyline //TODO:
            pathOptions={{ color: 'red', weight: 6 }}
            positions={[
              [42.689422292143256, 23.314679347354613],
              [42.688403321856676, 23.32502924899985],
              [42.68594981025931, 23.321408802260486],
            ]}
          >
            <Popup>TODO: обяснителна записка за линията</Popup>
          </Polyline>

          {/* TODO: <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}> */}
          <Marker position={[42.69160274360482, 23.31983964387614]} icon={PinIcon}>
            <Popup>TODO: номер на спирката</Popup>
          </Marker>
          {/* </MarkerClusterGroup> */}
        </MapContainer>
      </MapWrap>
    </Wrap>
  );
};
export default AllLines;

const VehicleTypeTableData = (props: { vehicleType: string; lineNumbers: string[] }) => {
  //TODO: until the redux is not set up, this will show NO data
  // the issue here is that react takes the array e.g. busLinesNumbers and pass it to this component as empty array an renders it empty
  // where as in reality it "magically" appears to have elements in it.

  return (
    <TableRow
      onClick={() =>
        console.log('later here would go the functionality to show map with single line in the second tab')
      }
    >
      <TableRowHeaderCell>
        <Text weight="bold">{props.vehicleType}</Text>
      </TableRowHeaderCell>
      {props.lineNumbers.length && props.lineNumbers.map(line => <TableCell key={line}>{line}</TableCell>)}
    </TableRow>
  );
};

const Wrap = styled.div`
  padding: 16px 0;
`;

const TableWrap = styled.div`
  max-width: 350px;
  min-height: 140px;
`;

const MapWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 16px 0;
`;
