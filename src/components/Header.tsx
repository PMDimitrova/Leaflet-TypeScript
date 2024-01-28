import { Heading, Text } from '@radix-ui/themes';
import styled from 'styled-components';

const Header = (): JSX.Element => {
  return (
    <Wrap>
      <Heading size="7" weight="bold" color="cyan">
        Sofia's public transport system map
      </Heading>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 16px 32px;
  border-bottom: 1px solid #868e8b;
  box-shadow: 0 1px 6px #868e8b;
  background-color: #f9f9f9;
`;
