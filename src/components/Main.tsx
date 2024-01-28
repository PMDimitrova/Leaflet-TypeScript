import styled from 'styled-components';

const Main = () => {
  return (
    <Wrap>
      <div>HOME</div>
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
  /* opacity: 0.7; */
  background-image: radial-gradient(#12a594 0.9px, #f9f9f9 0.9px);
  background-size: 18px 18px;
`;
