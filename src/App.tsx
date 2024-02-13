import styled from 'styled-components';
import { useEffect } from 'react';

import { useAppDispatch } from './state/hooks';
import Header from './components/Header';
import { actionCreators } from './state';
import Main from './components/Main';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionCreators.getAllLinesData());
  }, []);
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
