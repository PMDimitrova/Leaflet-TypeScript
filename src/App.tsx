import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';

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
