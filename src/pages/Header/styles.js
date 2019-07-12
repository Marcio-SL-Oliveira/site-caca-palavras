import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => (props.error ? 'red' : '#0c6fe0')};
  color: #fff;
  font-size: 16px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    margin-bottom: 5px;
    align-content:center
  }
  p {
    font-size: 30px;
  }
  span {
    font-size: 14px;
  }
`;
