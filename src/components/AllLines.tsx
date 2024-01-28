import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  TableRowHeaderCell,
  DropdownMenuRoot,
  DropdownMenuItem,
  TableRoot,
  TableCell,
  TableRow,
  Button,
  Text,
} from '@radix-ui/themes';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CaretDownIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const AllLines = () => {
  return (
    <Wrap>
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button>
            All Lines
            <CaretDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>Buses</DropdownMenuItem>
          <DropdownMenuItem>Trolleys</DropdownMenuItem>
          <DropdownMenuItem>Trams</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>

      <TableWrap>
        <TableRoot>
          <TableRow>
            <TableRowHeaderCell>
              <Text weight="medium">BUSES</Text>
            </TableRowHeaderCell>
            <TableCell>ONE</TableCell>
            <TableCell>TWO</TableCell>
          </TableRow>

          <TableRow>
            <TableRowHeaderCell>
              <Text weight="medium">TROLLEYS</Text>
            </TableRowHeaderCell>
            <TableCell>THREE</TableCell>
            <TableCell>FOUR</TableCell>
          </TableRow>

          <TableRow>
            <TableRowHeaderCell>
              <Text weight="medium">TRAMS</Text>
            </TableRowHeaderCell>
            <TableCell>FIVE</TableCell>
            <TableCell>SIX</TableCell>
          </TableRow>
        </TableRoot>
      </TableWrap>

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
export default AllLines;

const Wrap = styled.div`
  padding: 16px 0;
`;

const TableWrap = styled.div`
  max-width: 350px;
`;

const MapWrap = styled.div`
  overflow: hidden;
  padding: 16px;
`;
